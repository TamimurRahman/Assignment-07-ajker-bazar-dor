"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div>
      {user ? (
        <div>
          <div className="avatar avatar-online">
            <div className="w-24 rounded-full">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>
          <h2>{user?.name}</h2>
          <button onClick={handleSignOut} className="btn btn-error">
            SignOut
          </button>
        </div>
      ) : (
        <div>
          <Link href={"/signin"}>
            {" "}
            <button className="btn btn-sm">Sign In</button>
          </Link>
          <Link href={"/signup"}>
            <button className="btn btn-sm">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
