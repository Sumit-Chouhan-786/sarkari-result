import React from "react";
import Link from "next/link"; 
import Image from "next/image";
import { footerLinks, footerSocialLinks } from "./common/Helper";


const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <div>
      <div className="xl:max-w-[1280px] container mx-auto px-4 xl:px-0 py-12 lg:py-[60px]">
        <div className="flex flex-wrap justify-between">
          <div className="lg:w-4/12 md:w-5/12">
            <Link href="#">
              <Image
                className="md:max-w-[300px] max-w-[200px]"
                height={103}
                width={348}
                src="/assets/png/logo.png"
                alt="logo"
              />
            </Link>
            <p className="text-[#161616] opacity-70 pt-4">
              Applying to a government can be quite overwhelming with several
              deadlines and exam requirements. Rather than weeding through
              numerous websites, Sarkari Results lists all the government jobs.
              One-page summaries of the requirements provide all the important
              information in an easy-to-read format.
            </p>
            <div className="flex gap-4 pt-10">
              {footerSocialLinks.map((data, index) => (
                <div
                  className="hover:scale-110 transition-all duration-300"
                  key={index}
                >
                  <Link
                    target="_blank"
                    href={data.refLink}
                    className="h-[40px] w-[40px]"
                  >
                    {data.myImg}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-4/12 justify-between mt-6 md:mt-6 w-full md:w-5/12 flex">
            <div className="w-6/12">
              <h3 className="pb-[10px] font-medium text-lg">Quick links</h3>
              {footerLinks.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col hover:text-[#AB183D] transition-all duration-300 pt-3"
                >
                  <Link href={data.refLink}>{data.title}</Link>
                </div>
              ))}
            </div>
            <div className="w-6/12">
              <h3 className="pb-[10px] font-medium text-lg">Quick links</h3>
              {footerLinks.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col pt-3 hover:text-[#AB183D] transition-all duration-300"
                >
                  <Link href={data.refLink}>{data.title}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="sm:py-6 py-5 border border-t-[#ADADAD] text-center">
        © {currentYear} All Rights Reserved |{" "}
      </p>
    </div>
  );
};

export default Footer;
