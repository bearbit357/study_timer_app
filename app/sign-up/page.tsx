"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { signUp } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setLoading(true);
    try {
      const result = await signUp.email({
        name,
        email,
        password,
      });
      if (result.error) {
        setError(result.error.message ?? "Failed to sign up");
      } else {
        router.push("/dashboard");
      }
    } catch (e) {
      setError("An expected error occured");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-7rem)] p-4 bg-white">
      <Card className="flex-1 max-w-md">
        <CardHeader>
          <CardTitle className="text-lg">Sign Up</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="p-6">
            {error && (
              <div className="text-sm text-destructive/90 bg-destructive/30 rounded-md p-2 mb-4">
                {error}
              </div>
            )}
            <div className="space-y-8">
              <div className="flex flex-col gap-4">
                <Label htmlFor="name">name</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  placeholder="your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="flex flex-col gap-4">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  minLength={8}
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" className="w-full mx-auto" disabled={loading}>
              {loading ? "Creating account..." : "Sign Up"}
            </Button>
            <div className="space-x-4">
              <p>
                Already have an account?{"   "}
                <Link
                  href="/sign-in"
                  className="text-accent-hover hover:underline hover:text-accent/90"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
