import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" overflow-hidden bg-slate-800 text-white">
      <div className=" z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="text-3xl font-extrabold tracking-wide mb-3 py-2.5">
          <span className="text-purple-500">&lt;</span>
          Password
          <span className="text-purple-400">Manager/&gt;</span>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-sm mb-2">Secure • Simple • Personal</p>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-2">
          <a
            href="https://github.com/HamzaSlysol"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/hamza-latif-692107223"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Credit */}
        <p className="text-sm text-gray-400">
          Crafted with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
          <span className="font-semibold text-white">Hamza Latif</span>
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-500 pb-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
