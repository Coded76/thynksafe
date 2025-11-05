import React from "react";
import Button from "../components/UI/button";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="bg-white px-15  text-[#FF9463] ">
        <div className="text-center mb-5 py-5">
          <Button href="/founders">FOUNDER'S</Button>
        </div>

        <section
          id="about"
          className="  grid md:grid-cols-2 max-w-5xl pb-10 mx-auto"
        >
          <div className="space-y-3 items-center flex flex-col justify-start pt-20">
            <Image
              src="/images/profile.png"
              height={150}
              width={150}
              alt="Stephen Precious"
            />
            <button className="px-5 py-1 bg-[#FF9463] shadow-lg shadow-gray-500 rounded-full text-white">
              Stephen Precious
            </button>
            <p>FOUNDER</p>
          </div>
          <div>
            <h1 className="font-bold text-xl mb-10 hidden md:block">
              Meet Stephen Precious
            </h1>

            <div className="text-center space-y-6 my-5 md:my-0">
              <div className="font-semibold">
                Stephen Precious is a Computer Science student at Kwara State
                University and the founder of ThynkSafe, a mental support
                platform designed to help African students navigate depression,
                anxiety, and emotional struggles through access to licensed
                therapists, guided self-help resources, and a supportive
                community that truly understands.
              </div>
              <div className="italic">
                What started as a simple idea rooted in curiosity and empathy
                quickly grew into a mission to bridge the gap between technology
                and mental health awareness across African campuses. Stephen’s
                journey is driven by his belief that no one should suffer in
                silence, and that open conversations, community, and timely
                access to help can change lives.
              </div>
              <div className="italic">
                A natural problem solver with a deep passion for human centered
                innovation, Stephen is constantly exploring how digital tools
                can inspire hope, build resilience, and create safe spaces for
                healing. His leadership reflects a blend of compassion,
                creativity, and purpose, inspiring others to join in reshaping
                how mental health is understood and supported in Africa.
              </div>
              <div className="italic">
                When he’s not building ThynkSafe, Stephen spends his time
                learning, researching, and developing ideas that push
                boundaries, from technology and design to community building and
                personal growth. He believes that every great solution begins
                with empathy and that mental health care should be as easy to
                access as the internet itself.
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
