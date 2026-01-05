import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800  text-white">
      <div className="mycontainer flex h-14 justify-between items-center px-4 py-5">
        <div className="text-2xl font-bold">
          <span className="text-purple-500">&lt;</span>
          Password
          <span className="text-purple-500">Manager/&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a href="#" className="hover:font-bold bg-purple-500 p-2 rounded">
              HomePage
            </a>
            <a href="#" className="hover:font-bold bg-purple-500 p-2 rounded">
              About
            </a>
            <a href="#" className="hover:font-bold bg-purple-500 p-2 rounded">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
