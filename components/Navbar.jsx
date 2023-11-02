"use client";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import UserMenu from "./UserMenu";
import HanburgerMenu from "./HanburgerMenu";

const Navbar = () => {
  const [showUser, setShowUser] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrollBg, setScrollBg] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 20 ? setScrollBg(true) : setScrollBg(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed w-full transition-all ${
          scrollBg ? "bg-black bg-opacity-40" : undefined
        }`}
      >
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <GiHamburgerMenu
            onClick={() => setShowMenu(!showMenu)}
            className="text-white lg:hidden block cursor-pointer"
          />
          <div className="cursor-pointer">
            <img src="/images/logo.png" alt="Logo" className="lg:h-12 h-8" />
          </div>
          <div className="lg:block hidden">
            <ul className="flex gap-6 text-white cursor-pointer">
              <li>Movies</li>
              <li>Series</li>
              <li>New & Popular</li>
              <li>My List</li>
            </ul>
          </div>
          <div>
            <div className="group flex justify-center items-center gap-1 relative  cursor-pointer">
              <div
                onClick={() => setShowUser(!showUser)}
                className="
          border-2 
          border-transparent
          rounded-md
          overflow-hidden
        group-hover:border-white"
              >
                <img
                  src="/images/default-green.png"
                  alt="profile"
                  className="lg:w-10 lg:h-10 w-7 h-7"
                />
              </div>
              <BsChevronDown
                className={`text-white transition ${
                  showUser ? "rotate-180" : "rotate-0"
                }`}
              />
              <UserMenu showUser={showUser} />
            </div>
          </div>
        </div>
      </nav>
      <HanburgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar;
