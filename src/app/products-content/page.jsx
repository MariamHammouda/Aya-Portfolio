"use client";

import Link from "next/link";
import { useState } from "react";
import { productsContentData } from "../data/productsContent";

export default function ProductsContentPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedCard, setExpandedCard] = useState(null);

  const categories = ["All", ...new Set(productsContentData.map(item => item.category))];

  const filteredData = selectedCategory === "All" 
    ? productsContentData 
    : productsContentData.filter(item => item.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Products Content Portfolio</h2>
        <Link
          href="/#services"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Services
        </Link>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Explore my product content writing portfolio featuring compelling descriptions, technical specifications, and marketing copy across various industries. Each piece is crafted to drive conversions and enhance brand storytelling.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-[#F2308D] text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500 cursor-pointer hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
          >
            {/* Header */}
            <div className="p-5 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                  {item.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                  {item.contentType}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-700">
                {item.description}
              </p>
            </div>

            {/* Sample Content */}
            <div className="p-5">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Sample Content:</h4>
              <p className="text-sm text-gray-600 mb-4 italic leading-relaxed">
                "{item.sampleText}"
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {item.features.slice(0, expandedCard === item.id ? item.features.length : 2).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#F2308D] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {item.features.length > 2 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(item.id);
                    }}
                    className="text-xs text-[#F2308D] font-medium mt-2 hover:underline"
                  >
                    {expandedCard === item.id ? 'Show Less' : `+${item.features.length - 2} More`}
                  </button>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[#F2308D] font-medium text-sm">
                  View Details
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
          <h3 className="text-2xl font-Ovo text-gray-800 mb-4">
            Need Custom Product Content?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's create compelling product descriptions and marketing copy that converts visitors into customers. 
            Every piece is tailored to your brand voice and target audience.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200"
          >
            Get Custom Content
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
