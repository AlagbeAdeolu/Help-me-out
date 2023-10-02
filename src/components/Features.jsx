import React from "react";
import FeaturesImg from "../assets/FeaturesImg";
import SSR from "../assets/SSR";
import ESU from "../assets/ESU";
import RR from "../assets/RR";

const Features = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-10 mt-10 mb-10">
        <h1 className="font-bold text-3xl">Features</h1>
        <p>Key Features of our extension</p>
        <div className="grid grid-cols-2 " >
          <div className="flex flex-col gap-4 max-w-[440px]">
            <div className="flex gap-4">
              <div className="flex">
                <SSR />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">Simple Screen Recording</h3>
                <p className="text-sm text-gray-600">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <ESU />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">Easy-to-Share URL</h3>
                <p className="text-sm text-gray-600">
                  Share your recordings instantly with a single link. No
                  attachments, no dowloads.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="">
                <RR />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">Revisit Recordings</h3>
                <p className="text-sm text-gray-600">
                  Access and review your past content effortlessly. Your
                  recordings, always at your finngertips.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img src="/features.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        {/* How It Works */}
        <h1 className="font-bold text-3xl mt-20">How it works</h1>
        <div>
          <div className="flex gap-3 justify-around items-center">
            <div className="text-center flex flex-col justify-center items-center gap-3 px-2">
              <div className="border rounded-full w-[40px] h-[40px]  flex items-center justify-center text-xl text-white bg-blue-900">
                <span className="font-bold">1</span>
              </div>
              <h3 className="font-bold text-xl">Record Screen</h3>
              <p className="text-sm text-gray-600">
                Click the "Start Recording" button in our extension, choose
                which part of your screen to capture and who you want to send it
                to
              </p>
              <div>
                <FeaturesImg />
              </div>
            </div>
            <div className="text-center flex flex-col justify-center items-center gap-3 px-2">
              <div className="border rounded-full w-[40px] h-[40px] flex items-center justify-center text-xl text-white bg-blue-900">
                <span className="font-bold">2</span>
              </div>
              <h3 className="font-bold text-xl">Share Your Recording</h3>
              <p className="text-sm text-gray-600">
                We generated a sharable link for your video. Simply send it to
                your audience via email or copy the link to send via any
                platform
              </p>
              <div>
                <FeaturesImg />
              </div>
            </div>
            <div className="text-center flex flex-col justify-center items-center gap-3 px-2">
              <div className="border rounded-full w-[40px] h-[40px] flex items-center justify-center text-xl text-white bg-blue-900">
                <span className="font-bold">3</span>
              </div>
              <h3 className="font-bold text-xl">Learn Effortlessly</h3>
              <p className="text-sm text-gray-600">
                Recipients can access your video effortlessly through the
                provided link, with our user-friendly interface suitable for
                everyone.
              </p>
              <div>
                <FeaturesImg />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
        </div>
      </div>
    </div>
  );
};

export default Features;
