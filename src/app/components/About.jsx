import React from "react";
import Image from "next/image";
import aboutInfo from "../data/aboutInfo.js"

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
          <p className="mb-10 max-w-2xl font-Ovo">
            I'm a Social Media Specialist and Content Creator passionate about
            helping brands grow their online presence. With experience in
            content creation, copywriting, and SEO, I create strategies that not
            only engage audiences but also drive measurable results. My
            expertise spans across Social Media Marketing, Ads Management, and
            Media Buying, covering platforms like Facebook, Instagram, TikTok,
            YouTube, Google Ads, and more. By leveraging platform algorithms, I
            help businesses achieve the best ROI from their campaigns. In
            addition to marketing, I bring skills in script writing, article
            writing (SEO-friendly), and AI-powered content generation, ensuring
            every piece of content is both creative and optimized. I also work
            on visual storytelling through product photography and professional
            Reels production. I believe in blending strategy, creativity, and
            technology to build impactful digital identities and long-term brand
            growth.
          </p>
        </div>


        <ul>
          {aboutInfo.map(({icon})=>(
            <li></li>
          ))}



        </ul>


      </div>
    </div>
  );
};

export default About;
