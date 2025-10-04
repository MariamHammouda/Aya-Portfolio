"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { scriptWritingPrograms, scriptWritingVideos } from "../data/scriptWritingVideos";

export default function ScriptWritingPage() {


  console.log('Program thumbnail path:', scriptWritingPrograms[0]?.programThumbnail);
  console.log('Full programs data:', scriptWritingPrograms);

  // ... rest of code
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  const handleVideoClick = (video) => {
    if (video.videoType === "facebook") {
      // Open Facebook video in new tab
      window.open(video.facebookUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Show embedded video player
      setSelectedVideo(video);
    }
  };

  const handleProgramClick = (program) => {
    setSelectedProgram(selectedProgram?.id === program.id ? null : program);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
  };

  const closeEpisodeModal = () => {
    setSelectedEpisode(null);
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
        Explore my script writing work organized by programs and episodes. Click on program cards to view episodes, then click on episode cards to watch videos directly on this page or navigate to Facebook. Each script is crafted to engage audiences and deliver compelling stories that drive results.
      </p>

      {/* Programs Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-Ovo mb-6 text-gray-800">TV Programs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scriptWritingPrograms.map((program) => (
            <div key={program.id} className="space-y-4">
              {/* Program Card */}
              <div
                className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500 cursor-pointer hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
                onClick={() => handleProgramClick(program)}
              >
                <div className="relative w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden flex items-center justify-center">
                  {/* Try regular img tag first, fallback to placeholder */}
                  <img
                    src={program.programThumbnail}
                    alt={program.programTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      console.error('Image failed to load:', program.programThumbnail);
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                    onLoad={(e) => {
                      console.log('Image loaded successfully:', program.programThumbnail);
                    }}
                  />
                  
                  {/* Fallback content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">{program.programTitle}</p>
                      <p className="text-xs text-gray-500 mt-1">Program Cover</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500 text-white shadow-lg">
                      {program.totalEpisodes} حلقات
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900">
                    {program.programTitle}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700">
                    {program.programDescription}
                  </p>
                  
                  <span className="inline-flex items-center gap-2 text-[#F2308D] font-medium">
                    {selectedProgram?.id === program.id ? 'إخفاء الحلقات' : 'عرض الحلقات'}
                    <Image
                      src="/images/icons/right-arrow.png"
                      alt="Arrow"
                      width={16}
                      height={16}
                      className={`w-4 h-4 transition-transform duration-300 ${
                        selectedProgram?.id === program.id ? 'rotate-90' : ''
                      }`}
                    />
                  </span>
                </div>
              </div>

              {selectedProgram?.id === program.id && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 animate-fadeIn">
                  {program.episodes.map((episode) => (
                    <div
                      key={episode.id}
                      className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500 cursor-pointer hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
                      onClick={() => handleEpisodeClick(episode)}
                    >
                      <div className="relative w-full h-32 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden flex items-center justify-center">
                        {/* Beautiful gradient background with play button */}
                        <div className="text-center">
                          <div className="w-16 h-16 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-gray-700 font-medium px-2 line-clamp-2">{episode.title}</p>
                        </div>
                        
                        {/* Episode number badge */}
                        <div className="absolute bottom-2 left-2">
                          <span className="px-2 py-1 rounded bg-black bg-opacity-70 text-white text-xs font-medium">
                            الحلقة {episode.episodeNumber}
                          </span>
                        </div>
                        
                        <div className="absolute top-2 right-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            episode.videoType === 'facebook' 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-green-500 text-white'
                          }`}>
                            {episode.videoType === 'facebook' ? 'Facebook' : 'Watch Here'}
                          </span>
                        </div>
                      </div>

                      <div className="p-3">
                        <h4 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-gray-900 line-clamp-2">
                          {episode.title}
                        </h4>
                        <p className="text-xs text-gray-600 mb-2 group-hover:text-gray-700 line-clamp-2">
                          {episode.description}
                        </p>
                        
                        <div className="mb-2">
                          <ul className="text-xs text-gray-500 space-y-1">
                            {episode.scriptHighlights.slice(0, 2).map((highlight, index) => (
                              <li key={index} className="flex items-center gap-1">
                                <span className="w-1 h-1 bg-[#F2308D] rounded-full"></span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <span className="inline-flex items-center gap-1 text-[#F2308D] font-medium text-xs">
                          {episode.videoType === 'facebook' ? 'مشاهدة على فيسبوك' : 'مشاهدة الفيديو'}
                          <Image
                            src="/images/icons/right-arrow.png"
                            alt="Arrow"
                            width={12}
                            height={12}
                            className="w-3 h-3"
                          />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Other Videos Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-Ovo mb-6 text-gray-800">Other Script Writing Work</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scriptWritingVideos.map((video) => (
            <div
              key={video.id}
              className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500 cursor-pointer hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
              onClick={() => handleVideoClick(video)}
            >
              <div className="relative w-full h-48 bg-gray-100">
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
              {/* Facebook Post Embed Player */}
              <div className="w-full bg-white rounded-lg overflow-hidden mb-4">
                {selectedVideo.videoUrl && selectedVideo.videoUrl.includes('facebook.com') ? (
                  <div className="flex justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full">
                      <iframe 
                        src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(selectedVideo.videoUrl)}&show_text=false&width=500`}
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
                      <p className="text-lg font-medium mb-2">Video Player</p>
                      <p className="text-sm text-gray-600">
                        Video URL: {selectedVideo.videoUrl || 'No video URL provided'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Fallback if embed doesn't work */}
              <div className="text-center mb-4">
                <p className="text-sm text-gray-500 mb-2">
                  If the video doesn't display above, click below to watch on Facebook:
                </p>
                <a
                  href={selectedVideo.facebookUrl || selectedVideo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch on Facebook
                </a>
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

      {/* Episode Modal - Watch Episodes on Same Page */}
      {selectedEpisode && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold">{selectedEpisode.title}</h3>
              <button
                onClick={closeEpisodeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-4">
              {/* Episode Video Embed - Watch on Same Page */}
              <div className="w-full bg-white rounded-lg overflow-hidden mb-4">
                {selectedEpisode.videoType === 'facebook_embedded' && selectedEpisode.embedCode ? (
                  // Custom Facebook embed for Draya Laboratory
                  <div className="flex justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      <div dangerouslySetInnerHTML={{ __html: selectedEpisode.embedCode }} />
                    </div>
                  </div>
                ) : selectedEpisode.videoUrl && selectedEpisode.videoUrl.includes('facebook.com') ? (
                  // Standard Facebook post embed
                  <div className="flex justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg w-full">
                      <iframe 
                        src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(selectedEpisode.videoUrl)}&show_text=false&width=500`}
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
                  // Fallback if no embed available
                  <div className="w-full h-64 sm:h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-lg font-medium mb-2">Episode Player</p>
                      <p className="text-sm text-gray-600">
                        Episode URL: {selectedEpisode.videoUrl || 'No video URL provided'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Navigation Options */}
              <div className="text-center mb-4">
                <p className="text-sm text-gray-500 mb-3">
                  Watch the episode above or open it directly on Facebook:
                </p>
                <a
                  href={selectedEpisode.facebookUrl || selectedEpisode.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                  Open on Facebook
                </a>
              </div>
              
              {/* Episode Details */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Episode Description</h4>
                  <p className="text-gray-600">{selectedEpisode.description}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Script Highlights</h4>
                  <ul className="text-gray-600 space-y-1">
                    {selectedEpisode.scriptHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#F2308D] rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t">
                  <button
                    onClick={closeEpisodeModal}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close Player
                  </button>
                  <a
                    href={selectedEpisode.facebookUrl || selectedEpisode.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] flex items-center gap-2 transition-colors"
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
