"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { scriptWritingVideos } from "../data/scriptWritingVideos";

export default function ScriptWritingPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    if (video.videoType === "facebook") {
      // Open Facebook video in new tab
      window.open(video.facebookUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Show embedded video player
      setSelectedVideo(video);
    }
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Script Writing Portfolio</h2>
        <Link
          href="/#services"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Services
        </Link>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Explore my script writing work across different industries. Click on video cards to watch content either here on the site or on Facebook pages. Each script is crafted to engage audiences and deliver compelling stories that drive results.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {scriptWritingVideos.map((video) => (
          <div
            key={video.id}
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500 cursor-pointer hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
            onClick={() => handleVideoClick(video)}
          >
            <div className="relative w-full h-48 bg-gray-100">
              {/* Video Thumbnail */}
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{video.category}</p>
                </div>
              </div>
              
              {/* Video Type Badge */}
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  video.videoType === 'facebook' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-green-500 text-white'
                }`}>
                  {video.videoType === 'facebook' ? 'Facebook' : 'Watch Here'}
                </span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900">
                {video.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700">
                {video.description}
              </p>
              
              {/* Script Highlights */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-700 mb-2">Script Highlights:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {video.scriptHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#F2308D] rounded-full"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="inline-flex items-center gap-2 text-[#F2308D] font-medium">
                {video.videoType === 'facebook' ? 'View on Facebook' : 'Watch Video'}
                <Image
                  src="/images/icons/right-arrow.png"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal for Embedded Videos */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
              <button
                onClick={closeVideoModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-4">
              {/* Video Player Placeholder */}
              <div className="w-full h-64 sm:h-96 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-lg font-medium mb-2">Video Player</p>
                  <p className="text-sm text-gray-300">
                    Video would be embedded here: {selectedVideo.videoUrl}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    (In production, this would show the actual video player)
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600">{selectedVideo.description}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Script Highlights</h4>
                  <ul className="text-gray-600 space-y-1">
                    {selectedVideo.scriptHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#F2308D] rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={closeVideoModal}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <a
                    href={selectedVideo.facebookUrl}
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
    </div>
  );
}
