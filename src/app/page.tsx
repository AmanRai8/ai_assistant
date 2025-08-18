import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* CORNER DECORATION */}
            <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2" />

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-7 space-y-8 relative flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <div>
                  <span className="text-foreground">Your Personal</span>
                </div>
                <div>
                  <span className="text-primary">AI Assistant</span>
                </div>
                <div className="pt-2">
                  <span className="text-foreground">Always Ready</span>
                </div>
                <div className="pt-2">
                  <span className="text-foreground">To</span>
                  <span className="text-primary"> Help</span>
                </div>
              </h1>

              {/* SEPERATOR LINE */}
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>

              <p className="text-xl text-muted-foreground w-full sm:w-2/3">
                Chat with your AI assistant for quick answers, guidance, or
                support whenever you need it.
              </p>

              {/* STATS */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 py-6 font-mono">
                <div className="flex flex-col items-center sm:items-start">
                  <div className="text-2xl text-primary">24/7</div>
                  <div className="text-xs uppercase tracking-wider">
                    Availability
                  </div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden sm:block"></div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="text-2xl text-primary">Instant</div>
                  <div className="text-xs uppercase tracking-wider">
                    Responses
                  </div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden sm:block"></div>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="text-2xl text-primary">100%</div>
                  <div className="text-xs uppercase tracking-wider">
                    Personalized
                  </div>
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  asChild
                  className="overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium"
                >
                  <Link
                    href={"/generate-program"}
                    className="flex items-center font-mono"
                  >
                    Talk to Assistant
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="lg:col-span-5 relative mt-10 lg:mt-0">
              {/* CORNER PIECES */}
              <div className="absolute -inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
              </div>

              {/* IMAGE CONTAINER */}
              <div className="relative w-full max-w-md sm:max-w-lg mx-auto aspect-square">
                <div className="absolute inset-0 overflow-hidden rounded-lg bg-cyber-black">
                  <Image
                    src="/ai.jpg"
                    alt="AI Assistant"
                    fill
                    className="object-cover object-center rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
