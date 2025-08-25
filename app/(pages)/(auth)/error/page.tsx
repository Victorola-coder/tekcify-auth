"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui";
import { useSearchParams } from "next/navigation";
import { Animation } from "@/app/components/global";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const getErrorMessage = (errorCode: string | null) => {
    switch (errorCode) {
      case "access_denied":
        return "Access was denied. Please try again.";
      case "invalid_state":
        return "Invalid authentication state. Please try again.";
      case "no_code":
        return "No authorization code received. Please try again.";
      case "callback_failed":
        return "Authentication callback failed. Please try again.";
      default:
        return "An unexpected error occurred during authentication.";
    }
  };

  return (
    <Animation>
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center space-y-8">
            <div>
              <h1 className="text-4xl font-geistSans font-bold text-white mb-4">
                Authentication Error
              </h1>
              <p className="text-[#FFFFFF80] text-lg">
                {getErrorMessage(error)}
              </p>
            </div>

            <div className="space-y-4">
              <Link href="/auth/login">
                <Button className="w-full text-lg py-4" variant="primary">
                  Try Again
                </Button>
              </Link>

              <Link href="/">
                <Button className="w-full" variant="secondary">
                  Go Home
                </Button>
              </Link>
            </div>

            <div className="pt-8 border-t border-[#FFFFFF20]">
              <div className="space-y-4">
                <p className="text-[#FFFFFF60] text-xs">
                  If this problem persists, please contact support
                </p>
                <Link
                  href="/auth/login"
                  className="text-[#FFFFFF60] text-xs hover:text-white"
                >
                  ← Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animation>
  );
}
