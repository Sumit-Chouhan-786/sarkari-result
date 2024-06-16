"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { navData } from "./common/Helper";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  // Add useEffect to handle body overflow
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showNav]);

  return (
    <div>
      <div className="xl:max-w-[1280px] container mx-auto px-4 xl:px-0">
        <div className="flex items-center py-5 justify-between">
          <Link href="#">
            <Image
              className="md:max-w-[300px] max-w-[200px]"
              height={103}
              width={348}
              src="/assets/png/logo.png"
              alt="logo"
            />
          </Link>
          <div className="text-black hidden lg:flex items-center gap-3 xl:gap-5">
            {navData.map((data, index) => (
              <Link
                key={index}
                href={data.refLink}
                className="hover:text-[#AB183D] transition-all duration-300"
              >
                {data.title}
              </Link>
            ))}
            <button className="bg-[#AB183D] common_btn transition-all duration-300 py-3 px-6 rounded-xl text-white">
              Contact Us
            </button>
          </div>
          {/* Toggle button for mobile */}
          <div
            className="flex lg:hidden cursor-pointer relative z-40"
            onClick={toggleNav}
          >
            <div className="w-[30px] h-[20px] relative">
              <span
                className={`absolute h-1 w-full bg-[#AB183D] transition-transform ${
                  showNav
                    ? "rotate-[50deg] translate-y-[-0px]"
                    : "translate-y-[10px]"
                }`}
              ></span>
              <span
                className={`absolute h-1 w-full bg-[#AB183D] ${
                  showNav ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute h-1 w-full bg-[#AB183D] transition-transform ${
                  showNav
                    ? "-rotate-[50deg] translate-y-0"
                    : "-translate-y-[10px]"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile navigation */}
      <div
        className={`text-white justify-center lg:hidden flex flex-col z-30  backdrop-blur-[60px] fixed h-screen top-0 w-screen items-center gap-8 ${
          showNav ? "left-0" : "-left-full"
        } transition-all duration-300`}
      >
        {navData.map((data, index) => (
          <Link
            onClick={toggleNav}
            key={index}
            href={data.refLink}
            className="hover:text-[#AB183D] transition-all duration-300"
          >
            {data.title}
          </Link>
        ))}
        <button className="bg-[#AB183D] common_btn transition-all duration-300 py-3 px-6 rounded-xl text-white">
          Contact Us
        </button>
      </div>
      <div className="bg-[#A0FFD7] py-5 px-4">
        <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-center">
          Sarkari Result : SarkariResult.Com Sarkari Naukri Latest Jobs Online
          Form at Sarkari Results 2024
        </h3>
        <p className="text-center font-bold pt-3 text-[#AB183D]">
          Welcome to No. 1 Education Portal Sarkari Result 2024
        </p>
      </div>
    </div>
  );
};

export default Header;
