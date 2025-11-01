import Image from "next/image";
import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { BsChatFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const Why = () => {
  const reasons = [
    {
      icon: <FaGraduationCap size={50} />,
      title: "We Undertand Student Life",
      description:
        "From exams to friendships, we sabi wetin dey your mind we don dey there before",
    },
    {
      icon: <BsChatFill size={50} />,
      title: "Real Conversations, Not Lectures",
      description:
        "Talk openly with people your age who truly listen, not judge. We listen we don’t judge",
    },

    {
      icon: <BiTimeFive size={50} />,
      title: "Support Anytime, Anywhere",
      description:
        "Day or night, someone’s always there to chat and help you feel less alone.",
    },
    {
      icon: <FaHeart size={50} />,
      title: "Built with Care",
      description:
        "Designed by students, counselors, and designers who care about your mental health journey.",
    },
  ];
  return (
    <>
      <section id="why" className="bg-[#52768C] text-white p-10">
        <div className="text-center">
          <h1 className="underline text-3xl mb-3">Why Choose Us?</h1>
          <p className="font-extralight text-sm ">
            Because life can be tough and Everyone deserves a space to talk,{" "}
            <br />
            feel, supported, and find peace of mind
          </p>
        </div>
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-10 justify-between mt-10">
          <Image
            src="/images/help.png"
            alt="mental health help"
            width={400}
            height={400}
          />
          <div className="bg-black/10 p-5 space-y-5 max-w-lg">
            {reasons.map((r, index) => (
              <div key={index} className="flex items-center gap-3">
                {r.icon}
                <div>
                  <h1 className="text-lg font-semibold">{r.title}</h1>
                  <p className="text-sm font-light">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Why;
