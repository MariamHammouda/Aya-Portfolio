"use client";

import Image from "next/image";

export default function Contact() {
  const contactInfo = [
    {
      icon: "📞",
      label: "Mobile",
      value: "01096069380",
      link: "tel:+201096069380",
      color: "text-blue-600"
    },
    {
      icon: "💬",
      label: "WhatsApp",
      value: "01204754625",
      link: "https://wa.me/201204754625",
      color: "text-green-600"
    },
    {
      icon: "📧",
      label: "Email",
      value: "aya6208277@gmail.com",
      link: "mailto:aya6208277@gmail.com",
      color: "text-red-600"
    },
    {
      icon: "🌐",
      label: "Facebook",
      value: "facebook.com/aya.refai300",
      link: "https://facebook.com/aya.refai300",
      color: "text-blue-700"
    }
  ];

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-Ovo mb-4">Get In Touch</h2>
        <p className="text-gray-700 font-Ovo max-w-2xl mx-auto mb-8">
          Ready to elevate your brand with professional content writing and marketing services? 
          Let's discuss your project and bring your vision to life.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={contact.label === "Facebook" || contact.label === "WhatsApp" ? "_blank" : "_self"}
              rel={contact.label === "Facebook" || contact.label === "WhatsApp" ? "noopener noreferrer" : ""}
              className="group flex items-center gap-4 p-6 border border-gray-300 rounded-lg hover:shadow-lg hover:-translate-y-1 duration-300 hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)]"
            >
              <div className="text-3xl">{contact.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{contact.label}</h3>
                <p className={`${contact.color} group-hover:underline font-medium`}>
                  {contact.value}
                </p>
              </div>
              <div className="text-gray-400 group-hover:text-[#F2308D] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
          <h3 className="text-2xl font-Ovo text-gray-800 mb-6 text-center">Send a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F2308D] transition-colors"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F2308D] transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F2308D] transition-colors"
                placeholder="What's this about?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F2308D] transition-colors resize-vertical"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200 font-medium"
              >
                Send Message
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Available for freelance projects and collaborations
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <span>🕒 Response within 24 hours</span>
            <span>•</span>
            <span>🌍 Working with clients worldwide</span>
            <span>•</span>
            <span>💼 Professional & reliable</span>
          </div>
        </div>
      </div>
    </div>
  );
}
