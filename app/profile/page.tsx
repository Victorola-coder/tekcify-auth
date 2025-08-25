"use client";

import { useEffect } from "react";
import { useAuth } from "@/app/lib/auth-context";
import { Animation } from "@/app/components/global";
import { Image, Button } from "@/app/components/ui";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Profile() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!loading && !user) {
  //     router.push("/auth/login");
  //   }
  // }, [user, loading, router]);

  if (loading) {
    return (
      <Animation>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      </Animation>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Animation>
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center space-y-8">
            <div>
              <h1 className="text-4xl font-geistSans font-bold text-white mb-4">
                Profile
              </h1>
              <p className="text-[#FFFFFF80] text-lg">
                Your account information
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-[#283142] p-8 rounded-lg">
                <div className="flex flex-col items-center gap-6">
                  <Image
                    src={user.picture || "/images/logo.svg"}
                    alt="Profile"
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-[#FFFFFF20]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/logo.svg";
                    }}
                  />
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white mb-2">
                      {user.name}
                    </h2>
                    <p className="text-[#FFFFFF80] text-lg">{user.email}</p>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-[#FFFFFF60] text-sm">Online</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#283142] p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Account Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#FFFFFF80]">Account Type</span>
                    <span className="text-white font-medium">Premium</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FFFFFF80]">Member Since</span>
                    <span className="text-white font-medium">January 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#FFFFFF80]">Last Login</span>
                    <span className="text-white font-medium">2 hours ago</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={logout}
                  variant="danger"
                  className="w-full text-lg py-4"
                  size="lg"
                >
                  Sign Out
                </Button>

                <Link href="/">
                  <Button variant="secondary" className="w-full">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-[#FFFFFF20]">
              <div className="space-y-4">
                <p className="text-[#FFFFFF60] text-xs">
                  Account managed by Tekcify
                </p>
                <p className="text-[#FFFFFF60] text-xs">User ID: {user.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animation>
  );
}
