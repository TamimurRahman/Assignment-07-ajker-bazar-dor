
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
    provider: "google" | "github"
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
      <div className="w-full max-w-[268px]">

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
        <div className="rounded-xl border border-[#E1E9E1] bg-[#FAFCFA] p-[15px]">

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
                className="h-[26px] w-full rounded-md border border-[#E3EAE3] bg-transparent px-2 text-[10px] outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-100"
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
                className="h-[26px] w-full rounded-md border border-[#E3EAE3] bg-transparent px-2 text-[10px] outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-100"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-1 h-[27px] w-full rounded-md bg-[#07883F] text-[10px] font-semibold text-white shadow-[0_2px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#067435] active:scale-[0.99]"
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
          <div className="grid grid-cols-2 gap-2">

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

            <button
              type="button"
              onClick={() => handleSocialSignIn("github")}
              className="flex h-[27px] items-center justify-center gap-1 rounded-md border border-[#E3EAE3] px-1 text-[9px] font-medium transition hover:bg-gray-50"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3 w-3 shrink-0"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.61 5.21-5.1 5.49.4.34.75 1 .75 2.02v3.01c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>

              GitHub দিয়ে লগইন
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
