"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  return (
    <div>

      <div>
        <button className="btn btn-sm">Sign In</button>
        <button className="btn btn-sm">Sign Up</button>
      </div>
    </div>
  );
};

export default UserInfo;
