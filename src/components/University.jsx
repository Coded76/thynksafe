import Image from "next/image";
import React from "react";
import { TbBookFilled } from "react-icons/tb";

const University = () => {
  const reasons = [
    {
      icons: "/icons/mental-health.svg",
      title: " Scalable Mental Health Support",
      description:
        "Give every student access to 24/7 peer support and well-being resources.",
    },
    {
      icons: "/icons/metrics.svg",
      title: "Real-Time Insights",
      description:
        "Understand student needs and engagement through anonymized data and feedback.",
    },
    {
      icons: "/icons/wifi-icon.svg",
      title: "Inclusive & Accessible ",
      description:
        "Built for diverse student communities — culturally sensitive, multilingual, and stigma-free.",
    },
    {
      icons: "/icons/blocks.svg",
      title: "Easy Integration",
      description:
        "Seamless onboarding for campuses with minimal setup required.",
    },
  ];
  return (
    <>
      <section id="universities" className="bg-[#EBF8FF] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[40px] text-black font-semibold underline text-center mt-10 mb-20">
            Partnering with Universities for Student Well-being
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-8 md:items-center">
            {/* left content */}
            <div className="md:w-1/2">
              <div className="bg-black text-white text-2xl md:text-3xl p-8 rounded-2xl max-w-lg">
                Empowering Universities to
                <br /> Support Student Mental
                <br /> Health.
              </div>

              <p className="text-[#00000080] max-w-lg mt-6">
                “We work with universities around the world to create safe,
                accessible spaces where students can talk, connect, and find the
                support they need — anytime, anywhere.”
              </p>

              <div className="mt-6">
                <button className="inline-flex items-center gap-3 bg-[#52768C] text-white px-5 py-3 rounded-full">
                  <span>Book a demo</span>
                  <TbBookFilled />
                </button>
              </div>
            </div>

            {/* right spacer / illustration - keep empty for now or place decorative SVG */}
            {/* <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="w-56 h-40 md:w-72 md:h-56 rounded-xl bg-white/40" aria-hidden />
            </div> */}
          </div>

          <h2 className="text-[40px] text-black font-semibold underline text-center my-20">
            Why Universities Partner With Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl px-6 h-52 shadow-lg flex gap-4 items-center justify-center hover:shadow-md transition-shadow"
              >
                {/* <div className="w-14 h-14 rounded-lg flex items-center justify-center"> */}
                  <Image src={r.icons} alt={r.title} width={80} height={80} />
                {/* </div> */}
                <div>
                  <h4 className="font-semibold mb-2 text-[24px] text-gray-900">{r.title}</h4>
                  <p className="text-[20px] text-gray-600">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default University;
