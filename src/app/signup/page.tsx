
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message ?? "Sign up failed.");
      return;
    }

    if (data) {
      toast.success("Sign up successful!");
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message ?? "Google sign-in failed.");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F0F5F0] px-4 py-10 text-[#26352B]">
      <div className="w-full max-w-[300px]">

        {/* Heading */}
        <div className="mb-4 text-center">
          <h1 className="text-[19px] font-bold tracking-tight">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-1 text-[10px] leading-relaxed text-gray-500">
            নতুন অ্যাকাউন্ট খুলুন এবং বাজারদর সহজেই দেখুন।
          </p>
        </div>

        {/* Sign Up Card */}
        <section className="rounded-xl border border-[#E1E9E1] bg-[#FAFCFA] p-4">

          <form onSubmit={onSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label
                htmlFor="name"
                className="mb-1 block text-[10px] font-semibold"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="আপনার নাম লিখুন"
                autoComplete="name"
                required
                className="h-[30px] w-full rounded-md border border-[#E3EAE3] bg-transparent px-2 text-[10px] outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-100"
              />
            </div>

           

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
                autoComplete="email"
                required
                className="h-[30px] w-full rounded-md border border-[#E3EAE3] bg-transparent px-2 text-[10px] outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-100"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
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
                placeholder="পাসওয়ার্ড লিখুন"
                autoComplete="new-password"
                minLength={8}
                required
                className="h-[30px] w-full rounded-md border border-[#E3EAE3] bg-transparent px-2 text-[10px] outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-100"
              />
            </div>

            {/* Create Account */}
            <button
              type="submit"
              className="h-[30px] w-full rounded-md bg-[#07883F] text-[10px] font-semibold text-white shadow-sm transition hover:bg-[#067435] active:scale-[0.99]"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          {/* Divider */}
          <div className="my-3 flex items-center gap-2">
            <div className="h-px flex-1 bg-[#DFE6DF]" />
            <span className="text-[9px] text-gray-500">অথবা</span>
            <div className="h-px flex-1 bg-[#DFE6DF]" />
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex h-[30px] w-full items-center justify-center gap-2 rounded-md border border-[#E3EAE3] text-[10px] font-medium transition hover:bg-gray-50"
          >
            <svg
              viewBox="0 0 48 48"
              className="h-3.5 w-3.5"
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

            Google দিয়ে অ্যাকাউন্ট তৈরি করুন
          </button>

          {/* Sign In Link */}
          <p className="mt-4 text-center text-[10px] text-gray-600">
            আগে থেকেই অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="font-semibold text-[#07883F] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </section>

        {/* Back Home */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-[10px] text-gray-500 transition hover:text-green-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
