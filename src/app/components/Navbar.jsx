import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md p-4">
        <div className="logoImagesContainer flex items-center ">
          {/* First Logo - Image Logo */}
          <Image 
            src="/image-logo.png" 
            alt="Aya Logo"
            width={100}
            height={100}

            
          />

          {/* Second Logo - Name Logo */}
          <Image 
            src="/name-logo.png" 
            alt="Aya Name"
            width={70}
            height={70}
           
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
