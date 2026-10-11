
"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();


  };

  const handleUpdateProfile = async (e:React.SubmitEvent<HTMLElement>) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const newUserData = Object.fromEntries(formData.entries()) as {name:string}
    await authClient.updateUser({...newUserData})
    console.log(newUserData);
  }
  return (
    <div>
    <div>
          <Link href={"/profile"}>
            <div className="avatar avatar-online">
              <div className="w-24 rounded-full">
                <img
                  alt="Tailwind-CSS-Avatar-component"
                  src={user?.image as string}
                />
              </div>
            </div>
          </Link>
          <h2>{user?.name}</h2>
          <button onClick={handleSignOut} className="btn btn-error">
            SignOut
          </button>

                <form onSubmit={handleUpdateProfile} action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">অ্যাকাউন্ট তৈরি করুন</legend>

          <label  className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />


          <button  type="submit" className="btn btn-neutral mt-4">Update Profile</button>
         
        </fieldset>
      </form>
        </div>
    </div>
  );
};

export default ProfilePage;