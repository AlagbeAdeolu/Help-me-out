import React from "react";

const Login = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col border">
          <div className=" flex flex-col items-center justify-center bg-red-400">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl text-center font-bold">
                Log in or Sign Up
              </h1>
              <p className="text-center">
                Join millions of others in sharing successful moves on HelpMeOut
              </p>
            </div>
            <div className="flex flex-col w-full gap-3 items-center justify-center">
              <div className="">
                <button className="border-2 w-[350px] border-gray-600 px-16 py-1 rounded-lg">
                  Continue with Google
                </button>
              </div>
              <div>
                <button className="border-2 w-[350px] border-gray-600 px-16 py-1 rounded-lg">
                  Continue with Facebook
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center my-8">
            <form className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <label
                  className="font-thin text-gray-400 text-[8px] "
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-[300px] border border-gray-500 rounded-md px-2 py-1"
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
                  className="w-[300px] border border-gray-500 rounded-md px-2 py-1"
                  type="password"
                  placeholder="Enter your Password"
                />
              </div>
              <button className="border-2 border-gray-600 px-16 py-1 rounded-lg my-4">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
