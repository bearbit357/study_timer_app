"use client";
import { LogOutIcon } from "lucide-react";
import { DropdownMenuItem } from "./dropdown-menu";
import { signOut } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export default function LogOutBtn() {
  const router = useRouter();
  return (
    <DropdownMenuItem
      className="text-destructive"
      onClick={async () => {
        const result = await signOut();
        if (result.data) {
          router.push("/sign-in");
        } else {
          alert("failed to sign out");
        }
      }}
    >
      <LogOutIcon />
      Log out
    </DropdownMenuItem>
  );
}
