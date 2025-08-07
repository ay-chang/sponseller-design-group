import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import MarylandMaster1 from "@/public/images/maryland-master/maryland-master-1.png";

const SignatureSite = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="Maryland Master Plan"
        Location="Southern Maryland"
        Completion="2025"
        Program=""
        Description="A new urban mixed-use community is being planned for a former retail center in central Maryland. The site is in an area that is designated to accommodate the community’s future growth needs and assist in meeting affordable housing goals. The forty-acre site is being re-imagined as a walkable urban community to include multiple residential housing types, housing for families and seniors, retail and commercial space. The plan inverts the existing car focused model to a walkable pedestrian focused urban village near a significant transit hub. Road patterns extend and enhance the surrounding street pattern to ensure connectivity. Roadways are planned to accommodate bicycles and ample pedestrian activities. Entitlements and planning for this long term plan include a phasing strategy that ensures the viability of the site as it transitions over time."
        Images={[MarylandMaster1]}
      />
    </div>
  );
};

export default SignatureSite;
