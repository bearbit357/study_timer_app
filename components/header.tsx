"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogOutIcon, NotebookPen } from "lucide-react";
import { getSession } from "@/lib/auth/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import LogOutBtn from "./ui/log-out-btn";
import { useSession } from "@/lib/auth/auth-client";

export default function Header() {
  const { data: session } = useSession();
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
              {session?.user ? (
                <>
                  <Link href={"/dashboard"}>
                    <Button size="lg" className=" px-4">
                      DashBoard
                    </Button>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarFallback className="bg-accent text-white">
                          {session.user.name[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-fit">
                      <DropdownMenuLabel>
                        <div>
                          <p>{session.user.name}</p>
                          <p>{session.user.email}</p>
                        </div>
                      </DropdownMenuLabel>

                      <DropdownMenuSeparator />
                      <LogOutBtn />
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
