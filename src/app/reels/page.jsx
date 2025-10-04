"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { reelsData } from "../data/reelsData";

export default function ReelsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedReel, setSelectedReel] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  const categories = ["All", ...new Set(reelsData.map(item => item.category))];

  const filteredData = selectedCategory === "All" 
    ? reelsData 
    : reelsData.filter(item => item.category === selectedCategory);

  const openReelModal = (reel) => {
    setSelectedReel(reel);
  };

  const closeReelModal = () => {
    setSelectedReel(null);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleWatchReel = (reel) => {
    // Open Facebook reel in new tab
    window.open(reel.videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Reels Portfolio</h2>
        <Link
          href="/#services"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Services
        </Link>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Discover my collection of engaging reels and short-form video content created for various brands and platforms. Each reel is designed to capture attention, drive engagement, and deliver results across social media channels.
      </p>

      {/* Featured Facebook Reel */}
      <div className="mb-12">
        <h3 className="text-2xl font-Ovo text-gray-800 mb-6 text-center">Featured Reel</h3>
        <div className="flex justify-center">
          <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] max-w-md">
            {/* Facebook Reel Embed */}
            <div className="bg-white p-4">
              <div className="flex justify-center mb-4">
                <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
                  <iframe 
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F548424947584258&show_text=false&width=350"
                    width="350" 
                    height="450" 
                    style={{border: 'none', overflow: 'hidden'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="w-full max-w-full"
                  />
                </div>
              </div>
              
              {/* Fallback Link */}
              <div className="text-center mb-2">
                <a
                  href="https://www.facebook.com/reel/548424947584258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch on Facebook
                </a>
              </div>
              
              {/* Badge */}
              <div className="text-center">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#F2308D] text-white">
                  Featured Reel
                </span>
              </div>
            </div>

            <div className="p-4 bg-gray-50">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Featured Reel
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Watch this engaging reel showcasing creative content and storytelling.
              </p>
              
              <div className="text-xs text-gray-500">
                <span><strong>Platform:</strong> Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      {/* Reels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((reel) => (
          <div
            key={reel.id}
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)]"
          >
            {/* Facebook Reel Embed */}
            <div className="bg-white p-4">
              <div className="flex justify-center mb-4">
                <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
                  <iframe 
                    src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(reel.videoUrl)}&show_text=false&width=350`}
                    width="350" 
                    height="450" 
                    style={{border: 'none', overflow: 'hidden'}} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="w-full max-w-full"
                  />
                </div>
              </div>
              
              {/* Fallback Link */}
              <div className="text-center mb-2">
                <a
                  href={reel.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch on Facebook
                </a>
              </div>
              
              {/* Badges */}
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#F2308D] text-white">
                  {reel.category}
                </span>
                <span className="px-2 py-1 rounded bg-gray-200 text-gray-700 text-xs font-medium">
                  {reel.duration}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                  {reel.platform.split('/')[0]}
                </span>
              </div>
            </div>

            {/* Reel Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900">
                {reel.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 line-clamp-2">
                {reel.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>{reel.client}</span>
                <span>{formatDate(reel.createdDate)}</span>
              </div>

              {/* Performance Stats */}
              {reel.performance && (
                <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"/>
                    </svg>
                    <span>{reel.performance.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span>{reel.performance.engagement}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92S19.61 16.08 18 16.08z"/>
                    </svg>
                    <span>{reel.performance.shares}</span>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {reel.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
                {reel.tags.length > 3 && (
                  <span className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-600">
                    +{reel.tags.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[#F2308D] font-medium text-sm">
                  View Details
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reel Modal */}
      {selectedReel && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold">{selectedReel.title}</h3>
              <button
                onClick={closeReelModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-4">
              {/* Facebook Post Embed Player */}
              <div className="w-full bg-white rounded-lg overflow-hidden mb-4">
                {selectedReel.videoUrl && selectedReel.videoUrl.includes('facebook.com') ? (
                  <div className="flex justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full">
                      <iframe 
                        src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(selectedReel.videoUrl)}&show_text=false&width=500`}
                        width="500" 
                        height="600" 
                        style={{border: 'none', overflow: 'hidden'}} 
                        scrolling="no" 
                        frameBorder="0" 
                        allowFullScreen={true} 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        className="w-full max-w-full"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-64 sm:h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-lg font-medium mb-2">Reel Player</p>
                      <p className="text-sm text-gray-600">
                        Reel URL: {selectedReel.videoUrl || 'No reel URL provided'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Fallback if embed doesn't work */}
              <div className="text-center mb-4">
                <p className="text-sm text-gray-500 mb-2">
                  If the reel doesn't display above, click below to watch on Facebook:
                </p>
                <a
                  href={selectedReel.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Reel on Facebook
                </a>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600">{selectedReel.description}</p>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={closeReelModal}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <a
                    href={selectedReel.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] flex items-center gap-2"
                  >
                    View on Facebook
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
          <h3 className="text-2xl font-Ovo text-gray-800 mb-4">
            Need Engaging Reels Content?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's create viral-worthy reels that capture attention and drive engagement across all social media platforms. 
            From concept to final edit, every reel is crafted to maximize reach and impact.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200"
          >
            Create Custom Reels
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
