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

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-7rem)] p-4 bg-white">
      <Card className="flex-1 max-w-md">
        <CardHeader>
          <CardTitle className="text-lg">Sign In</CardTitle>
        </CardHeader>
        <form>
          <CardContent>
            <div className="space-y-8">
              <div className="flex flex-col gap-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-4">
                <Label htmlFor="password">Password</Label>
                <Input id="password" minLength={8} type="password" required />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" className="w-full mx-auto">
              Sign In
            </Button>
            <div className="space-x-4">
              <p>
                Don't have your account?{"   "}
                <Link
                  href="/sign-up"
                  className="text-accent-hover hover:underline hover:text-accent/90"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
