import Link from "next/link";
import React from "react";
import { updatesData } from "./common/Helper";
import { Arrow } from "./common/Icons";

const Updates = () => {
  return (
    <div className="xl:max-w-[1280px] container mx-auto px-4 xl:px-0 py-12 lg:py-[60px]">
      <div className="flex justify-center flex-wrap">
        {updatesData.map((data, index) => (
          <div className="lg:w-4/12 md:w-6/12 px-2 sm:px-3" key={index}>
            <div
              className={`border px-[36px] rounded-xl border-[#000000] ${
                index == 0
                  ? "bg-[#96FF7C]"
                  : index == 1
                  ? "bg-[#FE789A] mt-6 md:mt-0"
                  : "bg-[#FBFF42] mt-6 lg:mt-0"
              }`}
            >
              <h2 className="font-bold text-center py-4 text-[32px] border-b border-black mb-1">
                {data.heading}
              </h2>
              {/* Mapping over subData array */}
              {data.subData.map((item, i) => (
                <Link
                  key={i}
                  href={item.refLink}
                  className="text-center text-black block pt-4"
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex justify-center group items-center my-6">
                <h3 className="font-bold cursor-pointer">VIEW MORE</h3>
                <span className="group-hover:translate-x-1 transition-all ps-3 cursor-pointer duration-300">
                  <Arrow />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
