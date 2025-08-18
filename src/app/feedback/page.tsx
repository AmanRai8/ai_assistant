"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const FeedbackPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate API call to store feedback
    console.log({ name, email, feedback });
    setSubmitted(true);
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 bg-background text-foreground min-h-screen">
      <div className="w-full max-w-2xl bg-card/90 border border-border rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feedback
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          We’d love to hear your thoughts! Help us improve AI Assistant.
        </p>

        {submitted && (
          <div
            className="text-primary font-bold px-4 py-2 rounded mb-4 text-center text-2xl w-full
               transition transform duration-500 ease-out
               scale-90 opacity-0 animate-show"
          >
            Thank you for your feedback!
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
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;
