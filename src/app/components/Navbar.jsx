import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md w-full fixed px-6 lg:px-8 xl:px[8%] py-4 flex items-center justify-between z-50">
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
            />

            {/* Second Logo - Name Logo */}
            <Image src="/name-logo.png" alt="Aya Name" width={70} height={70} />
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

        <div className="flex items-center gap-4">
          {/* Dark/Light Mode Toggle Button */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Image
              className="w-10 h-10"
              src="/images/icons/moon_icon.png"
              alt="Dark Mode Toggle"
              width={40}
              height={40}
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 bg-[#F2308D] rounded-full ml-4  hover:bg-[#bd266e] text-white"
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

          <button className="cursor-pointer block md:hidden ml-3">
            <Image
              className="w-8"
              src="/images/icons/menu-black.png"
              alt="Arrow Icon"
              width={16}
              height={16}
            />
          </button>
        </div>
        {/* ------------------------------------- mobile menue -------------------------------------   */}

        <ul className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 botton-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
          
          <div className="absolute right-6 top-6">
              <Image
              className="w-5 cursor-pointer"
              src="/images/icons/close-black.png"
              alt="close-black"
              width={14}
              height={14}
            />
          </div>
          
          
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

        {/* ------------------------------------------------------------------------------------------------ */}
      </nav>
    </>
  );
};

export default Navbar;
