"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import CarollCreek1 from "@/public/images/Carroll Creek/caroll-creek-1.png";
import CarollCreek2 from "@/public/images/Carroll Creek/caroll-creek-2.png";
import CarollCreek3 from "@/public/images/Carroll Creek/caroll-creek-3.png";
import CarollCreek4 from "@/public/images/Carroll Creek/caroll-creek-4.png";
import CarollCreek5 from "@/public/images/Carroll Creek/caroll-creek-5.png";
import CarollCreek6 from "@/public/images/Carroll Creek/caroll-creek-6.png";

const CarollCreek = () => {
  const images = [
    CarollCreek1,
    CarollCreek2,
    CarollCreek3,
    CarollCreek4,
    CarollCreek5,
    CarollCreek6,
  ];
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
      {/* Navbar Section */}
      <div>
        <Navbar />
      </div>

      {/* Project Details Section */}
      <div className="mx-12 mt-12 mb-24 flex">
        {/* Left Column: Project Details */}
        <div className="w-1/2">
          <div className="pb-4">
            <p className="text-lg text-gray-500 font-medium">Location</p>
            <p className="text-lg font-medium">Frederick, Maryland</p>
          </div>
          <div className="pb-4">
            <p className="text-lg text-gray-500 font-medium">Anticipated Completion</p>
            <p className="text-lg font-medium">2026</p>
          </div>
          <div className="pb-4">
            <p className="text-lg text-gray-500 font-medium">Program</p>
            <p className="text-lg font-medium">230 Residences, Retail</p>
          </div>
        </div>

        {/* Right Column: Project Description */}
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold pb-8">Caroll Creek Historic District</h1>
          <p className="text-lg font-medium">
            Located in a historic district on the National Register of Historic Places, the
            project's design responds to the industrial legacy of its site including a former
            rail station, warehouses, and manufacturing buildings. The site is located on the
            historic Carroll Creek canal and public park. The building concept consists of
            three wings organized around three outdoor courtyards. The material selections
            include clay masonry consistent with the historic context and metal panels that
            recall historic metal roofscapes in Frederick. The program includes retail and
            residential uses.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex items-center mx-12">
        <button onClick={handlePrev} className="text-black px-8 py-7 rounded-lg">
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

        <div className="mb-4 relative overflow-hidden h-[600px] w-[900px] max-w-full mx-auto">
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
                style={{ height: "600px", maxWidth: "900px" }} // Ensures consistent height and max width
              />
            ))}
          </div>
        </div>
        <button onClick={handleNext} className="text-black px-8 py-8 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Caption */}
      <div className="text-sm text-gray-500 text-center mb-12">
        <p>{`${currentIndex + 1} / ${images.length}`}</p>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default CarollCreek;
