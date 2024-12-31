import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import SilverSpring1 from "@/public/images/silver-spring/silver-spring-1.png";
import SilverSpring2 from "@/public/images/silver-spring/silver-spring-2.png";

const SilverSpring = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="Silver Spring Vision"
        Location="Silver Spring, Maryland"
        Completion="2022"
        Program=""
        Description="Invited by the local jurisdiction to assist in concepts for a master plan update, the project involved an updated urban vision for Silver Spring Maryland, a close in Washington DC urban city center. This proposal adds a much needed green park over the existing transit center along with increased pedestrian access to the transit center with well defined streets. The plan includes formal strengthening and densification of the adjacent Ripley District neighborhood."
        Images={[SilverSpring1, SilverSpring2]}
      />
    </div>
  );
};

export default SilverSpring;
