import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container max-w-200 min-h-[calc(100vh-7rem)] mx-auto p-4 py-32">
      <main className="bg-background">
        <section>
          <div className="flex flex-col items-center gap-4">
            <div>
              <h1 className="text-6xl text-center mb-12 font-semibold">
                Track your learning. Achieve your goals.
              </h1>
              <p className="text-center text-xl text-muted-foreground mb-8">
                Stay focused and monitor your progress with ease.Record study
                sessions, track learning streaks, and visualize your growth over
                time—all in one place.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Link href={"/sign-up"}>
                <Button
                  size="lg"
                  className=" py-6 px-8 text-lg font-medium mb-6"
                >
                  Start for free
                  <ArrowRight />
                </Button>
              </Link>
              <p className="text-muted-foreground text-sm">
                Free Forever. No Credit Card Required.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
