"use client";

import { useAuth } from "./lib/auth-context";
import { Button, Image } from "./components/ui";
import { motion } from "framer-motion";
import { Animation } from "./components/global";
import Link from "next/link";

export default function Home() {
  const { user, loading, login } = useAuth();

  return (
    <Animation>
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-white font-geistSans mb-4">
                Tekcify Auth
              </h1>
              <p className="text-[#FFFFFF80] text-lg">
                {user
                  ? `Welcome back, ${user.name}!`
                  : "Simple authentication with Tekcify"}
              </p>
            </motion.div>

            <div className="space-y-4">
              {user ? (
                <div className="space-y-4">
                  <div className="bg-[#283142] p-6 rounded-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={user.picture || "/images/logo.svg"}
                        alt="Profile"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="text-left">
                        <h2 className="text-xl font-semibold text-white">
                          {user.name}
                        </h2>
                        <p className="text-[#FFFFFF80]">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href="/profile" className="flex-1">
                      <Button variant="primary" className="w-full">
                        View Profile
                      </Button>
                    </Link>
                    <Button
                      variant="secondary"
                      onClick={login}
                      className="flex-1"
                    >
                      Switch Account
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Button
                    variant="primary"
                    onClick={login}
                    className="w-full text-lg py-4"
                    size="lg"
                  >
                    Sign in with Tekcify
                  </Button>
                  <p className="text-[#FFFFFF60] text-sm">
                    Secure authentication powered by Tekcify OAuth
                  </p>
                </div>
              )}
            </div>

            <div className="pt-8 border-t border-[#FFFFFF20]">
              <p className="text-[#FFFFFF60] text-xs">
                Built with Next.js, Tailwind CSS, and Tekcify Auth
              </p>
            </div>
          </div>
        </div>
      </div>
    </Animation>
  );
}
