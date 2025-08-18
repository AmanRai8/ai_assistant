"use client";

import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background/90 text-foreground flex flex-col items-center py-24 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center font-mono">
        Your Profile
      </h1>

      <div>
        {/* UserProfile component */}
        <div className="flex-1 min-h-[400px] ">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
