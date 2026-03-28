"use client";

import PStreet from "@/public/images/caroll-creek/caroll-creek-3.jpg";
import Bethesda from "@/public/images/int-corp-hq/international-hq-3.png";
import MackenzieGallery from "@/public/images/MackenzieGallery.webp";
import MarsHQ from "@/public/images/mars-hq-construction.jpg";
import CarollCreek from "@/public/images/caroll-creek/caroll-creek-4.jpg";
import Brickworks1 from "@/public/images/brickworks/brickworks-4.jpg";
import Brickworks2 from "@/public/images/brickworks/brickworks-1.png";
import Belington from "@/public/images/Belington.png";
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
                <p
                    className={`overflow-hidden ${
                        isExpanded ? "line-clamp-none" : "line-clamp-3"
                    }`}
                >
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
                    src={Brickworks1}
                    alt="Brick Institute of America Design Award"
                    title="Brick Institute of America Design Award"
                    story="Building F located in the City Ridge neighborhood of Washington DC has been awarded a national design award from the Brick Institute of America. The Gold award cites the unique and careful craftsmanship in the design and detailing for the triangular shaped building. The residential apartment building design features a cantilevered brick screen which combines masonry and concrete to achieve its geometric form."
                />
                <Card
                    src={Brickworks2}
                    alt="BRICKWORKS Master Plan"
                    title="BRICKWORKS Master Plan and Buildings Receive Planning Commission Approval"
                    story="The proposed master plan for a former industrial brickyard area in Historic Frederick Maryland has received approval from the Frederick City Planning Commission. The site is part of a larger master plan community and contains 90 residential townhomes adjacent to a mixed-use center."
                />
                <Card
                    src={Belington}
                    alt="Belington Affordable Housing Master Plan"
                    title="Belington Affordable Housing Master Plan"
                    story="Sponseller Design Group have been awarded the master plan and execution of a 40-unit master plan for affordable housing on a 17-acre site in Belington, West Virginia. The client group is a national partnership focused on providing affordable single-family homes nationally as part of their effort to increase access to housing for all incomes. The architects will work with pre-fabrication manufacturers in the design forward execution of the housing from housing for singles and the elderly, and families."
                />
                <Card
                    src={MarsHQ}
                    alt="International Corporate Headquarters Construction"
                    title="International Corporate Headquarters Construction"
                    story="The International Corporate Headquarters project has completed construction of its new structural framework. Construction completion is expected in spring 2027."
                />
                <Card
                    src={CarollCreek}
                    alt="Caroll Creek"
                    title="Carroll Creek Galleria Receives Planning Commission Approval"
                    story="The proposed design for the residential project located in the downtown historic district of Frederick, Maryland has received approval from the City of Frederick Planning Commission. The project consists of 210 residential units and retail along historic Carroll Creek linear park. Project construction is expected to commence in 2026."
                />
                <Card
                    src={MackenzieGallery}
                    alt="Cross Mackenzie Gallery"
                    title="Cross Mackenzie Gallery"
                    story="Sponseller Design Group is among a select  group of local architects invited to participate in an exhibition at VizArts Gallery in Maryland this Fall. The exhibition focuses on organic formal expressions in architecture and ceramics. Our submission, titled sky vaults documents a current adaptive re-use international headquarters project currently in design development."
                />
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
