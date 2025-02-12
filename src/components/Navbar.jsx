// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-4 md:px-8 bg-[rgba(25,32,38,1 font-sans ">
      {/* Logo */}
      <div className="text-xl font-bold text-white">Anonime</div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-44">
        <li className="cursor-pointer hover:text-gray-300 text-neutral-500 " >Home</li>
        <li className="cursor-pointer hover:text-gray-300 text-neutral-500">List anime</li>
      </ul>

      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search anime or movie"
          className="
            bg-[rgba(55,65,81,1)]
            text-sm
            px-4 py-2
            pl-10
            w-40 md:w-64
            rounded-full
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />
        
      </div>
    </nav>
  );
}

export default Navbar;
