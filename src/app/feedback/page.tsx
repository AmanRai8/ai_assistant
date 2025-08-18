"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const FeedbackPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: feedback }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setFeedback("");
      } else {
        setError(data.error || "Failed to send feedback.");
      }
    } catch (err) {
      setError("Failed to send feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 bg-background text-foreground min-h-screen">
      <div className="w-full max-w-lg bg-card/90 border border-border rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feedback
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          We’d love to hear your thoughts! Help us improve AI Assistant.
        </p>

        {submitted && (
          <div className="text-green-500 font-bold px-4 py-2 rounded mb-4 text-center animate-show">
            Thank you for your feedback!
          </div>
        )}

        {error && (
          <div className="text-destructive font-bold px-4 py-2 rounded mb-4 text-center animate-show">
            {error}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <textarea
            placeholder="Your Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="border border-border rounded px-3 py-2 bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            rows={5}
            required
          />
          <Button
            type="submit"
            className="bg-primary text-white hover:bg-primary/90 w-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;
