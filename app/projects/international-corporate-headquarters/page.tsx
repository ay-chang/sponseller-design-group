import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import InternationalHeadquarter1 from "@/public/images/int-corp-hq/international-hq-1.png";
import InternationalHeadquarter2 from "@/public/images/int-corp-hq/international-hq-2.png";
import InternationalHeadquarter3 from "@/public/images/int-corp-hq/international-hq-3.png";
import InternationalHeadquarter4 from "@/public/images/int-corp-hq/international-hq-4.png";

const InternationalHQ = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="International Corporate Headquarters"
        Location="Mclean, Virginia"
        Completion="2026"
        Program="Corporate Headquarters"
        Description='An existing building was adaptively reused and expanded to become the headquarters location of an international organization. The existing and new wings were developed in a modular fashion around an atrium space inserted into the existing building. Plantings and natural light between the "neighborhoods" are part of an overall strategy to bring nature into the building and become part of the everyday work environment. Natural light is brought in through deep clerestories and biophilic inserts that minimize energy used for lighting. On-site energy generation includes geothermal wells and solar panels, providing approximately 60% of the total energy needed annually.'
        Images={[
          InternationalHeadquarter1,
          InternationalHeadquarter2,
          InternationalHeadquarter3,
          InternationalHeadquarter4,
        ]}
      />
    </div>
  );
};

export default InternationalHQ;
