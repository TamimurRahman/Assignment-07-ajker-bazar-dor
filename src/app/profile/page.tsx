
"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const handleUpdateProfile = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim();

    if (!name) return;

    await authClient.updateUser({ name });
  };

  return (
    <main className="min-h-screen bg-[#F0F5F0] px-4 py-10 text-[#26352B]">
      <div className="mx-auto max-w-[470px]">

        {/* Page Heading */}
        <div className="mb-4">
          <h1 className="text-[17px] font-bold">
            আমার প্রোফাইল
          </h1>
          <p className="text-[10px] text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* Profile Card */}
        <section className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-[#E1E9E1] bg-[#FAFCFA] p-4">

          <div className="flex min-w-0 items-center gap-3">
            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-gray-200">
              {user?.image ? (
                <img
                  src={user.image}
                  alt={user.name || "Profile"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center font-semibold">
                  {user?.name?.charAt(0) || "U"}
                </div>
              )}
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-[12px] font-semibold">
                {user?.name || "ব্যবহারকারী"}
              </h2>
              <p className="truncate text-[10px] text-gray-500">
                {user?.email || ""}
              </p>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            type="button"
            className="flex shrink-0 items-center gap-1 rounded-md border border-red-400 px-2.5 py-1.5 text-[10px] font-medium text-red-500 transition hover:bg-red-50"
          >
            <span aria-hidden="true">↪</span>
            সাইন আউট
          </button>
        </section>

        {/* Update Information Form */}
        <section className="rounded-xl border border-[#E1E9E1] bg-[#FAFCFA] p-4">
          <h2 className="mb-6 text-[12px] font-semibold">
            তথ্য
          </h2>

          <form onSubmit={handleUpdateProfile}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="mb-1 block text-[10px] font-medium"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                defaultValue={user?.name || ""}
                placeholder="আপনার নাম লিখুন"
                required
                className="h-[27px] w-full rounded-md border border-[#E4EBE4] bg-transparent px-3 text-[11px] outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-100"
              />
            </div>

            <button
              type="submit"
              className="mt-2 h-[27px] w-full rounded-md bg-[#07883F] text-[10px] font-semibold text-white shadow-sm transition hover:bg-[#067435]"
            >
              আপডেট
            </button>
          </form>
        </section>

      </div>
    </main>
  );
};

export default ProfilePage;
