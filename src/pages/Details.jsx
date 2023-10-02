import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    fetch(`https://seashell-app-4jicj.ondigitalocean.app/api/video/get/${id}`)
      .then((res) => res.json())
      .then((data) => setVideoSrc(data.data.videoPath));
  }, [id]);


  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center text-left">
        <div className="">
          <p className="text-sm text-gray-500">
            Home / Recent Videos / How To Create A Facebook Ad Listing
          </p>
          <h1 className="text-xl"> How To Create A Facebook Ad Listing</h1>
        </div>
        <div>
          <video src={videoSrc} controls width="600px" height="400px"></video>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <input 
            type="text" 
            placeholder="enter email of receiver"
            className="border bg-gray-200 h-14 w-80 text-sm rounded-lg"
             />
            <input
              type="text"
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
            className="border bg-gray-200 h-14 w-80 text-sm rounded-lg"  
            />
          </div>
          <div>
            <p>Share your video</p>
            <div className="flex gap-4">
              <div className="border px-4 py-2 border-gray-400 rounded-lg">Facebook</div>
              <div className="border px-4 py-2 border-gray-400 rounded-lg">Whatsapp</div>
              <div className="border px-4 py-2 border-gray-400 rounded-lg">Telegram</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
