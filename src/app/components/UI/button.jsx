import Image from "next/image";
import Link from "next/link";
import React from "react";

const Button = ({ children, href }) => {
  return (
    <div className="inline-block">
      <Link
        href={href}
        className={`rounded-2xl border-2 border-[#FF9463] text-[#FF9463] px-4 py-1 flex items-center`}
      >
        <Image src="/icons/Union.svg" alt="" width={20} height={20} />
        {children}
      </Link>
    </div>
  );
};

export default Button;
