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
  Images: StaticImageData[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openProjectDetails, setOpenProjectDetails] = useState(false);

  // Disable scrolling on mount
  // useEffect(() => {
  //   document.body.style.overflow = "hidden"; // Prevent scrolling
  //   return () => {
  //     document.body.style.overflow = "auto"; // Restore scrolling if component unmounts
  //   };
  // }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Images.length - 1 ? 0 : prevIndex + 1));
  };

  // Custom smooth scrolling function to control speed
  const smoothScrollTo = (targetY: number, duration: number = 1000) => {
    const startY = window.scrollY;
    const startTime = performance.now();

    const scrollStep = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easing =
        progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      window.scrollTo(0, startY + (targetY - startY) * easing);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  const scrollToInfo = () => {
    const infoSection = document.getElementById("info-section");
    if (infoSection) {
      smoothScrollTo(infoSection.offsetTop, 1500); // Slows down to 1.5s
    }
  };

  const scrollToTop = () => {
    smoothScrollTo(0, 1500); // Scroll back to top in 1.5s
  };

  const handleProjectDetails = () => {
    setOpenProjectDetails(!openProjectDetails);
  };

  return (
    <div className="overflow-auto">
      {/* Top Image Section */}
      <div id="top-section" className="flex flex-col items-center">
        <div className="flex items-center mx-12 my-6">
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

          <div className="relative overflow-hidden h-[600px] w-[900px] max-w-full mx-auto">
            <div className="relative h-full w-full">
              {Images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  className={`absolute inset-0 object-contain transition-opacity duration-700 ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  style={{ height: "600px", maxWidth: "100%" }}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Captions */}
      <div className="flex justify-between text-xl font-light text-gray-600 py-8 mx-12">
        {/* Read Info Button */}
        <button
          onClick={scrollToInfo}
          className="hover:text-gray-600 transition text-gray-500"
        >
          Read Info
        </button>
        {/* Title */}
        <div className="">
          <h1 className="">{Title}</h1>
        </div>
        {/* Caption */}
        <div className="">
          <p>
            {currentIndex + 1} / {Images.length}
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div id="info-section" className="mx-12  pt-24 min-h-screen relative">
        <div className="">
          {/* Project Description */}
          <div className="w-2/3 pb-8">
            <p className="text-lg font-medium leading-relaxed pb-4">{Description}</p>
            <p className="text-lg font-medium leading-relaxed">{Description}</p>
          </div>
        </div>

        {/* Project Details */}
        <div>
          <div className="text-sm text-gray-500 cursor-pointer w-fit">
            <p onClick={handleProjectDetails}>
              {openProjectDetails ? "- Project Details" : "+ Project Details"}
            </p>
          </div>
          <div
            className={`w-4/10 pl-3 pt-4 transition-opacity duration-500 ${
              openProjectDetails ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {Location && (
              <div className="flex pb-2 border-gray-300">
                <p className="text-sm text-gray-500 w-1/2">Location</p>
                <p className="text-sm font-medium w-1/2">{Location}</p>
              </div>
            )}

            {Completion && (
              <div className="flex py-2 border-gray-300">
                <p className="text-sm text-gray-500 w-1/2">Anticipated Completion</p>
                <p className="text-sm font-medium w-1/2">{Completion}</p>
              </div>
            )}

            {Program && (
              <div className="py-2 flex border-gray-300">
                <p className="text-sm text-gray-500 w-1/2">Program: </p>
                <p className="text-sm font-medium w-1/2">{Program}</p>
              </div>
            )}
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="absolute bottom-6">
          <button
            onClick={scrollToTop}
            className="hover:text-gray-600 transition text-xl font-light text-gray-500"
          >
            View Images
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
