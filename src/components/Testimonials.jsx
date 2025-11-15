import Image from "next/image";
import { Play } from "lucide-react";

const testimonials = [
  {
    name: "Tola, 20",
    title: "A Life Changing Experience",
    text: `I used to keep everything to myself because I didn’t want to bother anyone. Talking here helped me realize I’m not alone and that’s changed everything.`,
    subtitle: "University Student, Lagos",
    image: "/image/img-2.jpg",
    bg: "bg-[#FFA47A]",
  },
  {
    name: "Daniel, 23",
    title: "Professional, Kind And Truly Caring",
    text: `I joined when I was feeling utterly down. The community helped me find balance again — one chat at a time.`,
    subtitle: "Engineering, Cape Town",
    image: "/image/img-1.jpg",
    bg: "bg-[#000000A8]",
  },
  {
    name: "Amira, 22",
    title: "Supportive And Child Friendly",
    text: `It’s such a safe space. No judgment, just people who really listen and understand what you’re going through.`,
    subtitle: "Psychology Major, Nairobi",
    image: "/image/img-1.jpg",
    bg: "bg-[#52768C]",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-10 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left card with text */}
        <div
          className={`${testimonials[0].bg} rounded-2xl p-10 flex flex-col justify-center h-[320px]`}
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {testimonials[0].title}
            </h3>
            <p className="text-sm text-white mb-4">{testimonials[0].text}</p>
          </div>
          <div>
            <p className="font-medium text-white">{testimonials[0].name}</p>
            <p className="text-sm text-white">{testimonials[0].subtitle}</p>
          </div>
        </div>

        {/* Middle top image */}
        <div className="relative rounded-2xl overflow-hidden h-[320px]">
          <Image
            src={testimonials[0].image}
            alt={testimonials[0].name}
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition">
              <Play className="text-black w-6 h-6" />
            </div>
          </button>
        </div>

        {/* Right card with text */}
        <div
          className={`${testimonials[1].bg} rounded-2xl p-10 flex flex-col justify-center h-[320px]`}
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {testimonials[1].title}
            </h3>
            <p className="text-sm text-white mb-4">{testimonials[1].text}</p>
          </div>
          <div>
            <p className="font-medium text-white">{testimonials[1].name}</p>
            <p className="text-sm text-white">{testimonials[1].subtitle}</p>
          </div>
        </div>

        {/* Bottom left image */}
        <div className="relative rounded-2xl overflow-hidden h-[320px]">
          <Image
            src={testimonials[2].image}
            alt={testimonials[2].name}
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition">
              <Play className="text-black w-6 h-6" />
            </div>
          </button>
        </div>

        {/* Bottom center card */}
        <div
          className={`${testimonials[2].bg} rounded-2xl p-10 flex flex-col justify-center h-[320px]`}
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {testimonials[2].title}
            </h3>
            <p className="text-sm text-white mb-4">{testimonials[2].text}</p>
          </div>
          <div>
            <p className="font-medium text-white">{testimonials[2].name}</p>
            <p className="text-sm text-white">{testimonials[2].subtitle}</p>
          </div>
        </div>

        {/* Bottom right image */}
        <div className="relative rounded-2xl overflow-hidden h-[320px]">
          <Image
            src="/image/img-3.jpg"
            alt="Smiling person"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition">
              <Play className="text-black w-6 h-6" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
