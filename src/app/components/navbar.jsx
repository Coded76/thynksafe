"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ToggleButton from "./UI/toggle";
import Button from "./UI/button";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About us", to: "#about" },
    { name: "For students", to: "#students" },
    { name: "Universities", to: "#universities" },
    { name: "Why us", to: "#why" },
    { name: "Testimony", to: "#testimony" },
  ];

  return (
    <>
      <nav className="">
        <div className="flex bg-white justify-between items-center px-5 lg:px-10 py-4 border-b">
          {/* LOGO */}
          <Image
            src="/images/thynksafe.png"
            alt="Thynksafe logo"
            width={180}
            height={180}
            className="hidden lg:block cursor-pointer"
          />

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex gap-10 text-[#1E1E1E80]">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.to}
                className="hover:underline hover:text-black hover:decoration-[#FF9463] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex gap-6 items-center">
            <Button href="/contact">Contact</Button>
            <ToggleButton />
          </div>

          {/* MOBILE MENU ICON */}
          <div className="lg:hidden w-full items-end flex justify-end">
            {isOpen ? (
              <BiX
                className="text-black cursor-pointer"
                size={32}
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <BiMenu
                className="text-black cursor-pointer"
                size={32}
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* MOBILE SLIDE-OUT MENU */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-40 flex flex-col`}
        >
          <div className="flex justify-between items-center px-5 py-4 border-b">
            <Image
              src="/images/thynksafe.png"
              alt="Thynksafe logo"
              width={150}
              height={150}
            />
            <BiX
              className="text-black cursor-pointer"
              size={30}
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="flex flex-col mt-5 space-y-6 px-6 text-[#1E1E1E80]">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.to}
                className="hover:text-[#FF9463] font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-6">
              <Button href="/contact" className="w-full justify-center">
                Contact
              </Button>
            </div>

            <div className="pt-4">
              <ToggleButton />
            </div>
          </div>
        </div>

        {/* BACKDROP OVERLAY */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
