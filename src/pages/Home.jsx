import React from "react";
import Header from "../components/Header";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="p-4 m-4 flex items-center justify-center">
      <div className="c">
        <div>
          <div className="w-1/2">
            <h1 className="text-3xl">Show Them</h1>
            <h1 className="text-3xl">Don't Just Tell</h1>
            <p>
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
          </div>
          <div className="w-1/2">

          </div>
        </div>
        <Features />
      </div>
    </div>
  );
};

export default Home;
