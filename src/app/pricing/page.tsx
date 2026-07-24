"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    period: "forever",
    features: [
      { text: "Profile Designer", included: true },
      { text: "2 Designs", included: true },
      { text: "Light & Dark Mode", included: true },
      { text: "Quick Action Buttons", included: true },
      { text: "QR Code Sharing", included: true },
      { text: "Without Ads", included: false },
      { text: "Multi Language", included: false },
      { text: "Custom Profile Link", included: false },
      { text: "Analytics Dashboard", included: false },
      { text: "Apple Wallet", included: false },
      { text: "Custom Domain", included: false },
      { text: "CSS Custom Design", included: false },
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 5,
    yearlyPrice: 48,
    period: "/month",
    savings: "20%",
    features: [
      { text: "Profile Designer", included: true },
      { text: "Unlimited Designs", included: true },
      { text: "Light & Dark Mode", included: true },
      { text: "Quick Action Buttons", included: true },
      { text: "QR Code Sharing", included: true },
      { text: "Without Ads", included: true },
      { text: "Multi Language", included: true },
      { text: "Custom Profile Link", included: true },
      { text: "Analytics Dashboard", included: true },
      { text: "Apple Wallet", included: true },
      { text: "Custom Domain", included: false },
      { text: "CSS Custom Design", included: false },
    ],
    cta: "Go Professional",
    popular: true,
  },
  {
    name: "Business",
    monthlyPrice: 24,
    yearlyPrice: 230,
    period: "/month",
    savings: "20%",
    features: [
      { text: "Unlimited Users", included: true },
      { text: "Unlimited Designs", included: true },
      { text: "Light & Dark Mode", included: true },
      { text: "Quick Action Buttons", included: true },
      { text: "QR Code Sharing", included: true },
      { text: "Without Ads", included: true },
      { text: "Multi Language", included: true },
      { text: "Custom Profile Link", included: true },
      { text: "Analytics Dashboard", included: true },
      { text: "Apple Wallet", included: true },
      { text: "Custom Domain", included: true },
      { text: "CSS Custom Design", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Choose the plan that suits your networking needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
              !isYearly
                ? "gradient-bg text-white shadow-lg"
                : "bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2.5 rounded-xl font-medium transition-all relative ${
              isYearly
                ? "gradient-bg text-white shadow-lg"
                : "bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700"
            }`}
          >
            Yearly
            <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
              -20%
            </span>
          </button>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 transition-all card-hover ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/10 scale-105"
                  : "border-gray-100 dark:border-slate-700"
              }`}
            >
              {plan.popular && (
                <div className="text-primary text-sm font-semibold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                </span>
                <span className="text-muted">{plan.period}</span>
                {isYearly && plan.savings && (
                  <div className="text-green-500 text-sm mt-1">
                    Save {plan.savings} with yearly billing
                  </div>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {feature.included ? (
                      <svg
                        className="w-5 h-5 text-green-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-300 dark:text-slate-600 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <span
                      className={
                        !feature.included
                          ? "text-gray-400 dark:text-slate-500"
                          : ""
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "gradient-bg text-white shadow-lg shadow-primary/25"
                    : "bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing.",
              },
              {
                q: "Is there a free trial for Professional?",
                a: "The Free plan is available forever with basic features. You can upgrade to Professional anytime to unlock premium features.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard), PayPal, and local payment methods depending on your region.",
              },
              {
                q: "Can I cancel my subscription?",
                a: "Yes, you can cancel anytime. Your features will remain active until the end of your billing period.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-100 dark:border-slate-700"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
