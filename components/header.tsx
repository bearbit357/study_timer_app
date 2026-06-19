import Link from "next/link";
import { Button } from "./ui/button";
import { NotebookPen } from "lucide-react";

export default function Header() {
  return (
    <div>
      <nav className="max-w-280 mx-auto">
        <div className="p-8">
          <div className="flex justify-between">
            <Link href={"/"}>
              <div className="flex items-center gap-2">
                <NotebookPen />
                <h2 className="text-3xl font-semibold">Study App</h2>
              </div>
            </Link>
            <div className="space-x-4">
              <Link href={"/sign-in"}>
                <Button size="lg" variant="outline" className="px-4">
                  Sign In
                </Button>
              </Link>
              <Link href={"sign-up"}>
                <Button size="lg" className=" px-4">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
