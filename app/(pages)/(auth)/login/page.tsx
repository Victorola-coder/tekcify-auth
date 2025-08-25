"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui";
import { useAuth } from "@/app/lib/auth-context";
import { Animation } from "@/app/components/global";

export default function LoginPage() {
  const { user, loading, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push("/profile");
    }
  }, [user, loading, router]);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      toast.error("Failed to start login process");
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
                Welcome Back
              </h1>
              <p className="text-[#FFFFFF80] text-lg">
                Sign in to your account to continue
              </p>
            </div>

            <div className="space-y-6">
              <Button
                onClick={handleLogin}
                className="w-full text-lg py-4"
                variant="primary"
                size="lg"
              >
                Continue with Tekcify
              </Button>

              <div className="text-center">
                <p className="text-[#FFFFFF60] text-sm">
                  Don't have an account?{" "}
                  <button
                    onClick={handleLogin}
                    className="text-primary hover:underline"
                  >
                    Sign up with Tekcify
                  </button>
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
