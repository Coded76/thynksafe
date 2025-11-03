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
      <section id="universities" className=" bg-[#EBF8FF] p-10">
        <div className="max-w-5xl mx-auto mb-10">
          <h1 className="text-2xl underline text-black text-center">
            Partnering with Universities for Student Well-being
          </h1>
          <div className="bg-black text-white text-2xl p-7 inline-block mt-15 rounded-xl">
            Empowering Universities to <br /> Support Student Mental <br />{" "}
            Health.
          </div>
          <p className="text-[#00000080] max-w-md my-5">
            “We work with universities around the world to create safe,
            accessible spaces where students can talk, connect, and find the
            support they need — anytime, anywhere.”
          </p>
          <button className="flex gap-2 bg-[#52768C] px-4 py-2 rounded-md items-center">
            Book a demo <TbBookFilled />
          </button>
        </div>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl underline text-black text-center">
            Why universities partner with us
          </h1>
          <div className="flex justify-center my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {reasons.map((r, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl flex items-center  max-w-sm p-7 gap-4 text-black hover:shadow-md transition-shadow"
                >
                  <Image src={r.icons} alt={r.title} width={60} height={60} />
                  <div>
                    <h4 className="font-semibold mb-2">{r.title}</h4>
                    <p className="text-sm text-gray-700">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default University;
