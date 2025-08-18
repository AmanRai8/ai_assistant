"use client";

import Image from "next/image";

const AboutPage = () => (
  <div className="flex flex-col items-center justify-center px-4 py-16 bg-background text-foreground">
    {/* Hero Section */}
    <div className="max-w-3xl text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        About <span className="text-primary">AI Assistant</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl mb-6">
        AI Assistant helps you brainstorm ideas, solve problems, and interact
        with AI in real-time. Get instant insights, personalized responses, and
        a smarter way to work with AI.
      </p>
      <div className="relative w-64 md:w-80 h-64 md:h-80 mx-auto rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/ai.jpg"
          alt="AI Assistant"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>

    {/* Features Section */}
    <div className="mt-16 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-card/90 border border-border rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold mb-2 text-primary">
          Real-Time Chat
        </h2>
        <p className="text-muted-foreground">
          Talk to AI instantly and get smart answers, suggestions, and guidance.
        </p>
      </div>
      <div className="bg-card/90 border border-border rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold mb-2 text-primary">
          Personalized
        </h2>
        <p className="text-muted-foreground">
          AI adapts to your preferences and provides tailored responses just for
          you.
        </p>
      </div>
      <div className="bg-card/90 border border-border rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold mb-2 text-primary">Multitask</h2>
        <p className="text-muted-foreground">
          Brainstorm, get suggestions, solve problems, or just have fun chatting
          with AI.
        </p>
      </div>
    </div>

    {/* Call-to-action */}
    <div className="mt-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to interact with AI?
      </h2>
      <p className="text-muted-foreground mb-6">
        Start your real-time AI session and explore smarter ways to work and
        create.
      </p>
      <a
        href="/assistant-page"
        className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors"
      >
        Start Chatting
      </a>
    </div>
  </div>
);

export default AboutPage;
