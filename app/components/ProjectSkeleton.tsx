"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

const ProjectSkeleton = ({
    Title,
    Location,
    Completion,
    Completed = false,
    Designed = false,
    Program,
    Description,
    Images,
}: {
    Title: string;
    Location: string;
    Completion: string;
    Completed?: boolean;
    Designed?: boolean;
    Program: string;
    Description: string;
    Images: StaticImageData[];
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === Images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="overflow-auto">
            {/* === MOBILE LAYOUT === */}
            <div className="sm:hidden mx-4 my-6">
                {/* Arrows + Frame Count */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                        <button onClick={handlePrev} className="text-black p-2 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M15.75 19.5 8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>
                        <button onClick={handleNext} className="text-black p-2 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="text-sm text-gray-600">
                        {currentIndex + 1} / {Images.length}
                    </div>
                </div>

                {/* Image */}
                <div className="relative w-full h-[300px] overflow-hidden">
                    <div className="relative w-full h-full">
                        {Images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`Project Image ${index + 1}`}
                                className={`absolute inset-0 object-contain transition-opacity duration-700 ${
                                    index === currentIndex
                                        ? "opacity-100 z-10"
                                        : "opacity-0 z-0"
                                }`}
                                fill
                            />
                        ))}
                    </div>
                </div>

                {/* Caption Below Image */}
                <div className="flex justify-between items-center text-sm text-gray-600 font-light mt-6">
                    <div>Read Info Below</div>
                    <div className="font-medium text-black">{Title}</div>
                </div>
            </div>

            {/* === DESKTOP LAYOUT === */}
            <div className="hidden sm:flex flex-col items-center mx-24 2xl:mx-24 2xl:my-24 my-12">
                <div className="flex items-center gap-6">
                    {/* Prev */}
                    <button onClick={handlePrev} className="text-black px-6 py-6 rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M15.75 19.5 8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>

                    {/* Image */}
                    <div className="relative h-[600px] w-[900px] max-w-full">
                        <div className="relative h-full w-full">
                            {Images.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`Project Image ${index + 1}`}
                                    className={`absolute inset-0 object-contain transition-opacity duration-700 ${
                                        index === currentIndex
                                            ? "opacity-100 z-10"
                                            : "opacity-0 z-0"
                                    }`}
                                    fill
                                />
                            ))}
                        </div>
                    </div>

                    {/* Next */}
                    <button onClick={handleNext} className="text-black px-6 py-6 rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>

                {/* Caption Below Image */}
                <div className="relative text-xl font-light text-gray-600 w-full px-4 mt-8 2xl:mt-42">
                    {/* Left */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500">
                        Project Information
                    </div>
                    {/* Center */}
                    <div className="text-center">
                        <h1 className="font-normal text-black">{Title}</h1>
                    </div>
                    {/* Right */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <p>
                            {currentIndex + 1} / {Images.length}
                        </p>
                    </div>
                </div>
            </div>

            {/* === Info Section === */}
            <div
                id="info-section"
                className="mx-4 sm:mx-24 2xl:mx-24 mt-12 2xl:mt-36 min-h-screen"
            >
                {/* Description */}
                <div className="w-full sm:w-9/10 2xl:w-4/5 pb-8">
                    <p className="text-base sm:text-lg font-normal leading-relaxed pb-4">
                        {Description}
                    </p>
                </div>

                {/* Project Details */}
                <div className="w-full sm:w-[40%]">
                    <div className="text-sm text-gray-500 cursor-pointer w-fit">
                        <p>Project Details</p>
                    </div>
                    <div className="pt-4 transition-opacity duration-500 opacity-100">
                        {Location && (
                            <div className="flex pb-2">
                                <p className="text-sm text-gray-500 w-1/2">Location</p>
                                <p className="text-sm font-medium w-1/2">{Location}</p>
                            </div>
                        )}
                        {Completion && (
                            <div className="flex py-2">
                                <p className="text-sm text-gray-500 w-1/2">
                                    {Completed ? "" : "Anticipated"} Completion
                                </p>
                                <p className="text-sm font-medium w-1/2">{Completion}</p>
                            </div>
                        )}
                        {Program && (
                            <div className="py-2 flex">
                                <p className="text-sm text-gray-500 w-1/2">Program</p>
                                <p className="text-sm font-medium w-1/2">{Program}</p>
                            </div>
                        )}
                        {Designed && (
                            <div className="py-2 flex w-8/10">
                                <p className="text-sm text-gray-500">
                                    Designed by Robert M Sponseller FAIA while at SBA
                                    architects
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSkeleton;
