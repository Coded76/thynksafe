"use client";
import React from "react";
import { BsChatFill, BsGlobe2 } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

const Students = () => {
  const offer = [
    {
      icon: <BsChatFill />,
      title: "Talk Freely",
      description: "Chat with person wey sabi",
      cardColor: "bg-[#F68049]",
    },
    {
      icon: <AiFillSafetyCertificate />,
      title: "Private & Safe",
      description: "Your conversations stay yours",
      cardColor: "bg-[#966FF3]",
    },
    {
      icon: <BsGlobe2 />,
      title: "Global Community",
      description: "Connect across campuses",
      cardColor: "bg-[#5EC0F7]",
    },
    {
      icon: <FaUserCircle />,
      title: "24/7 Support",
      description: "Someone’s always online",
      cardColor: "bg-[#A0A0A0]",
    },
  ];

  return (
    <section id="students" className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[40px] text-[#52768C] font-semibold underline text-center mt-10 mb-20">
          Your Space to Breathe, Talk, and Feel Better
        </h2>

        {/* Subtext */}
        <div className="bg-[#00000099] text-white rounded-lg p-[40px] max-w-5xl mx-auto mt-6 shadow-md">
          <p className="text-[24px] text-start leading-relaxed">
            Between deadlines, exams, and life changes, being a student can get
            overwhelming. We created a safe online space where you can talk
            openly, connect with others, and find support that actually works
            for you.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          {offer.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center gap-3 px-5 h-[185px] rounded-2xl text-white ${f.cardColor}`}
            >
              <div className="font-semibold flex items-center gap-[18px] text-[20px]">
              <div className="text-2xl">{f.icon}</div>
                <span>{f.title}</span>
              </div>
              <div className="text-xs md:text-sm opacity-90 text-center">
                {f.description}
              </div>
            </div>
          ))}
        </div>

        {/* Media & Info Section */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/image/student1.png"
              alt="Student using phone"
              width={600}
              height={500}
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Top Image */}
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/image/student2.png"
                alt="Student relaxing"
                width={600}
                height={300}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>

            {/* Chat Info Card */}
            <div className="bg-black text-white rounded-2xl px-6 h-[216px] flex justify-center items-center text-left">
              <p className="text-[24px] text-center leading-relaxed">
                Chat anonymously with students who understand what you&apos;re going
                through {" "}
                <span className="text-[#F68049] font-medium">stress</span>,{" "}
                <span className="text-[#F68049] font-medium">loneliness</span>,{" "}
                <span className="text-[#F68049] font-medium">burnout</span>,
                anything. Available on mobile and web, talk anytime, anywhere.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
          <button className="bg-[#5E8CA8] shadow-md shadow-[#00000080] text-white px-8 py-3 rounded-full text-sm md:text-base hover:bg-[#4C7A92] transition">
            Join Community
          </button>
          <p className="text-[16px] text-gray-500">
            It&apos;s free, safe and made for students like you!!!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Students;
