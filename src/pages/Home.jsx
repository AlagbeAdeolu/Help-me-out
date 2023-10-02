import React from "react";
import Header from "../components/Header";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="container mx-auto p-4 m-4 flex items-center justify-center">
      <div className="container mx-auto">
        <div className="h-[55dvh] flex justify-center items-center gap-4">
          <div className="w-1/2">
            <div>
              <h1 className="text-5xl font-bold">Show Them</h1>
              <h1 className="text-5xl font-bold mb-6">Don't Just Tell</h1>
              <p className="mb-10">
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </p>
            </div>
            <div>
              <button className="px-4 py-3 text-white text-sm bg-blue-900 rounded-lg">
                Install HelpMeOut + arrow
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/Hero.jpg" alt="" />
          </div>
        </div>
        <Features />
      </div>
    </div>
  );
};

export default Home;
