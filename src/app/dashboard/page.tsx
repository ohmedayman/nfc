"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

const tabs = ["Profile", "Design", "Analytics", "Settings"];

const socialLinks = [
  { name: "Instagram", placeholder: "https://instagram.com/username" },
  { name: "Twitter/X", placeholder: "https://twitter.com/username" },
  { name: "LinkedIn", placeholder: "https://linkedin.com/in/username" },
  { name: "TikTok", placeholder: "https://tiktok.com/@username" },
  { name: "YouTube", placeholder: "https://youtube.com/@username" },
  { name: "Website", placeholder: "https://yoursite.com" },
  { name: "WhatsApp", placeholder: "+1234567890" },
  { name: "Email", placeholder: "you@example.com" },
];

const themes = [
  { name: "Majal", colors: ["#6366f1", "#8b5cf6"] },
  { name: "Neo Links", colors: ["#0ea5e9", "#06b6d4"] },
  { name: "Dark Elegance", colors: ["#1e293b", "#334155"] },
  { name: "Sunset", colors: ["#f59e0b", "#ef4444"] },
  { name: "Forest", colors: ["#10b981", "#059669"] },
  { name: "Ocean", colors: ["#3b82f6", "#1d4ed8"] },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [selectedTheme, setSelectedTheme] = useState(0);
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="pt-20 pb-16 min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const displayName = user.displayName || "User";
  const email = user.email || "";
  const photoURL = user.photoURL;

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 shrink-0">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 sticky top-24">
              <div className="text-center mb-6">
                {photoURL ? (
                  <img
                    src={photoURL}
                    alt={displayName}
                    className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-primary"
                  />
                ) : (
                  <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                    {displayName.charAt(0)}
                  </div>
                )}
                <h3 className="font-semibold">{displayName}</h3>
                <p className="text-sm text-muted truncate">{email}</p>
              </div>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl font-medium transition-all ${
                      activeTab === tab
                        ? "gradient-bg text-white"
                        : "hover:bg-gray-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-700 space-y-2">
                <Link
                  href="/"
                  className="block w-full text-center py-2.5 rounded-xl font-medium border-2 border-gray-200 dark:border-slate-600 hover:border-primary transition-colors"
                >
                  View Site
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-center py-2.5 rounded-xl font-medium text-red-500 border-2 border-red-200 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "Profile" && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Display Name
                      </label>
                      <input
                        type="text"
                        defaultValue={displayName}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Custom Link
                      </label>
                      <div className="flex">
                        <span className="px-4 py-3 bg-gray-100 dark:bg-slate-700 rounded-l-xl border border-r-0 border-gray-200 dark:border-slate-600 text-muted text-sm">
                          tapcard.co/
                        </span>
                        <input
                          type="text"
                          defaultValue={displayName.toLowerCase().replace(/\s/g, "")}
                          className="flex-1 px-4 py-3 rounded-r-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue={email}
                      disabled
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-100 dark:bg-slate-700 text-muted cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about yourself..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Social Links
                    </h3>
                    <div className="space-y-4">
                      {socialLinks.map((link) => (
                        <div
                          key={link.name}
                          className="flex items-center gap-4"
                        >
                          <span className="w-24 text-sm font-medium">
                            {link.name}
                          </span>
                          <input
                            type="text"
                            placeholder={link.placeholder}
                            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="gradient-bg text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === "Design" && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold mb-6">Choose Theme</h2>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {themes.map((theme, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTheme(index)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedTheme === index
                          ? "border-primary shadow-lg"
                          : "border-gray-200 dark:border-slate-600"
                      }`}
                    >
                      <div
                        className="h-24 rounded-lg mb-3"
                        style={{
                          background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`,
                        }}
                      />
                      <span className="font-medium">{theme.name}</span>
                    </button>
                  ))}
                </div>

                <button className="gradient-bg text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                  Save Design
                </button>
              </div>
            )}

            {activeTab === "Analytics" && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold mb-6">Analytics</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-6 bg-gray-50 dark:bg-slate-900 rounded-xl">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      0
                    </div>
                    <div className="text-sm text-muted">Total Views</div>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-slate-900 rounded-xl">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      0
                    </div>
                    <div className="text-sm text-muted">Unique Visitors</div>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-slate-900 rounded-xl">
                    <div className="text-3xl font-bold gradient-text mb-1">
                      0
                    </div>
                    <div className="text-sm text-muted">Contact Saves</div>
                  </div>
                </div>

                <div className="h-64 bg-gray-50 dark:bg-slate-900 rounded-xl flex items-center justify-center">
                  <div className="text-center text-muted">
                    <svg
                      className="w-12 h-12 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <p>Analytics will appear here</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Settings" && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold mb-6">Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-slate-700">
                    <div>
                      <h3 className="font-semibold">Email Notifications</h3>
                      <p className="text-sm text-muted">
                        Receive email about your profile activity
                      </p>
                    </div>
                    <button className="w-12 h-6 bg-primary rounded-full relative">
                      <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-slate-700">
                    <div>
                      <h3 className="font-semibold">Public Profile</h3>
                      <p className="text-sm text-muted">
                        Make your profile visible to everyone
                      </p>
                    </div>
                    <button className="w-12 h-6 bg-primary rounded-full relative">
                      <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold mb-2 text-red-500">
                      Danger Zone
                    </h3>
                    <button className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
