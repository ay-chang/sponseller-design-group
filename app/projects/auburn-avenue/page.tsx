import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import AuburnAvenue1 from "@/public/images/auburn-avenue/auburn-avenue-1.png";
import AuburnAvenue2 from "@/public/images/auburn-avenue/auburn-avenue-2.png";

const AuburnAvenue = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="Auburn Avenue"
        Location="Woodmont Triangle District - Bethesda, Maryland"
        Completion="2024"
        Program="210 Residences"
        Description="The unusual architectural form for this project is inspired by its unique
              location. The architects wanted the building to mediate the scale of the
              residential neighborhood to its north and the downtown urban character to its
              south. Beyond merely stepping the building, the design embraces the modular scale
              of the neighborhood as part of its form. A through-block public connection runs
              through the center of the building on the ground level, providing mid-square
              access to a neighborhood park adjacent to the site. The patterned masonry
              surfaces provide a welcoming, approachable palette for the neighborhood."
        Images={[AuburnAvenue1, AuburnAvenue2]}
      />
    </div>
  );
};

export default AuburnAvenue;
