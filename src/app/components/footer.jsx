import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      name: "Home",
      to: "/",
    },
    { name: "About", to: "/about" },
    { name: "FAQs", to: "/FQA" },
    { name: "Contact", to: "/contact" },
    { name: "Research", to: "/research" },
    { name: "Privacy policy", to: "/policy" },
  ];
  return (
    <footer className="bg-[#191D1F] text-white p-15 md:px-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      {/* Left Section */}
      <div className="flex flex-col gap-3 w-full md:w-1/3">
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-400 bg-transparent py-2 px-3 rounded-md text-sm w-full outline-none mb-3"
            required
          />
          <br />
          <button className="bg-white text-[#FF9463] px-6 py-2 rounded-full font-medium hover:opacity-80 transition">
            Contact
          </button>
        </div>

        <div className="mt-6">
          <Image
            src="/images/thynksafe.png"
            alt="Thynksafe logo"
            width={180}
            height={50}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">
          ©2025 Thinksafe Limited, Kwara State Ilorin, Nigeria
        </p>
      </div>

      {/* Center Section */}
      <div className="flex flex-col gap-3 items-center justify-center">
        <button className="border border-gray-500 rounded-md p-2 hover:bg-gray-800 transition flex">
          <Image
            src="/icons/appstore.svg"
            alt="App Store"
            width={30}
            height={30}
          />
          <div className="px-2">
            <p className="text-xs font-extralight">Download on the</p>
            <p>APP STORE</p>
          </div>
        </button>
        <button className="border border-gray-500 rounded-md p-2 hover:bg-gray-800 transition flex">
          <Image
            src="/icons/playstore.svg"
            alt="Play Store"
            width={30}
            height={30}
          />
          <div className="px-2">
            <p className="text-xs font-extralight">Get it on</p>
            <p>PLAY STORE</p>
          </div>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-col text-sm text-gray-300">
        {footerLinks.map((link, index) => (
          <Link
            key={index}
            href={link.to}
            className="hover:text-[#FF9463] transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
