import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center py-2">
      <img
        className="mr-auto w-4/12 xl:w-40 p-3 xl:p-3 ml-1 xl:ml-3"
        src="images/GEM_logo.png"
        alt=""
      />
      <ul className="hidden md:flex flex-row justify-center">
        <li className="mr-6 text-sm font-semibold hover:text-customLime transition ease-in-out delay">
          <a href="">HOME</a>
        </li>
        <li className="mr-6 text-sm font-semibold hover:text-customLime transition ease-in-out delay">
          <a href="">ABOUT US</a>
        </li>
        <li className="mr-6 text-sm font-semibold hover:text-customLime transition ease-in-out delay">
          <a href="">GSS</a>
        </li>
        <li className="mr-6 text-sm font-semibold hover:text-customLime transition ease-in-out delay">
          <a href="">GO</a>
        </li>
        <li className="mr-6 text-sm font-semibold hover:text-customLime transition ease-in-out delay">
          <a href="">GIVE</a>
        </li>
        <li className="mr-3 text-sm font-semibold hover:text-customLime transition ease-in-out delay">
          <a href="">CONTACT</a>
        </li>
      </ul>
      <button className="btn mx-2 px-6 py-1 rounded-full text-sm font-semibold text-white bg-customBlue hover:bg-customBlueHover transition ease-in-out delay">
        GIVE NOW
      </button>
      <button className="btn mx-2 px-6 py-1 rounded-full text-sm font-semibold text-white bg-customLime hover:bg-customLimeHover transition ease-in-out delay">
        {" "}
        APPLY NOW
      </button>
    </nav>
  );
}
