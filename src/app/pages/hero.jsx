import Image from "next/image";
import { FaArrowDownLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center md:justify-between px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
      {/* LEFT TEXT CONTENT */}
      <div className="flex-1 space-y-5 text-center md:text-left h-100 mt-20">
        {/* Top Tag */}
        <div className="inline-block bg-gradient-to-r from-orange-100 to-white px-3 py-4  text-gray-700 text-sm font-medium">
          Talk with People Who Understand Anytime, Anywhere
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold leading-tight text-[#FF9463]">
          Talk your mind, make <br className="hidden md:block" />
          we reason am <br /> together
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg max-w-md mx-auto md:mx-0">
          Join a caring global community where students and peers support each
          other through life’s ups and downs.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <button className="bg-gradient-to-r from-purple-400 to-orange-300 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
            Join Waitlist
          </button>
          <button className="border border-gray-400 px-6 py-2 rounded-full font-medium text-gray-700 hover:bg-gray-100 transition flex items-center gap-2">
            Download the App
            <span>
              <FaArrowDownLong />
            </span>
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
    </section>
  );
};

export default HeroSection;
