"use client";

import React, { useRef } from "react";
import Image from "next/image";


const Navbar = () => {

  const sideMenuLinlk = useRef() ;

  const openMenu = () => {
    sideMenuLinlk.current.style.transform = 'translateX(0)'
  }
   const closeMenu = () => {
    sideMenuLinlk.current.style.transform = 'translateX(100%)'
  }

  return (
    <>
      <nav className="bg-white shadow-md w-full fixed px-6 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        {/* ------------------------------------- logo images -------------------------------------   */}
        <a href="#top">
          {" "}
          <div className="logoImagesContainer flex items-center cursor-pointer ">
            {/* First Logo - Image Logo */}

            <Image
              src="/image-logo.png"
              alt="Aya Logo"
              width={100}
              height={100}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            />

            {/* Second Logo - Name Logo */}
            <Image 
              src="/name-logo.png" 
              alt="Aya Name" 
              width={250} 
              height={250} 
              className="w-32 h-auto sm:w-40 md:w-48 lg:w-56 xl:w-64"
            />
          </div>
        </a>

        {/* ------------------------------------- Nav Links with Background -------------------------------------   */}
        <div className="relative hidden md:block">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/header-bg-color.png"
              alt="Navigation Background"
              fill
              className="object-cover rounded-full"
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-10 lg:gap-12 px-12 py-4 relative z-10  shadow-md rounded-full">
            <li>
              <a href="#top" className="cursor-pointer font-ovo">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="cursor-pointer font-ovo">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="cursor-pointer font-ovo">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="cursor-pointer font-ovo">
                My Work
              </a>
            </li>
            <li>
              <a href="#contact" className="cursor-pointer font-ovo">
                Contact me
              </a>
            </li>
          </ul>
        </div>

        {/* ------------------------------------- Contact Button -------------------------------------   */}

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Dark/Light Mode Toggle Button */}
          <button className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Image
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
              src="/images/icons/moon_icon.png"
              alt="Dark Mode Toggle"
              width={40}
              height={40}
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-6 xl:px-10 py-2.5 border border-gray-500 bg-[#F2308D] rounded-full ml-2 xl:ml-4 hover:bg-[#bd266e] text-white text-sm xl:text-base"
          >
            Contact
            <Image
              className="text-[#162849]"
              src="/images/icons/arrow-icon.png"
              alt="Arrow Icon"
              width={16}
              height={16}
            />
          </a>

          {/* menu-black */}

          <button className="cursor-pointer block md:hidden ml-2 sm:ml-3" onClick={openMenu}>
            <Image
              className="w-6 h-6 sm:w-8 sm:h-8"
              src="/images/icons/menu-black.png"
              alt="menu-black"
              width={16}
              height={16}
            />
          </button>
        </div>
        {/* ------------------------------------- mobile menue -------------------------------------   */}

        <ul ref={sideMenuLinlk} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
          
          <div className="absolute right-6 top-6" onClick={closeMenu}>
              <Image
              className="w-5 cursor-pointer"
              src="/images/icons/close-black.png"
              alt="close-black"
              width={14}
              height={14}
            />
          </div>
          
          
          <li>
            <a href="#top" className="cursor-pointer font-ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="cursor-pointer font-ovo" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" className="cursor-pointer font-ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="cursor-pointer font-ovo" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="cursor-pointer font-ovo" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>

        {/* ------------------------------------------------------------------------------------------------ */}
      </nav>
    </>
  );
};

export default Navbar;
