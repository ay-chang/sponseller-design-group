"use client";

import Image from "next/image";
import { useState } from "react";
import AuburnAvenue1 from "@/public/images/auburn-avenue/auburn-avenue-1.png";
import AuburnAvenue2 from "@/public/images/auburn-avenue/auburn-avenue-2.png";

const AuburnAvenue = () => {
  const images = [AuburnAvenue1, AuburnAvenue2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className="mx-12 mb-24 ">
        <div className="pb-8">
          <div className="font-medium pb-4">
            <p className="text-gray-500">Location</p>
            <p className="">Woodmont Triangle District - Bethesda, Maryland</p>
          </div>
          <div className="font-medium pb-2">
            <p className="text-gray-500">Completion</p>
            <p className="">2024</p>
          </div>
          <div className="font-medium pb-2">
            <p className="text-gray-500">Program</p>
            <p className="">210 Residences</p>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          {/* Carousel Section */}
          <div className="w-2/3">
            {/* Buttons for Carousel */}
            <div className="">
              <button onClick={handlePrev} className="text-black rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button onClick={handleNext} className="text-black rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            {/* Image for Carousel */}
            <div className="mb-4 relative overflow-hidden h-[550px] w-[850px] max-w-full">
              <div className="relative h-full w-full">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Caroll Creek ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                      index === currentIndex
                        ? "translate-x-0 opacity-100"
                        : direction === "next"
                        ? index === (currentIndex - 1 + images.length) % images.length
                          ? "-translate-x-full opacity-0"
                          : "translate-x-full opacity-0"
                        : index === (currentIndex + 1) % images.length
                        ? "translate-x-full opacity-0"
                        : "-translate-x-full opacity-0"
                    }`}
                    style={{ height: "550x", maxWidth: "850px" }} // Ensures consistent height and max width
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-1/3">
            <h1 className="text-3xl font-medium pb-6">Auburn Avenue</h1>
            <p className="text-lg">
              The unusual architectural form for this project is inspired by its unique
              location. The architects wanted the building to mediate the scale of the
              residential neighborhood to its north and the downtown urban character to its
              south. Beyond merely stepping the building, the design embraces the modular scale
              of the neighborhood as part of its form. A through-block public connection runs
              through the center of the building on the ground level, providing mid-square
              access to a neighborhood park adjacent to the site. The patterned masonry
              surfaces provide a welcoming, approachable palette for the neighborhood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuburnAvenue;
