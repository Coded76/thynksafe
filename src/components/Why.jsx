import { FaGraduationCap } from "react-icons/fa6";
import { BsChatFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const Why = () => {
  const reasons = [
    {
      icon: <FaGraduationCap size={60} className="text-white" />,
      title: "We Understand Student Life",
      description:
        "From exams to friendships, we sabi wetin dey your mind — we don dey there before.",
    },
    {
      icon: <BsChatFill size={60} className="text-white" />,
      title: "Real Conversations, Not Lectures",
      description:
        "Talk openly with people your age who truly listen, not judge. We listen, we don’t judge.",
    },
    {
      icon: <BiTimeFive size={60} className="text-white" />,
      title: "Support Anytime, Anywhere",
      description:
        "Day or night, someone’s always there to chat and help you feel less alone.",
    },
    {
      icon: <FaHeart size={60} className="text-white" />,
      title: "Built with Care",
      description:
        "Designed by students, counselors, and designers who care about your mental health journey.",
    },
  ];

  return (
    <section id="why" className="bg-[#52768C] text-white py-16 px-4 md:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold underline mb-4">
          Why Choose Us?
        </h2>
        <p className="font-light text-base sm:text-lg md:text-xl leading-relaxed">
          Because life can be tough — and everyone deserves a space to talk,
          feel supported, and find peace of mind.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto gap-10 mt-12">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <Image
            src="/image/help.png"
            alt="mental health help"
            width={600}
            height={500}
            className="rounded-2xl object-cover w-full h-auto md:max-h-[500px]"
          />
        </div>

        {/* Right Content */}
        <div className="bg-black/10 backdrop-blur-sm w-full md:w-1/2 rounded-2xl p-6 sm:p-8 space-y-6">
          {reasons.map((r, index) => (
            <div key={index} className="flex flex-row sm:items-center gap-4">
              <div className="flex justify-center sm:justify-start">
                {r.icon}
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {r.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
