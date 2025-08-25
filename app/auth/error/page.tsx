"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/app/components/ui";
import { Animation, Glow } from "@/app/components/global";
import Link from "next/link";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const getErrorMessage = (errorCode: string | null) => {
    switch (errorCode) {
      case 'access_denied':
        return 'Access was denied. Please try again.';
      case 'invalid_state':
        return 'Invalid authentication state. Please try again.';
      case 'no_code':
        return 'No authorization code received. Please try again.';
      case 'callback_failed':
        return 'Authentication callback failed. Please try again.';
      default:
        return 'An unexpected error occurred during authentication.';
    }
  };

  return (
    <Animation>
      <div className="min-h-screen flex items-center justify-center p-4">
        <Glow className="max-w-md w-full p-8">
          <div className="text-center space-y-6">
            <div>
              <h1 className="text-3xl font-geistSans font-bold text-white mb-2">
                Authentication Error
              </h1>
              <p className="text-[#FFFFFF80]">
                {getErrorMessage(error)}
              </p>
            </div>

            <div className="space-y-4">
              <Link href="/auth/login">
                <Button className="w-full" variant="primary">
                  Try Again
                </Button>
              </Link>
              
              <Link href="/">
                <Button className="w-full" variant="secondary">
                  Go Home
                </Button>
              </Link>
            </div>

            <div className="pt-6 border-t border-[#FFFFFF20]">
              <p className="text-[#FFFFFF60] text-xs">
                If this problem persists, please contact support
              </p>
            </div>
          </div>
        </Glow>
      </div>
    </Animation>
  );
}
