import React from "react";
import { BsChatFill } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
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
      title: "Privacy & Safety",
      description: "Your conversations stay yours",
      cardColor: "bg-[#966FF3]",
    },
    {
      icon: <BsGlobe2 />,
      title: "Global Community",
      description: "Connect across campuses",
      cardColor: "bg-[#87CEFA]",
    },
    {
      icon: <FaUserCircle />,
      title: "24/7 Support",
      description: "Someone’s always online",
      cardColor: "bg-[#1E1E1E80]",
    },
  ];
  return (
    <>
      <section id="students" className="p-10 bg-white">
        <h1 className="underline text-[#52768C] text-2xl text-center">
          Your Space to Breathe, Talk, and Feel Better
        </h1>
        <div className="bg-black/60 p-4 max-w-3xl mx-auto mt-10">
          <p>
            Between deadlines, exams, and life changes, being a student can get
            overwhelming. We created a safe online space where you can talk
            openly, connect with others, and find support that actually works
            for you.”
          </p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row justify-center my-10">
          {offer.map((f, index) => (
            <div
              key={index}
              className={`${f.cardColor} px-5 py-10 rounded-3xl inline-block space-y-2`}
            >
              <p className="flex gap-2 items-center justify-center">
                {f.icon}
                {f.title}
              </p>
              <span className="text-sm">{f.description}</span>
            </div>
          ))}
        </div>
        <section className="flex flex-col items-center justify-center py-10 bg-white">
          {/* Top Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Left Image */}
            <div className="rounded-2xl overflow-hidden w-[280px] md:w-[350px]">
              <Image
                src="/images/student1.png" // replace with your image
                alt="Student using phone"
                width={350}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-2xl overflow-hidden w-[280px] md:w-[350px]">
                <Image
                  src="/images/student2.png" // replace with your image
                  alt="Student relaxing"
                  width={350}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-[#1E1E1E] rounded-2xl px-6 py-4 text-center text-sm md:text-base max-w-[350px] text-[#FF8AC4]">
                Chat anonymously with students who understand what you’re going
                through — stress, loneliness, burnout, anything. Available on
                mobile and web, talk anytime, anywhere.
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <button className="bg-[#5E8CA8] text-white px-6 py-2 rounded-full text-sm md:text-base hover:bg-[#4C7A92] transition">
              Join Community
            </button>
            <p className="text-xs text-gray-500">
              It’s free, safe and made for students like you!!!
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Students;
