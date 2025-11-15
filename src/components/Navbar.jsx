"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOn, setIsOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#students", label: "For students" },
    { href: "#universities", label: "Universities" },
    { href: "#why", label: "Why us" },
    { href: "#testimony", label: "Testimony" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1500px] mx-auto h-[80px] flex items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src="/image/logo.png"
            height={180}
            width={180}
            alt="logo"
            className="w-[120px] sm:w-[160px] md:w-[180px]"
          />
        </div>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden lg:flex items-center gap-[35px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-black/50 hover:text-black border-b-2 border-transparent hover:border-[#FF9463] transition-all duration-300 pb-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE (Buttons + Toggle) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Contact Button */}
          <button className="flex items-center cursor-pointer gap-2 border border-[#FF9463] text-[#FF9463] px-4 h-[47px] rounded-full hover:bg-[#FF9463] hover:text-white transition-all duration-300">
            <img src="/image/contact.png" className="h-[30px]" alt="contact" />
            <span>Contact</span>
          </button>

          {/* Toggle */}
          <button
            onClick={() => setIsOn(!isOn)}
            className={`relative w-[60px] h-[30px] cursor-pointer rounded-full transition-all duration-300 ${
              isOn ? "bg-[#FF9463]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-[22px] h-[22px] rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                isOn ? "translate-x-[30px]" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-7 h-7 text-[#FF9463]" />
            ) : (
              <Menu className="w-7 h-7 text-[#FF9463]" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-black/60 hover:text-[#FF9463] transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Contact + Toggle on mobile */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <button className="flex items-center cursor-pointer gap-2 border border-[#FF9463] text-[#FF9463] px-6 h-[45px] rounded-full hover:bg-[#FF9463] hover:text-white transition-all duration-300">
                <img
                  src="/image/contact.png"
                  className="h-[28px]"
                  alt="contact"
                />
                <span>Contact</span>
              </button>

              <button
                onClick={() => setIsOn(!isOn)}
                className={`relative w-[60px] h-[30px] cursor-pointer rounded-full transition-all duration-300 ${
                  isOn ? "bg-[#FF9463]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-[22px] h-[22px] rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                    isOn ? "translate-x-[30px]" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
