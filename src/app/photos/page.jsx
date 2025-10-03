"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { photosData } from "../data/photosData";

export default function PhotosPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  const categories = ["All", ...new Set(photosData.map(item => item.category))];

  const filteredData = selectedCategory === "All" 
    ? photosData 
    : photosData.filter(item => item.category === selectedCategory);

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Photography Portfolio</h2>
        <Link
          href="/#services"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Services
        </Link>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Explore my photography portfolio featuring diverse projects across food, fashion, corporate, and lifestyle photography. Each image tells a story and captures the essence of the subject with professional quality and creative vision.
      </p>

      {/* Featured Facebook Posts */}
      <div className="mb-12">
        <h3 className="text-2xl font-Ovo text-gray-800 mb-8 text-center">Featured Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
        

          {/* Post 2 - Pesca Restaurant 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <iframe 
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPesca1980%2Fposts%2Fpfbid02oDDjYhzxvyENj8r8wdKXKnqGHkUYzusc1anTLaotDjRWtqwjpAGdjgh1ghWPXGDNl&show_text=true&width=500" 
              width="500" 
              height="709" 
              style={{border: 'none', overflow: 'hidden'}} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full max-w-full"
            />
          </div>

          {/* Post 3 - Pesca Restaurant 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <iframe 
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPesca1980%2Fposts%2Fpfbid02qWTSZxn1YDo2VDbHtQsxL9gpveQVmbyyBG2ejzJsT45tEBxdsm128s2jZFbMy7fBl&show_text=true&width=500" 
              width="500" 
              height="696" 
              style={{border: 'none', overflow: 'hidden'}} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full max-w-full"
            />
          </div>

          {/* Post 4 - Pesca Restaurant 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <iframe 
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPesca1980%2Fposts%2Fpfbid0zvQ87ZEdjUSBZHiSzPU5WUxBcesjJtyLJSiM4ZrYFfGBiNfDczJGhn8tUt83usW4l&show_text=true&width=500" 
              width="500" 
              height="613" 
              style={{border: 'none', overflow: 'hidden'}} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full max-w-full"
            />
          </div>

          {/* Post 5 - New Pesca Restaurant */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <iframe 
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPesca1980%2Fposts%2Fpfbid02yq4EcnbBqyRZMSLhVVo8x5pvFRBecKg4VYdtpcSvQXmUhwpeMyWNq9XJgK7hBxj4l&show_text=true&width=500" 
              width="500" 
              height="667" 
              style={{border: 'none', overflow: 'hidden'}} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full max-w-full"
            />
          </div>

            {/* Post 1 - Aya Refai */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <iframe 
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Faya.refai300%2Fposts%2Fpfbid0Q9j3F6JNTayiari9N1UAmxUYgLiiq3o244daosWGms9ZAUqde7MgX5AnLqRmLywql&show_text=true&width=500" 
              width="500" 
              height="250" 
              style={{border: 'none', overflow: 'hidden'}} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
          <h3 className="text-2xl font-Ovo text-gray-800 mb-4">
            Need Professional Photography?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's create stunning visuals that tell your brand's story and captivate your audience. 
            From product photography to lifestyle shoots, every image is crafted with precision and creativity.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200"
          >
            Book a Photoshoot
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </Link>
        </div>
      </div>




    </div>
  );
}


