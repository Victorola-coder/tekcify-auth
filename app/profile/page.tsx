"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/app/lib/auth-context";
import { Animation, Glow } from "@/app/components/global";
import {
  Tabs,
  Select,
  TextArea,
  Toggle,
  Image,
  Button,
} from "@/app/components/ui";
import { useRouter } from "next/navigation";

const profileTabs = [
  { label: "General", value: "general" },
  { label: "Security", value: "security" },
  { label: "Preferences", value: "preferences" },
];

const themeOptions = [
  { label: "System", value: "system" },
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

export default function Profile() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("general");
  const [notifications, setNotifications] = useState(true);
  const [bio, setBio] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

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
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <Glow className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-6">
                <Image
                  src={user.picture || "/avatar-placeholder.png"}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-2xl font-geistSans font-bold">
                    {user.name}
                  </h1>
                  <p className="text-[#FFFFFF80]">{user.email}</p>
                </div>
              </div>
              <Button onClick={logout} variant="danger">
                Logout
              </Button>
            </div>

            <Tabs
              tabs={profileTabs}
              onChange={setActiveTab}
              defaultValue="general"
              className="mb-8"
            />

            <div className="space-y-6">
              {activeTab === "general" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Bio</label>
                    <TextArea
                      name="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>
              )}

              {activeTab === "preferences" && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm mb-2">Theme</label>
                    <Select
                      options={themeOptions}
                      defaultValue="system"
                      onChange={(value) => console.log(value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Enable Notifications</label>
                    <Toggle
                      checked={notifications}
                      onChange={setNotifications}
                    />
                  </div>
                </div>
              )}
            </div>
          </Glow>
        </div>
      </div>
    </Animation>
  );
}
