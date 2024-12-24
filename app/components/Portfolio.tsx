"use client";

import Link from "next/link";
import AuburnAvenue from "@/public/images/auburn-avenue/auburn-avenue-1.png";
import CarollCreek from "@/public/images/caroll-creek/caroll-creek-1.png";
import NationalHQ from "@/public/images/national-headquarter/national-hq-1.png";
import CityRidge from "@/public/images/city-ridge/city-ridge-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="mt-6 mb-24">
      <div className="mx-12">
        <p className="text-7xl pb-16">Featured Projects</p>
      </div>

      <div className="-ml-[622px]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          slidesPerView={2.5} // Show 2 slides fully and part of the neighboring slides
          spaceBetween={-380} // Adjust spacing between slides
          observer={true} // Observes changes to the Swiper container
          observeParents={true} // Observes changes to the parent container
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            {/* Image 1 */}
            <Link href="/projects/city-ridge">
              <div>
                <div className="w-[655px] h-[430px]">
                  <Image
                    src={CityRidge}
                    alt="City Ridge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg py-4">City Ridge</p>
                <p className="tex-sm text-gray-500">Office / Residences / Retail</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            {/* Image 2 */}
            <Link href="/projects/caroll-creek">
              <div>
                <div className="w-[655px] h-[430px]">
                  <Image
                    src={CarollCreek}
                    alt="Caroll Creek"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg py-4">Caroll Creek</p>
                <p className="tex-sm text-gray-500">Residences / Retail</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            {/* Image 3 */}
            <Link href="/projects/national-hq">
              <div>
                <div className="w-[655px] h-[430px] shrink-0">
                  <Image
                    src={NationalHQ}
                    alt="National HQ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg py-4">National Headquarters</p>
                <p className="tex-sm text-gray-500">Residences / Retail</p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            {/* Image 4 */}
            <Link href="/projects/auburn-avenue">
              <div>
                <div className="w-[655px] h-[430px] shrink-0">
                  <Image
                    src={AuburnAvenue}
                    alt="Auburn Avenue"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg py-4">Auburn Avenue</p>
                <p className="tex-sm text-gray-500">Residences</p>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
