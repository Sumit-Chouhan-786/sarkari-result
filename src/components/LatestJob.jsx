import Link from "next/link";
import React from "react";

const LatestJob = () => {
  return (
    <div className="xl:max-w-[1280px]  container mx-auto px-4 xl:px-0 pb-12 lg:pb-[60px]">
      <div className="flex flex-wrap gap-4 sm:gap-0 justify-between">
        <Link className="lg:w-3/12 w-full sm:w-6/12 px-2" href="#">
          <button className="border-[2px] border-[#C2C2C2] rounded-lg w-full py-[10px] text-black font-semibold shadow-xl hover:shadow-none transition-all duraction-300 hover:scale-[1.02]">
            NTA CSIR NET Online Form 2024
          </button>
        </Link>
        <Link className="lg:w-3/12 w-full sm:w-6/12 px-2" href="#">
          <button className="border-[2px] border-[#C2C2C2] rounded-lg w-full py-[10px] text-black font-semibold shadow-xl hover:shadow-none transition-all duraction-300 hover:scale-[1.02]">
            Rajasthan Board 12th Result 2024
          </button>
        </Link>
        <Link
          className="lg:w-3/12 w-full sm:w-6/12 px-2 sm:pt-4 lg:pt-0"
          href="#"
        >
          <button className="border-[2px] border-[#C2C2C2] rounded-lg w-full py-[10px] text-black font-semibold shadow-xl hover:shadow-none transition-all duraction-300 hover:scale-[1.02]">
            Air Force Group Y Online Form 2024
          </button>
        </Link>
        <Link
          className="lg:w-3/12 w-full sm:w-6/12 px-2 sm:pt-4 lg:pt-0"
          href="#"
        >
          <button className="border-[2px] border-[#C2C2C2] px-3 rounded-lg w-full py-[10px] text-black font-semibold shadow-xl hover:shadow-none transition-all duraction-300 hover:scale-[1.02]">
            CBSE Class 12th Result 2024
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-4 sm:gap-0 justify-between max-w-[1000px] mx-auto pt-4">
        <Link className="lg:w-4/12 w-full sm:w-6/12 px-2" href="#">
          <button
            className="border-[2px] border-[#C2C2C2] rounded-lg w-full py-[10px] text-black font-semibold  shadow-xl hover:shadow-none transition-all duraction-300 hover:scale-[1.02];
"
          >
            NTA CSIR NET Online Form 2024
          </button>
        </Link>
        <Link className="lg:w-4/12 w-full sm:w-6/12 px-2" href="#">
          <button className="border-[2px] border-[#C2C2C2] rounded-lg w-full py-[10px] text-black font-semibold shadow-xl hover:shadow-none transition-all duraction-300 hover:scale-[1.02]">
            Rajasthan Board 12th Result 2024
          </button>
        </Link>
        <Link
          className="lg:w-4/12 w-full sm:w-6/12 px-2 sm:pt-4 lg:pt-0"
          href="#"
        >
          <button className="border-[2px] border-[#C2C2C2] rounded-lg w-full py-[10px] text-black font-semibold shadow-xl hover:shadow-none transition-all duraction-300 hover:scale-[1.02]">
            Air Force Group Y Online Form 2024
          </button>
        </Link>
        <Link className="lg:w-6/12 lg:hidden w-full sm:w-6/12 px-2 sm:pt-4" href="#">
          <button className="border-[2px] border-[#C2C2C2] rounded-lg w-full py-[10px] text-black font-semibold shadow-xl hover:shadow-none transition-all duraction-300 hover:scale-[1.02]">
            Rajasthan Board 12th Result 2024
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-4 sm:gap-0 justify-between lg:max-w-[660px] mx-auto pt-4">
        <Link className="md:w-6/12 lg:block w-full sm:w-6/12 px-2" href="#">
          <button className="border-[2px] border-[#C2C2C2] rounded-lg w-full py-[10px] text-black font-semibold shadow-xl hover:shadow-none transition-all duraction-300 hover:scale-[1.02]">
            NTA CSIR NET Online Form 2024
          </button>
        </Link>
        <Link
          className="lg:w-6/12 hidden lg:block w-full sm:w-6/12 px-2"
          href="#"
        >
          <button className="border-[2px] border-[#C2C2C2] rounded-lg w-full py-[10px] text-black font-semibold shadow-xl hover:shadow-none transition-all duraction-300 hover:scale-[1.02]">
            Rajasthan Board 12th Result 2024
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestJob;
