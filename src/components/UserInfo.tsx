
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {user ? (
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-md px-2 py-1 transition hover:bg-gray-100"
            aria-expanded={isOpen}
            aria-label="User menu"
          >
            <div className="avatar">
              <div className="h-7 w-7 overflow-hidden rounded-full bg-gray-200">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || "User avatar"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-gray-700">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
              </div>
            </div>

            <span className="max-w-[100px] truncate text-[11px] font-medium text-gray-800">
              {user.name || "User"}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`text-gray-500 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 top-full z-[60] mt-2 w-40 rounded-lg border border-gray-200 bg-white p-1.5 shadow-lg">
              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-xs text-gray-700 hover:bg-gray-100"
              >
                My Profile
              </Link>

              <button
                type="button"
                onClick={handleSignOut}
                className="block w-full rounded-md px-3 py-2 text-left text-xs text-red-600 hover:bg-red-50"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/signin"
            className="rounded-md border border-gray-200 px-3 py-1.5 text-[11px] font-medium text-gray-700 hover:bg-gray-50"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="rounded-md bg-green-700 px-3 py-1.5 text-[11px] font-medium text-white hover:bg-green-800"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
