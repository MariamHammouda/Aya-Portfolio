import React from "react";
import Image from "next/image";

import {serviceData} from '../data/serviceData.js'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I help brands grow through creative content, engaging scripts, and
        impactful ad campaigns across social media and Google platforms. My work
        combines storytelling, SEO, and visual production to deliver strategies
        that connect with audiences and drive real results
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {serviceData.map(({icon, title, description, link}, index) => (
          <div 
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:-translate-y-1 duration-500 cursor-pointer hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
          >
            <Image 
              src={icon}
              alt={title}
              width={50}
              height={50}
              className="w-10 h-10 mb-4 mx-auto"
            />
            
            <h3 className="text-lg my-4 text-gray-700 font-semibold text-center group-hover:text-gray-800">
              {title}
            </h3>
            
            <p className="text-sm text-gray-600 leading-5 text-center group-hover:text-gray-700">
              {description}
            </p>
            
            <a 
              href={link}
              className="flex items-center justify-center gap-2 text-sm mt-5 text-[#F2308D] hover:text-[#bd266e] transition-colors"
            >
              Read more
              <Image
                src="/images/icons/right-arrow.png"
                alt="Arrow"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
