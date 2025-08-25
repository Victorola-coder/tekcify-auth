"use client";

import { useAuth } from "@/app/lib/auth-context";
import { Button } from "@/app/components/ui";
import { Animation } from "@/app/components/global";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import Link from "next/link";

export default function SignUp() {
  const { user, loading, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push("/profile");
    }
  }, [user, loading, router]);

  const handleSignup = async () => {
    try {
      await login();
    } catch (error) {
      toast.error("Failed to start signup process");
    }
  };

  if (loading) {
    return (
      <Animation>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      </Animation>
    );
  }

  return (
    <Animation>
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center space-y-8">
            <div>
              <h1 className="text-4xl font-geistSans font-bold text-white mb-4">
                Create Account
              </h1>
              <p className="text-[#FFFFFF80] text-lg">
                Sign up with Tekcify to get started
              </p>
            </div>

            <div className="space-y-6">
              <Button
                onClick={handleSignup}
                className="w-full text-lg py-4"
                variant="primary"
                size="lg"
              >
                Sign up with Tekcify
              </Button>

              <div className="text-center">
                <p className="text-[#FFFFFF60] text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    className="text-primary hover:underline"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#FFFFFF20]">
              <div className="space-y-4">
                <p className="text-[#FFFFFF60] text-xs">
                  By continuing, you agree to our Terms of Service and Privacy
                  Policy
                </p>
                <Link
                  href="/"
                  className="text-[#FFFFFF60] text-xs hover:text-white"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animation>
  );
}
