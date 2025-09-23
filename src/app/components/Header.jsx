import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div id="top" className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-24 scroll-mt-20">
      
      <Image
        src={"/images/profile-img.jpg"}
        width={200}
        height={200}
        alt="user profile"
        className="rounded-full w-32 mx-auto"
      />

      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I'm Aya Ahmed Rifaey Hamza{" "}
        <Image
          src={"/images/icons/hand-icon.png"}
          width={20}
          height={20}
          alt="hand icon"
          className="w-6"
        />
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[45px] font-ovo">
        Digital Creator & Social Media Specialist
      </h1>
      
      <p className="max-w-2xl mx-auto font-ovo">
        I'm a Digital Creator turning ideas into impact 🚀 Specialized in
        Content Creation, Script Writing, Social Media Marketing, Copywriting,
        and Creative Visual
      </p>

      <div className="buttonsContainer flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">
          Contact me   
          <Image
            src={"/images/icons/right-arrow-white.png"}
            width={20}
            height={20}
            alt="right-arrow-white"
            className="w-4"
          />
        </a>

        <a href="/sample-resume.pdf" download className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2">
          my resume
          <Image
            src={"/images/icons/download-icon.png"}
            width={20}
            height={20}
            alt="download icon"
            className="w-4"
          />
        </a>
      </div>

    </div>
  );
};

export default Header;
