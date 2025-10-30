"use client";
import React, { useState } from "react";

const ToggleButton = () => {
  const [isDark, setDark] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked
        className="toggle text-black/50 border-2 border-black/30 bg-[#F6F5F3]"
      />
    </div>
  );
};

export default ToggleButton;
