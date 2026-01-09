import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "HomePage", href: "/", external: false },
  { name: "About", href: "https://hamzalatif.vercel.app/", external: true },
  { name: "Contact", href: "/contact", external: false },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex h-14 justify-between items-center px-4 py-5">
        <div className="text-xl md:text-2xl font-bold">
          <span className="text-purple-500">&lt;</span>
          Password
          <span className="text-purple-500">Manager/&gt;</span>
        </div>

        <ul className="hidden md:flex items-center gap-2 lg:gap-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="
                  bg-purple-500 hover:bg-purple-600
                  px-4 py-1.5 rounded
                  font-medium
                  transition
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-700 px-4 py-3 space-y-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="
                block bg-purple-500 hover:bg-purple-600
                px-4 py-2 rounded
                text-center font-medium
              "
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
