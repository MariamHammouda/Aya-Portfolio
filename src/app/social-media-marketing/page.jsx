"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { socialMediaCampaigns } from "../data/socialMediaCampaigns";

export default function SocialMediaMarketingPage() {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const handleCampaignClick = (campaign) => {
    // Always open Facebook link in new tab for all campaigns
    window.open(campaign.facebookUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewDetails = (campaign, e) => {
    e.stopPropagation(); // Prevent the card click from firing
    setSelectedCampaign(campaign);
  };

  const closeCampaignModal = () => {
    setSelectedCampaign(null);
  };

  const getCampaignTypeColor = (type) => {
    const colors = {
      "Brand Awareness": "bg-blue-500",
      "Product Launch": "bg-green-500",
      "Engagement": "bg-purple-500",
      "Conversion": "bg-orange-500",
      "Strategy & Management": "bg-indigo-500",
      "Profit Optimization": "bg-emerald-500"
    };
    return colors[type] || "bg-gray-500";
  };

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Social Media Marketing & Management</h2>
        <Link
          href="/#services"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Services
        </Link>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Explore my social media marketing campaigns across different platforms and objectives. Each campaign showcases strategic content creation, community building, and engagement techniques. Click on campaign cards to view them on Facebook or use "View Details" for more information.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
        {socialMediaCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500 cursor-pointer hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
            onClick={() => handleCampaignClick(campaign)}
          >
            <div className="relative w-full h-64 bg-gray-100">
              {/* Campaign Image */}
              <Image
                src={campaign.image}
                alt={campaign.title}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center" style={{display: 'none'}}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{campaign.campaignType}</p>
                </div>
              </div>
              
              {/* Campaign Type Badge */}
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getCampaignTypeColor(campaign.campaignType)}`}>
                  {campaign.campaignType}
                </span>
              </div>

              {/* Platform Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                  {campaign.platform}
                </span>
              </div>

              {/* Facebook Link Indicator */}
              <div className="absolute bottom-3 right-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900">
                {campaign.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700 line-clamp-3">
                {campaign.description}
              </p>
              
              {/* Industry Tag */}
              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  {campaign.industry}
                </span>
              </div>

              {/* Key Objectives Preview */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Objectives:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {campaign.objectives.slice(0, 2).map((objective, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#F2308D] rounded-full"></span>
                      {objective}
                    </li>
                  ))}
                  {campaign.objectives.length > 2 && (
                    <li className="text-xs text-gray-500 italic">
                      +{campaign.objectives.length - 2} more objectives
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex gap-2">
                <span className="inline-flex items-center gap-2 text-[#F2308D] font-medium flex-1">
                  View on Facebook
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </span>
                <button
                  onClick={(e) => handleViewDetails(campaign, e)}
                  className="px-3 py-1 text-xs border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Campaign Details Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold">{selectedCampaign.title}</h3>
              <button
                onClick={closeCampaignModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              {/* Facebook Embedded Content or Campaign Image */}
              {selectedCampaign.type === 'facebook_embedded' ? (
                <div className="w-full mb-6 flex justify-center">
                  <div 
                    dangerouslySetInnerHTML={{ __html: selectedCampaign.embedCode }}
                    className="facebook-embed"
                  />
                </div>
              ) : (
                <div className="w-full h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedCampaign.image}
                    alt={selectedCampaign.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center rounded-lg" style={{display: 'none'}}>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                        </svg>
                      </div>
                      <p className="text-lg font-medium text-gray-700">Campaign Image</p>
                      <p className="text-sm text-gray-500">
                        Image: {selectedCampaign.image}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Campaign Description</h4>
                    <p className="text-gray-600">{selectedCampaign.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Campaign Objectives</h4>
                    <ul className="text-gray-600 space-y-1">
                      {selectedCampaign.objectives.map((objective, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#F2308D] rounded-full"></span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Platform & Industry</h4>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                        {selectedCampaign.platform}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
                        {selectedCampaign.industry}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getCampaignTypeColor(selectedCampaign.campaignType)}`}>
                        {selectedCampaign.campaignType}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {selectedCampaign.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-[#F2308D] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-6 mt-6 border-t">
                <button
                  onClick={closeCampaignModal}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Close
                </button>
                {selectedCampaign.type !== 'facebook_embedded' && (
                  <a
                    href={selectedCampaign.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                  >
                    View on Facebook
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                <button className="px-4 py-2 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] flex items-center gap-2">
                  Contact for Similar Campaign
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
