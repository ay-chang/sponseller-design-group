"use client";

import PStreet from "@/public/images/caroll-creek/caroll-creek-3.png";
import Bethesda from "@/public/images/int-corp-hq/international-hq-3.png";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";

interface CardProps {
  href?: string;
  src: StaticImageData;
  alt: string;
  title: string;
  story: string;
}

const Card: React.FC<CardProps> = ({ src, alt, title, story }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full mb-12 border-t border-black pt-6 gap-6">
      {/* Title */}
      <p className="text-lg sm:text-xl font-medium lg:pr-8 lg:w-1/3">{title}</p>

      {/* Story */}
      <div className="text-sm lg:w-1/3 relative">
        <p className={`overflow-hidden ${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}>
          {story}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-600 mt-1 text-xs hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Image */}
      <div className="w-full lg:w-auto">
        <Image
          src={src}
          alt={alt}
          className="w-full lg:w-96 h-64 sm:h-72 object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const News = () => {
  return (
    <div className="mx-4 sm:mx-24 2xl:mx-24 my-16 sm:my-24">
      <div>
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-medium mb-12">News</h1>

        {/* News Items */}
        <Card
          src={PStreet}
          alt="Caroll Creek News"
          title="Carroll Creek receives Historic Preservation Commission Approval"
          story="The Carroll Creek mixed use project located in historic Frederick Maryland has received Level I approval from the Historic Preservation Commission. The site is located in the Frederick Downtown Historic District and is an area designated on the National Register of Historic Places. Level I approval relates to issues of site location and orientation, form and height, and preliminary materials approval. Level II approval will be pursued after Site Plan review with the city of Frederick."
        />
        <Card
          src={Bethesda}
          alt="Int Headquarters new"
          title="Groundbreaking - International Headquarters in Virginia"
          story="Construction has begun on the adaptive reuse and expansion of an existing building to become a private company's international headquarters in Virginia. The project is highly sustainable and includes geothermal wells and rooftop solar panels as part of its on-site energy generation. Project completion is expected in 2026."
        />
      </div>
    </div>
  );
};

export default News;
