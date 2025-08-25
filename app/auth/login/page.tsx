"use client";

import { useAuth } from "@/app/lib/auth-context";
import { Button, Card } from "@/app/components/ui";
import { Animation, Glow } from "@/app/components/global";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const { user, loading, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push('/profile');
    }
  }, [user, loading, router]);

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      toast.error('Failed to start login process');
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
      <div className="min-h-screen flex items-center justify-center p-4">
        <Glow className="max-w-md w-full p-8">
          <div className="text-center space-y-6">
            <div>
              <h1 className="text-3xl font-geistSans font-bold text-white mb-2">
                Welcome Back
              </h1>
              <p className="text-[#FFFFFF80]">
                Sign in to your account to continue
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handleLogin}
                className="w-full"
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

            <div className="pt-6 border-t border-[#FFFFFF20]">
              <p className="text-[#FFFFFF60] text-xs">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </Glow>
      </div>
    </Animation>
  );
}
