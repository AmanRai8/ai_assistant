"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { vapi } from "@/lib/vapi";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  content: string;
  role: "assistant" | "user";
};

const GenerateProgramPage = () => {
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [, setCallEnded] = useState(false);

  const { user } = useUser();
  const messageContainerRef = useRef<HTMLDivElement>(null);

  // suppress noisy "Meeting has ended" logs
  useEffect(() => {
    const originalError = console.error;
    console.error = function (msg, ...args) {
      if (
        msg &&
        (msg.includes("Meeting has ended") ||
          (args[0] && args[0].toString().includes("Meeting has ended")))
      ) {
        console.log("Ignoring known error: Meeting has ended");
        return;
      }
      return originalError.call(console, msg, ...args);
    };
    return () => {
      console.error = originalError;
    };
  }, []);

  // auto-scroll messages
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // setup vapi event listeners
  useEffect(() => {
    const handleCallStart = () => {
      setConnecting(false);
      setCallActive(true);
      setCallEnded(false);
    };

    const handleCallEnd = () => {
      setCallActive(false);
      setConnecting(false);
      setIsSpeaking(false);
      setCallEnded(true);
    };

    const handleSpeechStart = () => setIsSpeaking(true);
    const handleSpeechEnd = () => setIsSpeaking(false);

    const handleMessage = (message: {
      type: string;
      transcript?: string;
      transcriptType?: string;
      role?: "assistant" | "user";
    }) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage: ChatMessage = {
          content: message.transcript ?? "",
          role: message.role ?? "assistant",
        };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const handleError = (error: unknown) => {
      console.error("Vapi Error", error);
      setConnecting(false);
      setCallActive(false);
    };

    vapi
      .on("call-start", handleCallStart)
      .on("call-end", handleCallEnd)
      .on("speech-start", handleSpeechStart)
      .on("speech-end", handleSpeechEnd)
      .on("message", handleMessage)
      .on("error", handleError);

    return () => {
      vapi
        .off("call-start", handleCallStart)
        .off("call-end", handleCallEnd)
        .off("speech-start", handleSpeechStart)
        .off("speech-end", handleSpeechEnd)
        .off("message", handleMessage)
        .off("error", handleError);
    };
  }, []);

  const toggleCall = async () => {
    if (callActive) {
      vapi.stop();
    } else {
      try {
        setConnecting(true);
        setCallEnded(false);
        setMessages([]); // clear previous chat

        const fullName = user?.firstName
          ? `${user.firstName} ${user.lastName || ""}`.trim()
          : "There";

        await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
          variableValues: {
            full_name: fullName,
            user_id: user?.id,
          },
        });
      } catch (error) {
        console.error("Failed to start call", error);
        setConnecting(false);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden pb-6 pt-24">
      <div className="container mx-auto px-4 h-full max-w-5xl">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold font-mono">
            <span>Chat with </span>
            <span className="text-primary uppercase">Your AI Assistant</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Have a real-time voice conversation with AI to get help, brainstorm,
            or solve problems instantly.
          </p>
        </div>

        {/* VIDEO CALL AREA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* AI CARD */}
          <Card className="bg-card/90 backdrop-blur-sm border border-border overflow-hidden relative">
            <div className="aspect-video flex flex-col items-center justify-center p-6 relative">
              {/* AI avatar */}
              <div className="relative size-32 mb-4">
                <Image
                  src="/ai.jpg"
                  alt="AI Assistant"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-foreground">CodeFlex AI</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Your Personal AI Assistant
              </p>
            </div>
          </Card>

          {/* USER CARD */}
          <Card className="bg-card/90 backdrop-blur-sm border overflow-hidden relative">
            <div className="aspect-video flex flex-col items-center justify-center p-6 relative">
              <div className="relative size-32 mb-4">
                {user?.imageUrl ? (
                  <Image
                    src={user.imageUrl}
                    alt="User"
                    width={128}
                    height={128}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="size-full bg-muted rounded-full" />
                )}
              </div>
              <h2 className="text-xl font-bold text-foreground">You</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {user
                  ? (user.firstName + " " + (user.lastName || "")).trim()
                  : "Guest"}
              </p>
            </div>
          </Card>
        </div>

        {/* MESSAGE CONTAINER */}
        {messages.length > 0 && (
          <div
            ref={messageContainerRef}
            className="w-full bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 mb-8 h-64 overflow-y-auto transition-all duration-300 scroll-smooth"
          >
            <div className="space-y-3">
              {messages.map((msg, index) => (
                <div key={index} className="message-item animate-fadeIn">
                  <div className="font-semibold text-xs text-muted-foreground mb-1">
                    {msg.role === "assistant" ? "CodeFlex AI" : "You"}:
                  </div>
                  <p className="text-foreground">{msg.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CALL CONTROLS */}
        <div className="w-full flex justify-center gap-4">
          <Button
            className={`w-40 text-xl rounded-3xl ${
              callActive
                ? "bg-destructive hover:bg-destructive/90"
                : "bg-primary hover:bg-primary/90"
            } text-white relative`}
            onClick={toggleCall}
            disabled={connecting}
          >
            {callActive
              ? "End Call"
              : connecting
                ? "Connecting..."
                : "Start Call"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GenerateProgramPage;
