"use client";

import { useState } from "react";
import Link from "next/link";

const accounts = [
  {
    name: "Ahmed Hassan",
    email: "ahmed.hassan@gmail.com",
    avatar: "A",
    color: "#6366f1",
  },
  {
    name: "Ahmed Hassan",
    email: "ahmed.work@outlook.com",
    avatar: "A",
    color: "#0ea5e9",
  },
  {
    name: "Ahmed Dev",
    email: "ahmed.dev@gmail.com",
    avatar: "A",
    color: "#10b981",
  },
];

export default function LoginPage() {
  const [selectedAccount, setSelectedAccount] = useState<number | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showAllAccounts, setShowAllAccounts] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#f0f4f9" }}>
      <div className="w-full max-w-[450px]">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.12)] px-10 pt-10 pb-8">
          {/* Google Header */}
          <div className="flex items-center justify-end gap-2 mb-10">
            <span className="text-sm text-gray-600">تسجيل الدخول باستخدام</span>
            <svg className="w-6 h-6" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
          </div>

          {/* App Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-[32px] font-normal text-center text-gray-900 mb-3 tracking-tight" style={{ fontFamily: "'Google Sans', 'Segoe UI', Roboto, sans-serif" }}>
            اختيار حساب
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-600 mb-8 text-[15px]">
            للمتابعة إلى{" "}
            <span className="text-[#1a73e8] font-medium cursor-pointer hover:underline">TAPCARD</span>
          </p>

          {/* Account List */}
          <div className="space-y-0">
            {accounts.slice(0, showAllAccounts ? accounts.length : 2).map((account, index) => (
              <div key={index}>
                <button
                  onClick={() => setSelectedAccount(index === selectedAccount ? null : index)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-full transition-all ${
                    selectedAccount === index
                      ? "bg-[#e8f0fe]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-lg shrink-0"
                    style={{ backgroundColor: account.color }}
                  >
                    {account.avatar}
                  </div>

                  {/* Name & Email */}
                  <div className="text-right flex-1 min-w-0">
                    <div className="text-gray-900 font-medium text-[15px] truncate">
                      {account.name}
                    </div>
                    <div className="text-gray-500 text-sm truncate">
                      {account.email}
                    </div>
                  </div>
                </button>

                {/* Password field when selected */}
                {selectedAccount === index && (
                  <div className="px-4 py-3 ml-14 animate-fade-in">
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="أدخل كلمة المرور"
                        className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] outline-none text-sm transition-all"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button className="text-[#1a73e8] text-sm font-medium hover:underline">
                        نسيت كلمة المرور؟
                      </button>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button className="bg-[#1a73e8] hover:bg-[#1557b0] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                        التالي
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Show More Accounts */}
          {!showAllAccounts && accounts.length > 2 && (
            <div className="text-center mt-2">
              <button
                onClick={() => setShowAllAccounts(true)}
                className="inline-flex items-center gap-2 text-[#1a73e8] text-sm font-medium hover:bg-[#e8f0fe] px-4 py-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                استخدام حساب آخر
              </button>
            </div>
          )}

          {/* Guest Mode */}
          <div className="text-center mt-6 pt-4 border-t border-gray-100">
            <button className="text-[#1a73e8] text-sm font-medium hover:bg-[#e8f0fe] px-4 py-2 rounded-full transition-colors">
              تصفح كضيف
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 mt-6">
          <select className="text-sm text-gray-600 bg-transparent border-none outline-none cursor-pointer appearance-none pr-6">
            <option>العربية</option>
            <option>English</option>
            <option>Français</option>
          </select>

          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:underline">مساعدة</a>
            <a href="#" className="hover:underline">الخصوصية</a>
            <a href="#" className="hover:underline">الشروط</a>
          </div>
        </div>

        {/* Create Account Link */}
        <div className="text-center mt-8">
          <Link
            href="/register"
            className="text-[#1a73e8] text-sm font-medium hover:underline"
          >
            إنشاء حساب جديد
          </Link>
        </div>
      </div>
    </div>
  );
}
