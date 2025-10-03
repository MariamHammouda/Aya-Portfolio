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
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-md">
            <iframe 
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F548424947584258&show_text=false&width=500" 
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
        
        {/* Fallback if embed doesn't work */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 mb-2">
            If the reel doesn't display above, click below to watch on Facebook:
          </p>
          <a
            href="https://www.facebook.com/reel/548424947584258"
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
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500 cursor-pointer hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
            onClick={() => openReelModal(reel)}
          >
            {/* Reel Thumbnail */}
            <div className="relative w-full h-80 bg-gray-100 overflow-hidden">
              {!imageErrors.has(`reel-${reel.id}`) ? (
                <Image
                  src={reel.thumbnailUrl}
                  alt={reel.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={(e) => {
                    console.error('Reel thumbnail failed to load:', reel.thumbnailUrl);
                    setImageErrors(prev => new Set([...prev, `reel-${reel.id}`]));
                  }}
                />
              ) : (
                /* Fallback content if image fails to load */
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Reel Preview</p>
                  </div>
                </div>
              )}
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-[#F2308D] bg-opacity-90 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-black bg-opacity-70 text-white">
                  {reel.category}
                </span>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute bottom-3 right-3">
                <span className="px-2 py-1 rounded bg-black bg-opacity-70 text-white text-xs font-medium">
                  {reel.duration}
                </span>
              </div>

              {/* Platform Badge */}
              <div className="absolute top-3 right-3">
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              {/* Reel Preview */}
              <div className="relative w-full h-96 lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                {!imageErrors.has(`modal-${selectedReel.id}`) ? (
                  <Image
                    src={selectedReel.thumbnailUrl}
                    alt={selectedReel.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    onError={(e) => {
                      console.error('Modal reel failed to load:', selectedReel.thumbnailUrl);
                      setImageErrors(prev => new Set([...prev, `modal-${selectedReel.id}`]));
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-lg font-medium">Reel Preview</p>
                    </div>
                  </div>
                )}
                
                {/* Watch Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <button
                    onClick={() => handleWatchReel(selectedReel)}
                    className="px-6 py-3 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch on {selectedReel.platform.split('/')[0]}
                  </button>
                </div>
              </div>

              {/* Reel Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600">{selectedReel.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Client</h4>
                    <p className="text-gray-600">{selectedReel.client}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Duration</h4>
                    <p className="text-gray-600">{selectedReel.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Platform</h4>
                    <p className="text-gray-600">{selectedReel.platform}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Created</h4>
                    <p className="text-gray-600">{formatDate(selectedReel.createdDate)}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Technical Specifications</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="font-medium">Resolution:</span> {selectedReel.specifications.resolution}</div>
                    <div><span className="font-medium">Format:</span> {selectedReel.specifications.format}</div>
                    <div><span className="font-medium">Frame Rate:</span> {selectedReel.specifications.frameRate}</div>
                    <div><span className="font-medium">Editing:</span> {selectedReel.specifications.editing}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Project Details</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div><span className="font-medium">Shoot Duration:</span> {selectedReel.projectDetails.shootDuration}</div>
                    <div><span className="font-medium">Editing Time:</span> {selectedReel.projectDetails.editingTime}</div>
                    <div><span className="font-medium">Deliverables:</span> {selectedReel.projectDetails.deliverables}</div>
                    <div><span className="font-medium">Usage:</span> {selectedReel.projectDetails.usage}</div>
                  </div>
                </div>

                {selectedReel.performance && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Performance Metrics</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div><span className="font-medium">Views:</span> {selectedReel.performance.views}</div>
                      <div><span className="font-medium">Engagement:</span> {selectedReel.performance.engagement}</div>
                      <div><span className="font-medium">Shares:</span> {selectedReel.performance.shares}</div>
                      <div><span className="font-medium">Platform:</span> {selectedReel.performance.platform}</div>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Techniques Used</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {selectedReel.techniques.map((technique, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#F2308D] rounded-full"></span>
                        {technique}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedReel.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
