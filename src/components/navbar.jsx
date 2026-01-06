import React from "react";

const links = [
  { name: "HomePage", href: "/", external: false },
  { name: "About", href: "https://hamzalatif.vercel.app/", external: true },
  { name: "Contact", href: "/contact", external: false },
];

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
          {links.map((link) => (
            <li key={link.name} className="inline-block mx-1">
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:font-bold bg-purple-500 p-2 rounded"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="hover:font-bold bg-purple-500 p-2 rounded"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
