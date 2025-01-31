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
    <div className="flex justify-between w-full mb-6 border-t border-black pt-6">
      {/* Title */}
      <p className="text-xl font-medium pr-8 w-1/3">{title}</p>

      {/* Story Section with "Read More" Toggle */}
      <div className="text-sm w-1/3 relative">
        <p className={`overflow-hidden ${isExpanded ? "line-clamp-none" : "line-clamp-2"}`}>
          {story}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-600 mt-1 text-xs block hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Image */}
      <div className="pl-16">
        <Image src={src} alt={alt} className="h-72 w-96 object-cover" loading="lazy" />
      </div>
    </div>
  );
};

const News = () => {
  return (
    <div className="mx-12 my-24">
      <div className="">
        {/* Title */}
        <h1 className="text-4xl font-medium mb-12">News</h1>

        {/* News Section */}
        <div className="">
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
    </div>
  );
};

export default News;
