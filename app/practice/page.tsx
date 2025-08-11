import PracticePic from "@/public/images/practice.webp";
import Image from "next/image";

const Practice = () => {
  return (
    <div className="mx-4 sm:mx-24 2xl:mx-24 pb-24 2xl:pb-48">
      {/* Banner */}
      <div className="my-12 sm:my-16 text-3xl sm:text-5xl 2xl:text-6xl w-full sm:w-3/4 text-left sm:text-left">
        <p>Our practice blends excellence with lasting client relationships.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
        {/* Image */}
        <div className="w-full sm:w-1/2">
          <Image
            src={PracticePic}
            alt="Practice picture"
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Text */}
        <div className="w-full sm:w-1/2">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold pb-4">Founding</h1>
            <p className="mb-8 text-sm sm:text-md">
              Sponseller Design Group was founded on the premise that design can and should
              positively impact our human experience. We begin every project with a thorough
              design process rooted in the importance of place, respect for the environment and
              design innovation. We are a group of passionate, highly experienced practitioners
              with thirty years&apos; experience on master plans, individual buildings,
              adaptive reuse and historic preservation in the Washington DC area. Our
              principals have successfully worked on the most challenging entitlements sites in
              the region.
            </p>
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-semibold pb-4">Values</h1>
            <p className="mb-8 text-sm sm:text-md">
              We find innovative and unexpected solutions to site and program challenges for
              our clients. We strive for unique solutions in a value-based design process. We
              provide a high level of principal involvement in every phase of the project and
              believe in the power of strong conceptual thinking to carry projects through all
              phases of development. We value an interactive, collaborative design process with
              clients and team members.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
