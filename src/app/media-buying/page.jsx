"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { mediaBuyingCampaigns } from "../data/mediaBuyingCampaigns";

export default function MediaBuyingPage() {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const handleCampaignClick = (campaign) => {
    setSelectedCampaign(campaign);
  };

  const closeCampaignModal = () => {
    setSelectedCampaign(null);
  };

  const getPlatformColor = (platform) => {
    const colors = {
      "Facebook & Instagram": "bg-blue-500",
      "Google Ads": "bg-green-500",
      "TikTok": "bg-black",
      "YouTube": "bg-red-500",
      "Instagram": "bg-gradient-to-r from-purple-500 to-pink-500",
      "LinkedIn": "bg-blue-600",
      "Multi-Platform": "bg-gradient-to-r from-blue-500 to-purple-500"
    };
    return colors[platform] || "bg-gray-500";
  };

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Media Buying Portfolio</h2>
        <Link
          href="/#services"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Services
        </Link>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Explore my media buying campaigns across different platforms and industries. Each campaign showcases strategic ad placement, targeting, and optimization techniques that deliver measurable results and strong ROI.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {mediaBuyingCampaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500 cursor-pointer hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
            onClick={() => handleCampaignClick(campaign)}
          >
            <div className="relative w-full h-48 bg-gray-100">
              {/* Campaign Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{campaign.industry}</p>
                </div>
              </div>
              
              {/* Platform Badge */}
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getPlatformColor(campaign.platform)}`}>
                  {campaign.platform}
                </span>
              </div>

              {/* ROAS Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
                  {campaign.metrics.roas} ROAS
                </span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900">
                {campaign.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700">
                {campaign.description}
              </p>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="text-center bg-gray-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-[#F2308D]">{campaign.metrics.ctr}</div>
                  <div className="text-xs text-gray-600">CTR</div>
                </div>
                <div className="text-center bg-gray-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-[#F2308D]">{campaign.metrics.conversions}</div>
                  <div className="text-xs text-gray-600">Conversions</div>
                </div>
              </div>

              {/* Ad Type */}
              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  {campaign.adType}
                </span>
              </div>

              <span className="inline-flex items-center gap-2 text-[#F2308D] font-medium">
                View Campaign Details
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
              {/* Campaign Image Placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-700">Campaign Creative</p>
                  <p className="text-sm text-gray-500">
                    Image: {selectedCampaign.image}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    (In production, this would show the actual campaign image)
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Campaign Description</h4>
                    <p className="text-gray-600">{selectedCampaign.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Campaign Highlights</h4>
                    <ul className="text-gray-600 space-y-1">
                      {selectedCampaign.campaignHighlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#F2308D] rounded-full"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Platform & Industry</h4>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getPlatformColor(selectedCampaign.platform)}`}>
                        {selectedCampaign.platform}
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
                        {selectedCampaign.industry}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Campaign Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">{selectedCampaign.metrics.roas}</div>
                      <div className="text-sm text-gray-600">Return on Ad Spend</div>
                    </div>
                    <div className="text-center bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">{selectedCampaign.metrics.ctr}</div>
                      <div className="text-sm text-gray-600">Click-Through Rate</div>
                    </div>
                    <div className="text-center bg-purple-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-600">{selectedCampaign.metrics.conversions}</div>
                      <div className="text-sm text-gray-600">Total Conversions</div>
                    </div>
                    <div className="text-center bg-orange-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-600">{selectedCampaign.metrics.budget}</div>
                      <div className="text-sm text-gray-600">Campaign Budget</div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-medium text-gray-800 mb-2">Ad Type</h5>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      {selectedCampaign.adType}
                    </span>
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
