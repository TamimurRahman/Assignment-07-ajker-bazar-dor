import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <form action="">
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

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
