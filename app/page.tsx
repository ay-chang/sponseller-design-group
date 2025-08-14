"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CoverImage from "../public/images/caroll-creek/caroll-creek-1.jpg";
import CoverImage2 from "../public/images/national-headquarter/national-hq-1.png";
import CoverImage3 from "../public/images/7272-wisconsin-avenue/wisconsin-1.jpg";
import News from "@/app/components/News";

export default function Home() {
  const coverImages = [CoverImage, CoverImage2, CoverImage3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % coverImages.length);
      }, 800);
    }, 10000);

    return () => clearInterval(interval);
  }, [coverImages.length]);

  return (
    <div>
      {/* Cover Image Container */}
      <div className="relative h-[calc(100vh-180px)] sm:h-[calc(100vh-195px)] 2xl:h-[calc(100vh-290px)] mx-4 sm:mx-48 2xl:mx-96 my-8 sm:my-12 2xl:my-24 overflow-hidden">
        {coverImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Cover photo"
            fill
            className={`absolute inset-0 object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            priority
          />
        ))}
      </div>

      {/* News Section */}
      <div>
        <News />
      </div>
    </div>
  );
}
