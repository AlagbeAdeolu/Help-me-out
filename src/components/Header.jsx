import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo'

const Header = () => {
  const Auth = true;
  return (
    <div className="flex h-[10rem] justify-between px-10 items-center border-b-2 text-blue-900 font-bold">
      <Link to={'/'} className="flex gap-4 items-center">
        <Logo />
        HelpMeOut
      </Link>
      {Auth ? (
        <>
          <div className="flex gap-10">
            <h2>Features</h2>
            <h2>How it Works</h2>
          </div>
          <div>
            <Link to="/login">Get Started</Link>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Header;
