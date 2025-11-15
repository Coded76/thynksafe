"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowDownLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="bg-white flex flex-col justify-center md:pt-20 pt-10 min-h-[850px]">
      <section className="relative overflow-hidden px-6 md:px-12 lg:px-20 flex items-center">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-10 pt-24 md:pt-0">
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-6 ">
            {/* Gradient Tag */}
            <div className="inline-block bg-gradient-to-r from-[#fff] to-[#FFA47A40] px-6 py-4">
              <p className="text-[18px] md:text-[20px] font-semibold text-gray-700 leading-snug">
                Talk with People Who <br /> Understand Anytime, Anywhere
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-[45px] md:text-[64px] font-[700] text-center md:text-left leading-[1.1] text-[#FF9463]">
              Talk your mind, make <br className="hidden md:block" />
              we reason am <br /> together
            </h1>

            {/* Sub Text */}
            <p className="text-gray-700 text-base md:text-lg max-w-md text-center md:text-left mx-auto md:mx-0 leading-relaxed">
              Join a caring global community where students and peers support
              each other through life’s ups and downs.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <Link href={"/waitlist"} className="bg-gradient-to-r from-purple-500 to-orange-300 text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition-all shadow-md">
                Join Waitlist
              </Link>

              <button className="border border-gray-400 px-7 py-3 rounded-full font-medium text-gray-700 hover:bg-gray-100 transition flex items-center gap-2">
                Download the App
                <FaArrowDownLong className="text-sm" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative w-[330px] md:w-[500px] h-auto">
              <Image
                src="/main.png"
                alt="Hero visual"
                width={600}
                height={600}
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center pt-20 w-full">
        <img src="/team.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
