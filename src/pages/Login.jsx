import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        <div className="flex flex-col">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4 mb-8">
              <h1 className="text-3xl text-center font-bold">
                Log in or Sign Up
              </h1>
              <p className="text-center w-[350px] font-thin text-sm text-gray-400">
                Join millions of others in sharing successful moves on HelpMeOut.
                log in with any parameter. No auth
              </p>
            </div>
            <div className="flex flex-col w-full gap-3 items-center justify-center">
              <div className="">
                <button className="border w-[350px] border-gray-600 px-16 py-1 rounded-lg">
                  Continue with Google
                </button>
              </div>
              <div>
                <button className="border w-[350px] border-gray-600 px-16 py-1 rounded-lg">
                  Continue with Facebook
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center my-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('submitted')
                navigate('/dashboard')
              }}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-col gap-2">
                <label
                  className="font-thin text-gray-400 text-[8px] "
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-[350px] border border-gray-500 rounded-md px-2 py-2"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="font-thin text-gray-400 text-[8px] "
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-[350px] border border-gray-500 rounded-md px-2 py-2"
                  type="password"
                  placeholder="Enter your Password"
                />
              </div>
              <div className="text-center">
                <button className="border w-[350px] bg-[#120b48] text-white border-gray-600 px-16 py-2 rounded-lg my-4">
                  Sign In
                </button>
                <p className="text-sm text-gray-500">
                  Don't have an account?{" "}
                  <span className="cursor-pointer text-[#120b48]">
                    Create an Account
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
