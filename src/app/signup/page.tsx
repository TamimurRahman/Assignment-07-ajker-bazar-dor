"use client" 

import { authClient } from "@/lib/auth-client";

import { redirect } from "next/navigation";

import React from "react";

const SignUpPage = () => {
  const onSubmit = async(e:React.SubmitEvent<HTMLElement>) =>{
   e.preventDefault()

   const formData = new FormData(e.target)
   const user = Object.fromEntries(formData.entries()) as {name:string,email:string,image:string,password:string};
   const {data,error} =  await authClient.signUp.email({...user,callbackURL:"/"})

   if(data){
    redirect("/")
    console.log(data);
   }
   if(error){
    console.log(error);
   }
  } 
  return (
    <div>
      <form onSubmit={onSubmit} action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">অ্যাকাউন্ট তৈরি করুন</legend>

          <label  className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />
          <label className="label">ImageURL</label>
          <input name="image" type="url" className="input" placeholder="Image" />

          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />

          <button  type="submit" className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
