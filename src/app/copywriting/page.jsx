import Image from "next/image";
import Link from "next/link";

export default function CopywritingPage() {
  return (
    <div className="w-full px-[12%] py-16">
      <h1 className="text-3xl sm:text-4xl font-Ovo text-center">Copywriting</h1>
      <p className="text-center max-w-2xl mx-auto mt-4">
        Choose a category to explore examples and services.
      </p>
      <div className="flex justify-center mt-6">
        <Link href="/" className="px-6 py-2 border border-gray-400 rounded-full hover:bg-gray-100 duration-200">
          Back to Home
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md hover:-translate-y-1 duration-300 cursor-pointer">
          <div className="w-full h-72 sm:h-96 relative mb-4 overflow-hidden rounded-md">
            <Image 
              src="/images/mediacl-healthcare.jpg" 
              alt="Medical & Healthcare" 
              fill 
              className="object-contain transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>
          <h3 className="text-lg font-semibold">Medical & Healthcare</h3>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md hover:-translate-y-1 duration-300 cursor-pointer">
          <div className="w-full h-72 sm:h-96 relative mb-4 overflow-hidden rounded-md">
            <Image 
              src="/images/resturant-foods.jpg" 
              alt="Restaurants & Food" 
              fill 
              className="object-contain transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>
          <h3 className="text-lg font-semibold">Restaurants & Food</h3>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md hover:-translate-y-1 duration-300 cursor-pointer">
          <div className="w-full h-72 sm:h-96 relative mb-4 overflow-hidden rounded-md">
            <Image 
              src="/images/stores.jpg" 
              alt="Retail & Stores" 
              fill 
              className="object-contain transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>
          <h3 className="text-lg font-semibold">Retail & Stores 🏢</h3>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md hover:-translate-y-1 duration-300 cursor-pointer">
          <div className="w-full h-72 sm:h-96 relative mb-4 overflow-hidden rounded-md">
            <Image 
              src="/images/international-clients.jpg" 
              alt="International Clients" 
              fill 
              className="object-contain transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>
          <h3 className="text-lg font-semibold">International Clients</h3>
        </div>
      </div>
    </div>
  );
}