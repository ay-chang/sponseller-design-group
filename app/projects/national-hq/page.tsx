import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import NationalHeadquarters1 from "@/public/images/national-headquarter/national-hq-1.png";
import NationalHeadquarters2 from "@/public/images/national-headquarter/national-hq-2.png";
import NationalHeadquarters3 from "@/public/images/national-headquarter/national-hq-3.png";
import NationalHeadquarters4 from "@/public/images/national-headquarter/national-hq-4.png";
import NationalHeadquarters5 from "@/public/images/national-headquarter/national-hq-5.png";
import NationalHeadquarters6 from "@/public/images/national-headquarter/national-hq-6.png";
import NationalHeadquarters7 from "@/public/images/national-headquarter/national-hq-7.png";
import NationalHeadquarters8 from "@/public/images/national-headquarter/national-hq-8.png";
import NationalHeadquarters9 from "@/public/images/national-headquarter/national-hq-9.png";
import NationalHeadquarters10 from "@/public/images/national-headquarter/national-hq-10.png";
import NationalHeadquarters11 from "@/public/images/national-headquarter/national-hq-11.png";
import NationalHeadquarters12 from "@/public/images/national-headquarter/national-hq-12.png";
import NationalHeadquarters13 from "@/public/images/national-headquarter/national-hq-13.png";

const NationalHeadquarters = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="National Corporate Headquarters"
        Location="Virginia"
        Completion="2026"
        Program="Corporate Headquarters"
        Description="Located in one of the tallest buildings in the region, the 360-degree views afforded from the top levels of this building were the driver in its adaptive reuse as a national headquarters in Rosslyn, Virginia. Prospects directly across the river to the National Mall and the Georgetown neighborhood in Washington DC were the drivers in the design. The scope involved the renovation of the top level of the building to provide meeting and amenity spaces. The innovative architectural concept uses a series of outwardly focused spaces - a 'room necklace' that provides variously scaled rooms, including a café space for employees. The design embraces natural materials and plantings to integrate nature into the daily experience of employees while also permitting special events and meetings."
        Images={[
          NationalHeadquarters1,
          NationalHeadquarters2,
          NationalHeadquarters3,
          NationalHeadquarters4,
          NationalHeadquarters5,
          NationalHeadquarters6,
          NationalHeadquarters7,
          NationalHeadquarters8,
          NationalHeadquarters9,
          NationalHeadquarters10,
          NationalHeadquarters11,
          NationalHeadquarters12,
          NationalHeadquarters13,
        ]}
      />
    </div>
  );
};

export default NationalHeadquarters;
