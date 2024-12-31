import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import Greenbelt1 from "@/public/images/green-belt/green-belt-1.png";
import Greenbelt2 from "@/public/images/green-belt/green-belt-2.png";
import Greenbelt3 from "@/public/images/green-belt/green-belt-3.png";

const Greenbelt = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="Historic Greenbelt Master Plan"
        Location="Greenbelt, Maryland"
        Completion="2024"
        Program="Office, Hotel, Residential, Townhomes"
        Description="The redevelopment of this site references the legacy of the historic Greenbelt Town Center planned during the public works era in the 1930’s. The plan converts a suburban office park and puts the pedestrian and public realm at the center of its densification. A combination of uses is added to the existing office buildings including office, residential, hotel and retail. The plan is street focused and integrates pedestrians and vehicles in a network of streets, green spaces, gardens, and parks."
        Images={[Greenbelt1, Greenbelt2, Greenbelt3]}
      />
    </div>
  );
};

export default Greenbelt;
