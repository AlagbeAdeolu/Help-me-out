import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    fetch("https://seashell-app-4jicj.ondigitalocean.app/api/videos")
      .then((res) => res.json())
      .then((data) => setSrc(data.data));
  }, []);
  const srcArray = Array.from(src)

  
  return (
    <>
      <div className="container mx-auto">
        <div className="flex  justify-between items-center mt-8 mb-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">Hello, John Mark</h1>
            <p className="text-gray-400 text-sm font-normal">
              Here are your recorded video
            </p>
          </div>
          <div>
            <input
              type="text"
              name="search"
              placeholder="Search for a particular video"
              className="h-[50px] bg-transparent border rounded-md w-[250px]"
            />
          </div>
        </div>
      </div>
      <hr className="border-b  border-gray-200 mb-8 " />

      <div className="container mx-auto mb-8">
        <h4 className="text-gray-600 text-md">Recent files</h4>
        <div className="grid grid-cols-2 text-gray-400 gap-8">
          {srcArray.map((item) => (
            <Link className="text-sm" to={`/recordings/${item.vId}`} key={item.vId}>
                <div>
                    <video src={item.video}></video>
                </div>
              <p className="font-semibold">{item.vId}</p>
              <p>{item.createdAt}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
