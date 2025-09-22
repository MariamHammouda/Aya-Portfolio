import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md flex">
        {/* ------------------------------------- logo images -------------------------------------   */}
        <a>
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
        <ul>
          <li>
            <a href="#top"></a>Home
          </li>
          <li>
            <a href="#about"></a>About
          </li>
          <li>
            <a href="#services"></a>Services
          </li>
          <li>
            <a href="#work"></a>My Work
          </li>
          <li>
            <a href="#contact"></a>Contact me
          </li>
        </ul>

        {/* ------------------------------------- Contact Button -------------------------------------   */}

        <div>
          <a href="">
            Contact
            <Image
              src="/images/icons/arrow-icon.png" 
              alt="Arrow Icon"
              width={16}
              height={16}
            />
          </a>
        </div>


        
      </nav>
    </>
  );
};

export default Navbar;
