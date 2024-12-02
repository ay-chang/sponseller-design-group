"use client";

import Link from "next/link";
import Image from "next/image";
// import { useState } from "react";
import AuburnAvenue from "@/public/images/auburn-avenue-cover.png";
import CarollCreek from "@/public/images/caroll-creek-cover.png";
import NationalHQ from "@/public/images/national-hq.png";
import CityRidge from "@/public/images/city-ridge.png";

const Portfolio = () => {
  return (
    <div className="mt-6 mb-24">
      <div className="mx-12 flex justify-between items-end pb-16">
        <p className="text-7xl">Featured Projects</p>
        <div className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex gap-4 w-full">
        {/* Image 1 */}
        <Link href="/projects/city-ridge">
          <div>
            <div className="w-[655px] h-[430px]">
              <Image src={CityRidge} alt="City Ridge" className="w-full h-full object-cover" />
            </div>
            <p className="text-lg py-4">City Ridge</p>
            <p className="tex-sm text-gray-500">Office / Residences / Retail</p>
          </div>
        </Link>

        {/* Image 2 */}
        <Link href="/projects/caroll-creek">
          <div>
            <div className="w-[655px] h-[430px]">
              <Image
                src={CarollCreek}
                alt="Caroll Creek"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg py-4">Caroll Creek</p>
            <p className="tex-sm text-gray-500">Residences / Retail</p>
          </div>
        </Link>

        {/* Image 3 */}
        <Link href="/projects/national-hq">
          <div>
            <div className="w-[655px] h-[430px] shrink-0">
              <Image
                src={NationalHQ}
                alt="National HQ"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg py-4">National Headquarters</p>
            <p className="tex-sm text-gray-500">Residences / Retail</p>
          </div>
        </Link>

        {/* Image 4 */}
        <Link href="/projects/auburn-avenue">
          <div>
            <div className="w-[655px] h-[430px] shrink-0">
              <Image
                src={AuburnAvenue}
                alt="Auburn Avenue"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg py-4">Auburn Avenue</p>
            <p className="tex-sm text-gray-500">Residences</p>
          </div>
        </Link>

        {/* Image 5 */}
        <Link href="/projects/auburn-avenue">
          <div>
            <div className="w-[655px] h-[430px]">
              <div className="bg-gray-200 w-full h-full">
                <p className="text-super pl-8 pt-8 text-white">View All Projects</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
