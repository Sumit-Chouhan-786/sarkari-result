import Link from 'next/link';
import React from 'react'
import { resultTool } from './common/Helper';

const ResultTool = () => {
  return (
    <div className="xl:max-w-[1280px]  container mx-auto px-4 xl:px-0 pb-12 lg:pb-[60px]">
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl relative inline before:absolute before:contents-[''] before:h-1 lg:before:h-[8px] before:w-full before:bottom-[-50%] before:rounded-xl before:start-0 before:bg-[#AB183D] md:text-3xl lg:text-[40px] mb-10 lg:mb-[100px]">
          Sarkari Result Tools
        </h2>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {resultTool.map((data, index) => (
          <Link key={index} href={data.refLink}>
            <div className="font-bold border border-[#000000] rounded-xl text-center hover:text-[#AB183D] transition-all duration-300 hover:shadow-[10px_10px_0px_#AB183D] shadow-[4px_4px_0px_#303030] text-black text-lg md:text-xl lg:text-2xl  p-6 lg:py-10 lg:px-7">
              {data.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ResultTool