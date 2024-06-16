import Link from "next/link";
import React from "react";
import { socialRefLinks } from "./common/Helper";

const Hero = () => {
  return (
    <div className="xl:max-w-[1280px]  container mx-auto px-4 xl:px-0 py-12 lg:py-[60px]">
      <div className="flex flex-wrap text-black justify-between items-center  gap-5 sm:gap-0">
        {socialRefLinks.map((data, index) => (
          <Link
            className={`lg:w-3/12 w-full sm:w-6/12 px-2 ${
              index == 2
                ? "sm:pt-4 lg:pt-0"
                : index == 3
                ? "sm:pt-4 lg:pt-0"
                : ""
            }`}
            key={index}
            href={data.refLink}
          >
            <button className="bg-[#AB183D] common_btn lg:h-[72px] xl:h-[unset] transition-all duration-300 py-3 w-full rounded-xl text-white">
              {data.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
