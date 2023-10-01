import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full">
      <div className="flex justify-around text-white bg-blue-900 py-20 font-thin text-xs">
        <div className="font-bold text-base">HelpMeOut + Logo</div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-base">Menu</h3>
          <p>Home</p>
          <p>Converter</p>
          <p>How It works</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-base">About us</h3>
          <p>About</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-base">Screen Record</h3>
          <p>Browser Window</p>
          <p>Desktop</p>
          <p>Application</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
