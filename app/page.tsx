import Image from "next/image";
import CoverImage from "../public/images/c1.webp";
import About from "@/app/components/About";
import Portfolio from "@/app/components/Portfolio";
import TestPortfolio from "@/app/components/TestPortfolio";

export default function Home() {
  return (
    <div>
      <div className="mx-12 my-16 text-6xl w-2/3">
        <p>Sponseller Design Group is where creativity meets structural excellence.</p>
      </div>
      <div className="relative w-screen h-screen">
        <Image src={CoverImage} alt="Cover photo" layout="fill" objectFit="cover" priority />
      </div>
      <div>
        <About />
      </div>
      <div className="">
        <Portfolio />
      </div>
      {/* <div>
        <TestPortfolio />
      </div> */}
    </div>
  );
}
