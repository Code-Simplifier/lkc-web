import React from "react";
import Link from "next/link";

import Logo from "@/assets/img/logo.png";

import { MenuIcon } from "./icons";
import { navLinks } from "@/constants";
import { primary_bold, secondary, secondary_bold } from "@/app/fonts";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar fixed z-10 bg-white/50 backdrop-blur-md">
      <div className="navbar-start flex w-full items-center justify-between md:justify-normal">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MenuIcon />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <details>
                  <summary
                    className={`capitalize my-2 ${primary_bold.className}`}
                  >
                    {link.title}
                  </summary>
                  <ul className="p-2">
                    {link.sublinks.map((sublink) => (
                      <li key={sublink}>
                        <Link
                          href={`/${link.title.replaceAll(
                            " ",
                            "-"
                          )}/${sublink.replaceAll(" ", "-")}`}
                          className="uppercase tracking-wide"
                        >
                          {sublink}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </div>
        <Link href={"/"} className="hidden md:flex md:gap-x-4 md:items-center">
          <Image src={Logo} alt="logo" className="w-[40px] md:w-[80px] ml-4" />
          <div
            className={`flex flex-col items-start text-lg text-transparent bg-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary ${secondary_bold.className}`}
          >
            <span>Lyallpur Khalsa College</span>
            <span>(Jalandhar)</span>
          </div>
        </Link>
        <Link href={"/"} className="md:hidden">
          <Image src={Logo} alt="logo" className="w-[40px] md:w-[80px] ml-4" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <details>
                <summary
                  className={`capitalize text-lg ${primary_bold.className}`}
                >
                  {link.title}
                </summary>
                <ul className="p-2">
                  {link.sublinks.map((sublink) => (
                    <li key={sublink} className="uppercase tracking-wide">
                      <Link
                        href={`/${link.title.replaceAll(
                          " ",
                          "-"
                        )}/${sublink.replaceAll(" ", "-")}`}
                      >
                        {sublink}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
