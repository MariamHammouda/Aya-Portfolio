import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      {/* in this div we will create two columns */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">

        <div className="userImageContainer w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={"/images/profile-img.jpg"}
            width={200}
            height={200}
            alt="user profile"
            className="w-full mx-auto rounded-3xl"
          />
        </div>

        <div className="flex-1">

        </div>
      </div>
    </div>
  );
};

export default About;
