import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestJob from "@/components/LatestJob";
import ResultTool from "@/components/ResultTool";
import Updates from "@/components/Updates";
import WhyTrust from "@/components/WhyTrust";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Header/>
   <Hero/>
   <LatestJob/>
   <ResultTool/>
   <Updates/>
   <WhyTrust/>
   <Footer/>
   </>
  );
}
