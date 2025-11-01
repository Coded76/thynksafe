import Image from "next/image";
import Link from "next/link";
import React from "react";
import ToggleButton from "./UI/toggle";
import Button from "./UI/button";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      to: "/",
    },
    { name: "About us", to: "#about" },
    { name: "For students", to: "#students" },
    { name: "Universities", to: "#universities" },
    { name: "Why us", to: "#why" },
    { name: "Testimony", to: "#testimony" },
  ];
  return (
    <>
      <nav>
        <div className="bg-white p-3 flex justify-around items-center">
          <Image
            src="/images/thynksafe.png"
            alt="Thynksafe logo"
            width={200}
            height={200}
          />
          <div className="text-[#1E1E1E80] flex gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.to}
                className="hover:underline hover:text-black hover:decoration-[#FF9463]"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-10 items-center">
            <Button href={"/contact"}>Contact</Button>
            <ToggleButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
