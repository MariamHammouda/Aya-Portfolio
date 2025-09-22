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

        {/* ------------------------------------- Nav Links -------------------------------------   */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-12 rounded-full px-12 py-4">
          <li>
            <a href="#top" className="cursor-pointer font-ovo ">Home</a>
          </li>
          <li>
            <a href="#about" className="cursor-pointer font-ovo ">About</a>
          </li>
          <li>
            <a href="#services" className="cursor-pointer font-ovo ">Services</a>
          </li>
          <li>
            <a href="#work" className="cursor-pointer font-ovo ">My Work</a>
          </li>
          <li>
            <a href="#contact" className="cursor-pointer font-ovo ">Contact me</a>
          </li>
        </ul>

        {/* ------------------------------------- Contact Button -------------------------------------   */}

        <div>
          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 bg-[#F2308D] rounded-full ml-4  hover:bg-[#bd266e] text-white">
            Contact
            <Image
            className="text-[#162849]"
              src="/images/icons/arrow-icon.png" 
              alt="Arrow Icon"
              width={16}
              height={16}
            />
          </a>
        </div>

{/* ------------------------------------------------------------------------------------------------ */}

      </nav>
    </>
  );
};

export default Navbar;
