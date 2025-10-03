
"use client"

import React, { useState, useCallback, memo } from "react";
import Image from "next/image";
import { serviceData } from "../data/serviceData.js";
import { useRouter } from 'next/navigation';

// Memoized ServiceCard component for better performance
const ServiceCard = memo(({ 
  service, 
  index, 
  isDropdownOpen, 
  onDropdownToggle, 
  onNavigation, 
  onDropdownItemClick 
}) => {
  const { icon, title, description, link, dropdownItems } = service;
  
  return (
    <div
      className={`relative border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:-translate-y-1 cursor-pointer hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group hover-transform transition-optimized ${isDropdownOpen ? 'z-30' : ''}`}
      onClick={
        dropdownItems
          ? () => onDropdownToggle(index)
          : link && link !== "#"
          ? () => onNavigation(link)
          : undefined
      }
    >
      <Image
        src={icon}
        alt={title}
        width={50}
        height={50}
        className="w-10 h-10 mb-4 mx-auto"
        priority={index < 3} // Prioritize first 3 images
      />

      <h3 className="text-lg my-4 text-gray-700 font-semibold text-center group-hover:text-gray-800">
        {title}
      </h3>

      <p className="text-sm text-gray-600 leading-5 text-center group-hover:text-gray-700">
        {description}
      </p>

      {dropdownItems && (
        <>
          <div className="text-center mt-2">
            <span className="text-gray-500 text-xs">▼</span>
          </div>

          {isDropdownOpen && (
            <div className="absolute left-0 right-0 top-full mt-2 border border-gray-300 rounded-lg shadow-lg z-50 bg-[#F0308F] dropdown-menu">
              {dropdownItems.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="px-4 py-3 hover:bg-[#C1277A] cursor-pointer border-b border-pink-300 last:border-b-0 transition-colors duration-150 hover-transform"
                  onClick={(e) => onDropdownItemClick(e, item)}
                >
                  <span className="text-white font-medium">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {link && link !== "#" ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigation(link);
          }}
          className="flex items-center justify-center gap-2 text-sm mt-5 text-[#F2308D] hover:text-[#bd266e] transition-colors cursor-pointer"
        >
          Read more
          <Image
            src="/images/icons/right-arrow.png"
            alt="Arrow"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </button>
      ) : (
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
      )}
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const Services = memo(() => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();
  
  const handleDropdownToggle = useCallback((index) => {
    setOpenDropdown(prev => prev === index ? null : index);
  }, []);
  
  const handleNavigation = useCallback((link) => {
    router.push(link);
  }, [router]);
  
  const handleDropdownItemClick = useCallback((e, item) => {
    e.stopPropagation();
    if (item.navigate) {
      if (item.navigate.startsWith('http')) {
        window.open(item.navigate, '_blank', 'noopener,noreferrer');
      } else {
        router.push(item.navigate);
      }
    }
  }, [router]);
  

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
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            isDropdownOpen={openDropdown === index}
            onDropdownToggle={handleDropdownToggle}
            onNavigation={handleNavigation}
            onDropdownItemClick={handleDropdownItemClick}
          />
        ))}
      </div>
    </div>
  );
});

Services.displayName = 'Services';

export default Services;
