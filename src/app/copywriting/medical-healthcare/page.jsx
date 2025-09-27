import Link from "next/link";
import Image from "next/image";
import { doctorsMedicalHealthcare } from "../../data/doctorsMedicalHealthcare";

export const metadata = {
  title: "Medical & Healthcare Doctors | Copywriting | Aya Portfolio",
};

export default function MedicalHealthcareDoctorsPage() {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Medical & Healthcare</h2>
        <Link
          href="/copywriting"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Categories
        </Link>
      </div>
      <p className="text-gray-700 font-Ovo max-w-2xl">
        Explore doctor Facebook pages. Click a card to open the page in a new tab and craft fitting post copies.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {doctorsMedicalHealthcare.map((doc) => (
          <a
            key={doc.facebookUrl}
            href={doc.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 rounded-lg overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)]"
          >
            <div className="relative w-full h-56 bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={doc.imageUrl}
                alt={doc.name}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">{doc.name}</h3>
              <span className="inline-flex items-center gap-2 text-[#F2308D] mt-3">
                View Facebook Page
                <Image
                  src="/images/icons/right-arrow.png"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}