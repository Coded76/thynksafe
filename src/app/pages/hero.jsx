import Image from "next/image";
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <>
      <section id="home" className="bg-white grid grid-cols-2 px-15 py-10">
        <div className="">
          <div className=" w-100 text-gray-500">
            <p>Talk with People Who</p>
            <p>Understand Anytime,Anywhere</p>
          </div>
          <h1 className="text-[#FF9463] text-5xl font-bold my-5">
            Talk your mind, make <br />
            we <span className="text-orange-500">reason</span> am <br />
            together
          </h1>
          <p className="text-black text-sm">
            Join a caring global community where students and peers support each{" "}
            <br />
            other through life’s ups and downs.
          </p>
          <div className="flex gap-5 mt-5">
            <button className="rounded-full cursor-pointer bg-gradient-to-r from-[#966FF3] to-[#FF946366] px-4 py-2 text-white">
              Join waitlist
            </button>
            <button className="rounded-full cursor-pointer py-2 px-6 border border-black text-black flex gap-2 items-center">
              Download the App
              <Image src="/icons/downArrow.svg" alt="" width={15} height={15} />
            </button>
          </div>
        </div>
        <div className="text-black">Photo side</div>
      </section>
    </>
  );
};

export default Hero;
