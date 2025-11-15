"use client";

import { X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

export default function EarlyAccess() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      if (res.status === 200) {
        toast.success("You're on the waitlist! 🎉🥰");
        setForm({ firstName: "", lastName: "", email: "" });
      } else {
        toast.error("We encounter an issue, please try again later");
      }
    } catch (err) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#00000099] relative">
      <img src="/blur.png" className="absolute top-0 left-0" alt="" />

      <div className="relative max-w-[820px] h-[662px] flex flex-col justify-center w-full bg-gradient-to-br from-[#D0CBCB8A] to-[#553a15] backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/10">
        {/* Logo */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <Link href={"/"}>
            <img src="/image/logo.png" className="h-10" alt="logo" />
          </Link>
          <div className="px-3 py-1 text-xs rounded-full bg-[#FF9463]/20 text-[#FF9463]">
            Coming soon
          </div>
        </div>

        <h1 className="text-3xl max-w-[450px] w-full mx-auto font-semibold text-white mb-2">
          Get <span className="text-[#FF9463]">early</span> access
        </h1>

        <p className="text-sm max-w-[450px] w-full mx-auto text-gray-300 mb-8">
          Be one of the first to get access to thynksafe as soon as we launch
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-[450px] w-full mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-300 block mb-2">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF9463]"
                placeholder="First name"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-2">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF9463]"
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF9463]"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-lg bg-[#FFE6D8] text-[#D1643C] font-semibold mt-4 hover:opacity-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Get access"}
          </button>
        </form>

        {/* Socials */}
        <div className="flex items-center justify-center gap-8 mt-10">
          <FaTwitter size={24} className="text-white/80" />
          <FaLinkedin size={24} className="text-white/80" />
        </div>
      </div>
      <Toaster />
    </section>
  );
}
