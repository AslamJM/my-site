"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "home", className: "mr-4", slug: "/" },
  { name: "projects", className: "mx-4", slug: "/projects" },
  { name: "blog", className: "ml-4", slug: "/blog" },
];

const Logo = () => {
  return (
    <div className="py-1">
      <h2 className="text-xl md:text-2xl font-semibold tracking-wider">
        <span className="text-red-600 mr-1 font-bold">{"<"}</span>Aslamjm
        <span className="text-red-600 ml-1 font-bold">{"/>"}</span>
      </h2>
    </div>
  );
};

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="sticky top-0 bg-light z-50 w-full flex flex-col md:flex-row items-center py-2 justify-between">
      <Logo />
      <div>
        <ul className="flex items-center justify-center">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`${
                link.className
              } py-1 text-sm md:text-base font-semibold ${
                path === link.slug ? "text-red-600" : "text-dark"
              } hover:text-red-600 cursor-pointer`}
            >
              <Link href={link.slug}>{link.name.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
