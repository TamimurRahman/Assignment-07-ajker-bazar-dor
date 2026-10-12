
"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign In successful!");
    }

    if (error) {
      toast.error(error.message ?? "Sign in failed. Please try again.");
    }
  };

  const handleSocialSignIn = async (
    provider: "google"
  ) => {
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message ?? "Social sign in failed. Please try again.");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F0F5F0] px-4 py-10 text-[#26352B]">
      <div className="w-full max-w-67">

        {/* Heading */}
        <div className="mb-4 text-center">
          <h1 className="text-[17px] font-bold tracking-tight">
            সাইন ইন
          </h1>

          <p className="mt-1 text-[9px] leading-relaxed text-gray-500">
            বিস্তারিত নাম, বাজার মূল্য ও ট্র্যাকিং দেখতে অ্যাকাউন্টে
            ঢুকুন।
          </p>
        </div>

        {/* Sign In Card */}
        <div className="rounded-xl border border-[#E1E9E1] bg-[#FAFCFA] p-3.75">

          <form onSubmit={onSubmit}>

            {/* Email */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="mb-1 block text-[10px] font-semibold"
              >
                ইমেইল
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="h-6.5 w-full rounded-md border border-[#E3EAE3] bg-transparent px-2 text-[10px] outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-100"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="mb-1 block text-[10px] font-semibold"
              >
                পাসওয়ার্ড
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                required
                autoComplete="current-password"
                className="h-6.5 w-full rounded-md border border-[#E3EAE3] bg-transparent px-2 text-[10px] outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-100"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-1 h-6.75 w-full rounded-md bg-[#07883F] text-[10px] font-semibold text-white shadow-[0_2px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#067435] active:scale-[0.99]"
            >
              সাইন ইন
            </button>
          </form>

          {/* Divider */}
          <div className="my-3 flex items-center gap-2">
            <div className="h-px flex-1 bg-[#DFE6DF]" />
            <span className="text-[9px] text-gray-500">
              অথবা
            </span>
            <div className="h-px flex-1 bg-[#DFE6DF]" />
          </div>

          {/* Social Login */}
          <div className="flex items-center justify-center">

            <button
              type="button"
              onClick={() => handleSocialSignIn("google")}
              className="flex h-[27px] items-center justify-center gap-1 rounded-md border border-[#E3EAE3] px-1 text-[9px] font-medium transition hover:bg-gray-50"
            >
              <svg
                viewBox="0 0 48 48"
                className="h-3 w-3 shrink-0"
                aria-hidden="true"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 3.05 13.22l7.98 6.19C12.92 13.72 18.01 9.5 24 9.5Z"
                  transform="translate(0 5)"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 38.08 46.98 31.96 46.98 24.55Z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.53 10.78l8-6.19Z"
                  transform="translate(1)"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.73-6c-2.14 1.45-4.89 2.3-8.17 2.3-5.99 0-11.08-4.22-12.9-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
                  transform="translate(0 -2)"
                />
              </svg>

              Google দিয়ে লগইন
            </button>

          </div>

          {/* Sign Up Link */}
          <p className="mt-3 text-center text-[9px] text-gray-600">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#07883F] hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-[9px] text-gray-500 transition hover:text-green-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
