import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-200 flex justify-around items-center p-4">
      <div className="logo font-bold">PasswordManager</div>
      <ul>
        <li className="flex gap-4">
          <a href="#" className="hover:font-bold bg-purple-400 p-2 rounded">
            HomePage
          </a>
          <a href="#" className="hover:font-bold bg-purple-400 p-2 rounded">
            About
          </a>
          <a href="#" className="hover:font-bold bg-purple-400 p-2 rounded">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
