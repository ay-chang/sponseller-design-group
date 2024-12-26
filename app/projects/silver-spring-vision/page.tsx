import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import SilverSpring1 from "@/public/images/silver-spring/silver-spring-1.png";
import SilverSpring2 from "@/public/images/silver-spring/silver-spring-2.png";
import SilverSpring3 from "@/public/images/silver-spring/silver-spring-3.png";
import SilverSpring4 from "@/public/images/silver-spring/silver-spring-4.png";

const SilverSpring = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="Silver Spring Vision"
        Location="Silver Spring, Maryland"
        Completion="2022"
        Program=""
        Description="Invited by the local jurisdiction to assist in a master plan update, the project involved an urban vision for Silver Spring, Maryland, a close-in Washington DC urban center. Centered on a multi-modal transit hub, this vision adds a much-needed green park over the transit center along with increased pedestrian access to green space and well-defined streets. The plan includes formal strengthening and densification of the adjacent Ripley District neighborhood."
        Images={[SilverSpring1, SilverSpring2, SilverSpring3, SilverSpring4]}
      />
    </div>
  );
};

export default SilverSpring;
