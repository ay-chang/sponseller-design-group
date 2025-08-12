import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import SignatureSite1 from "@/public/images/signature-site/signature-site-1.png";
import SignatureSite2 from "@/public/images/signature-site/signature-site-2.png";
import SignatureSite3 from "@/public/images/signature-site/signature-site-3.png";
import SignatureSite4 from "@/public/images/signature-site/signature-site-4.png";
import SignatureSite5 from "@/public/images/signature-site/signature-site-5.png";

const SignatureSite = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="Signature Site Reston"
        Location="Reston, Virginia"
        Completion="2017"
        Program="450 Residences, Retail"
        Description="As one of the last sites in the Reston Town Center to develop, the design harkens to the modernism of the more distant context including the Lake Anne development for inspiration. On this prominent edge location the design proposes two towers that anchor the corner forming an urban void between them. The towers include 2-3 story volumes that scale the site to the pedestrian streetscape with innovative townhouse and retail wings. Materials highlight the slender proportions of the towers, articulating their vertical forms."
        Images={[
          SignatureSite1,
          SignatureSite2,
          SignatureSite3,
          SignatureSite4,
          SignatureSite5,
        ]}
      />
    </div>
  );
};

export default SignatureSite;
