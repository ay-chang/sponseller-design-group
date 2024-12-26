"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

const ProjectSkeleton = ({
  Title,
  Location,
  Completion,
  Program,
  Description,
  Images,
}: {
  Title: string;
  Location: string;
  Completion: string;
  Program: string;
  Description: string;
  Images: StaticImageData[]; // Updated to accept StaticImageData
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex === Images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className="mx-12 mt-12 mb-24 flex gap-28">
        {/* Left Column: Project Details */}
        <div className="w-4/10">
          {/* Location */}
          {Location && (
            <div className="pb-4 pt-4 flex border-t border-gray-300">
              <p className="text-sm text-gray-500 font-medium w-1/2">Location</p>
              <p className="text-sm font-medium w-1/2">{Location}</p>
            </div>
          )}

          {/* Completion */}
          {Completion && (
            <div className="pb-4 pt-4 flex border-t border-gray-300">
              <p className="text-sm text-gray-500 font-medium w-1/2">Anticipated Completion</p>
              <p className="text-sm font-medium w-1/2">{Completion}</p>
            </div>
          )}

          {/* Program */}
          {Program && (
            <div className="pb-4 pt-4 flex border-t border-gray-300">
              <p className="text-sm text-gray-500 font-medium w-1/2">Program</p>
              <p className="text-sm font-medium w-1/2">{Program}</p>
            </div>
          )}
        </div>

        {/* Right Column: Project Description */}
        <div className="w-6/10">
          <h1 className="text-4xl font-semibold pb-8">{Title}</h1>
          <p className="text-lg font-medium">{Description}</p>
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
            {Images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Project Image ${index + 1}`}
                className={`absolute inset-0 object-contain transition-transform duration-700 ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100"
                    : direction === "next"
                    ? index === (currentIndex - 1 + Images.length) % Images.length
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                    : index === (currentIndex + 1) % Images.length
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
                }`}
                style={{ height: "600px", maxWidth: "100%" }} // Fixed height with flexible width
              />
            ))}
          </div>
        </div>
        <button onClick={handleNext} className="text-black px-8 py-8 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Caption */}
      <div className="text-sm text-gray-500 text-center mb-12">
        <p>{`${currentIndex + 1} / ${Images.length}`}</p>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
