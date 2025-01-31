"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CoverImage from "../public/images/caroll-creek/caroll-creek-1.png";
import CoverImage2 from "../public/images/national-headquarter/national-hq-1.png";
import CoverImage3 from "../public/images/7272-wisconsin-avenue/wisconsin-1.png";
import News from "@/app/components/News";

export default function Home() {
  // Array of cover images
  const coverImages = [CoverImage, CoverImage2, CoverImage3];

  // State for current image and fade effect
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % coverImages.length);
      }, 800); // Match fade duration with transition
    }, 10000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Cover Image Container */}
      <div className="relative h-[calc(100vh-195px)] mx-48 my-12 overflow-hidden">
        {coverImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Cover photo"
            layout="fill"
            objectFit="cover"
            priority
            className={`absolute inset-0 object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* <About /> */}
      <div>
        <News />
      </div>
    </div>
  );
}
