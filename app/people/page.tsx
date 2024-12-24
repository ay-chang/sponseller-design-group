import PeoplePic from "@/public/images/people.png";
import Image from "next/image";

const People = () => {
  return (
    <div className="mx-12 pb-24">
      {/* Banner */}
      <div className="my-16 text-6xl w-3/4">
        <p>Dedicated professionals committed to creating meaningful architecture.</p>
      </div>

      {/* Main Section */}
      <div className="flex gap-16 mb-16">
        <div className="w-1/2">
          <p className="pb-24 text-2xl text-gray-500">Our People</p>
          <p className="text-3xl leading-normal">
            Sponseller Design Group was founded in the spring of 2024 by principals Robert M.
            Sponseller FAIA, Jennifer Chen AIA, and Huan Chou Chang AIA. Three colleagues that
            have been working together for over 15 years in a previous office in Washington DC.
          </p>
        </div>
        <div className="w-1/2">
          <Image src={PeoplePic} alt="People picture" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Remaining Text*/}
      <div>
        <p className="text-3xl leading-normal w-8/10">
          Robert Sponseller FAIA worked as lead design principal on some of the most
          significant sites in Washington DC and surrounding areas. Huan Chou Chang is an
          experienced project manager with expertise in all phases of design and construction.
          Jennifer Chen is a design team leader guiding the development and realization of
          numerous complex multiple building projects in the region.
        </p>
      </div>
    </div>
  );
};

export default People;
