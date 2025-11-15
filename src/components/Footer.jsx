import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "/contact" },
    { name: "Research", href: "#research" },
    { name: "Privacy Policy", href: "#privacy" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: Email & App Badges */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF9463] transition"
              />
              <button className="px-6 py-2 rounded-full bg-white text-[#FF9463] font-semibold w-fit hover:bg-gray-100 transition">
                Contact
              </button>
            </div>

            <div className="flex flex-col gap-4 py-5">
              <Image
                src="/image/logo.png"
                alt="Thynksafe Logo"
                width={150}
                height={150}
                className=" w-auto"
              />
              <p className="text-sm text-gray-400">
                ©2025 Thynksafe Limited, Kwara State Ilorin, Nigeria
              </p>
            </div>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col justify-center items-center gap-2">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/image/apple.png"
                alt="Download on App Store"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/image/playstore.png"
                alt="Get it on Google Play"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Right Section: Links */}
          <div className="flex flex-col justify-center items-center gap-4">
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-[#FF9463] transition text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
