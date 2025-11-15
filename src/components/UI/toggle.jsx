"use client";
import React, { useEffect, useState } from "react";

const ToggleButton = () => {
  // initialize from localStorage or system preference
  const [isDark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      console.debug('[toggle] set data-theme', isDark ? 'dark' : 'light');
    } catch (e) {
      // ignore
    }
  }, [isDark]);

  const onChange = () => setDark((s) => !s);

  return (
    <div className="flex items-center" title={isDark ? "Switch to light" : "Switch to dark"}>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDark}
          onChange={onChange}
          className="sr-only"
          aria-label="Toggle dark mode"
        />
        <span
          className={`w-12 h-6 rounded-full transition-colors duration-150 ${
            isDark ? "bg-orange-400" : "bg-gray-300"
          } relative`}
        >
          <span
            className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-150 absolute top-0.5 ${
              isDark ? "translate-x-6" : "translate-x-0.5"
            }`}
          />
        </span>
      </label>
      {/* visible debug label to confirm the toggle state */}
      <span className="ml-2 text-sm select-none" aria-hidden>
        {isDark ? "Dark" : "Light"}
      </span>
    </div>
  );
};

export default ToggleButton;
