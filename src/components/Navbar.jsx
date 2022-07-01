import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center py-2 bg-slate-300">
      <img
        className="mr-auto xl:w-40 xl:p-4"
        src="images/GEM_logo.png"
        alt=""
      />
      <ul className="flex flex-row justify-center">
        <li className="mr-6 text-sm font-semibold">
          <a href="">HOME</a>
        </li>
        <li className="mr-6 text-sm font-semibold">
          <a href="">ABOUT US</a>
        </li>
        <li className="mr-6 text-sm font-semibold">
          <a href="">GSS</a>
        </li>
        <li className="mr-6 text-sm font-semibold">
          <a href="">GO</a>
        </li>
        <li className="mr-6 text-sm font-semibold">
          <a href="">GIVE</a>
        </li>
        <li className="mr-3 text-sm font-semibold">
          <a href="">CONTACT</a>
        </li>
      </ul>
      <button className="btn mx-2 px-6 py-1 rounded-full text-sm font-semibold text-white bg-btnBlue">
        GIVE NOW
      </button>
      <button className="btn mx-2 px-6 py-1 rounded-full text-sm font-semibold text-white bg-btnLime">
        {" "}
        APPLY NOW
      </button>
    </nav>
  );
}
