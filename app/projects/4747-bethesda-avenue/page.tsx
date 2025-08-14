import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import BethesdaAvenue1 from "@/public/images/4747-bethesda-avenue/bethesda-1.jpg";
import BethesdaAvenue2 from "@/public/images/4747-bethesda-avenue/bethesda-2.jpg";
import BethesdaAvenue3 from "@/public/images/4747-bethesda-avenue/bethesda-3.jpg";

const BethesdaAvenue = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="4747 Bethesda Avenue"
        Location="Bethesda Maryland"
        Completion="2018"
        Completed={true}
        Program="Corporate Headquarters, Retail"
        Description="Updates to local zoning ordinances triggered the development of this transit-rich site in Bethesda, Maryland, a suburb of Washington DC. The design responds to the unique character of the neighborhood, providing a transition between the commercial and lower-scaled residential context. The design incorporates a stepped series of volumes that address the heart of the district. The primary exterior material, a patinated bronze panel, uses a scalloped shape to create visual interest with minimal means."
        Images={[BethesdaAvenue1, BethesdaAvenue2, BethesdaAvenue3]}
      />
    </div>
  );
};

export default BethesdaAvenue;
