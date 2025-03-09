import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute w-full z-10">
        <img
          className="w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/AE-en-20250303-TRIFECTA-perspective_a7fc1d14-d272-4127-85b3-41f53ee7e23b_large.jpg"
          alt="bg_img"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
      </div>
      <form className="text-white bg-black opacity-80 w-3/12 absolute z-50 p-12 mx-auto right-0 left-0 my-36 rounded-md">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="FullName"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg font-semibold cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <div>
              <span className="text-gray-400">New to Netflix?</span> Sign up now
            </div>
          ) : (
            <div>
              <span className="text-gray-400">Already Registered?</span> Sign in
              now
            </div>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
