import React from 'react';

const SignInPage = () => {
  return (
    <div>
      <form action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">সাইন ইন</legend>



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

export default SignInPage;