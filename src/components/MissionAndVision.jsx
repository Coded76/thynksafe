import React from "react";

const MissionAndVision = () => {
  const missionCards = [
    {
      color: "bg-[#4A7A99]",
      text: "We're on a mission to make mental health support simple, safe, and stigma-free for every student.",
      rotation: "rotate-6 absolute top-0 left-[10%]",
      position: "md:col-start-1 md:row-start-1",
    },
    {
      color: "bg-[#1A1A1A]",
      text: "Every day, students face pressures exams, isolation, self-doubt — that often go unnoticed. We understand these challenges, because we've lived them too.",
      rotation: "rotate-6 absolute top-20 -left-[20%]",
      position: "md:col-start-3 md:row-start-1",
    },
    {
      color: "bg-[#4A7A99]",
      text: "We believe that no one should ever feel alone, especially during the challenges of student life. That's why we've built a compassionate community where young people can talk openly, find understanding, and learn ways to care for their minds.",
      rotation: "-rotate-6 absolute top-[40%] left-[5%]",
      position: "md:col-start-1 md:row-start-2",
    },
    {
      color: "bg-[#FF9463]",
      text: "Through connection, empathy, and technology, we're creating a space where students can breathe, heal, and grow — together.",
      rotation: "rotate-6 absolute bottom-[5%] -left-[45%]",
      position: "md:col-start-3 md:row-start-2",
    },
    {
      color: "bg-[#1A1A1A]",
      text: "We're here to build a world where it's okay to talk, to reach out, and to heal — one conversation at a time.",
      rotation: "-rotate-1 absolute top-[100%] -left-[30%]",
      position: "md:col-start-2 md:row-start-3",
    },
  ];

  return (
    <section id="why" className="bg-white py-16 px-4 relative md:py-24">
      <img
        src="/image/line.png"
        className="absolute left-[40%] top-[20%]"
        alt=""
      />
      <div className="max-w-6xl mx-auto">
        {/* Mission Header */}
        <div className="flex justify-center mb-12">
          <div className="bg-black text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold">
            This is our mission
          </div>
        </div>

        {/* Card Layout Matching Image */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 place-items-center min-h-[650px]">
          {missionCards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} ${card.rotation} ${card.position} text-white rounded-3xl p-6 md:p-8 max-w-[506px] transform transition-all duration-300 hover:scale-105 shadow-lg`}
            >
              <p className="text-sm md:text-base leading-relaxed font-medium">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
 
    </section>
  );
};

export default MissionAndVision;
