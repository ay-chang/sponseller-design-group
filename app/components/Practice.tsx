import People from "@/public/images/people.webp";
import Image from "next/image";

const Practice = () => {
  return (
    <div className="my-28">
      <div className="w-full h-screen bg-light-grey relative flex justify-between items-center px-12">
        {/* Text Section */}
        <p className="w-2/3 pr-12 text-3xl font-medium leading-relaxed">
          Sponseller Design Group was founded on the premise that design can and should
          positively impact our human experience. We begin every project with a thorough design
          process rooted on the importance of place, respect for the environment and design
          innovation.
        </p>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image src={People} alt="People photo" className="h-160 w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Practice;
