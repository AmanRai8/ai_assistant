"use client";

import { useState } from "react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import {
  HomeIcon,
  UserIcon,
  Brain,
  Github,
  MenuIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <span className="text-2xl font-bold font-mono">
            AI<span className="text-primary">Assistant</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* github button */}
          <a
            href="https://github.com/AmanRai8/ai-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <div className="p-1.5 bg-primary/10 rounded">
              <Github className="w-10 h-7.5 hover:text-primary transition-colors" />
            </div>
          </a>
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-2 text-base hover:text-primary transition-colors"
              >
                <HomeIcon size={20} />
                <span>Home</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-2 text-base hover:text-primary transition-colors"
              >
                <UserIcon size={20} />
                <span>Profile</span>
              </Link>

              <Link
                href="/about"
                className="flex items-center gap-2 text-base hover:text-primary transition-colors"
              >
                <span>About</span>
              </Link>

              <Link
                href="/feedback"
                className="flex items-center gap-2 text-base hover:text-primary transition-colors"
              >
                <span>Feedback</span>
              </Link>

              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary text-base px-5 py-2 hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-primary text-primary-foreground text-base px-5 py-2 hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-md border-t border-border w-full px-4 py-4 flex flex-col gap-4">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <HomeIcon size={20} />
                <span>Home</span>
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <UserIcon size={20} />
                <span>Profile</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <UserIcon size={20} />
                <span>About</span>
              </Link>
              <Link
                href="/feedback"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <UserIcon size={20} />
                <span>Feedback</span>
              </Link>
              <a
                href="https://github.com/AmanRai8/ai-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <div className="p-1.5 bg-primary/10 rounded">
                  <Github className="w-10 h-7.5 hover:text-primary transition-colors" />
                </div>
              </a>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <a
                href="https://github.com/AmanRai8/ai-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 justify-center"
              >
                <div className="p-1.5 bg-primary/10 rounded">
                  <Github className="w-10 h-7.5 hover:text-primary transition-colors" />
                </div>
              </a>
              <SignInButton>
                <Button
                  variant="outline"
                  className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
