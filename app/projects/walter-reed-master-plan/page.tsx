import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import WalterReed1 from "@/public/images/walter-reed/walter-reed-1.png";
import WalterReed2 from "@/public/images/walter-reed/walter-reed-2.png";
import WalterReed3 from "@/public/images/walter-reed/walter-reed-3.png";
import WalterReed4 from "@/public/images/walter-reed/walter-reed-4.png";

const WalterReed = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="Walter Reed Master Plan"
        Location="Washington DC"
        Completion=""
        Program="Planning and Adaptive Re-use of 70 acres"
        Description="This master plan was a competition entry for the development of a formerly military hospital campus. The master plan included the adaptive re-use of multiple existing buildings and the formation of multiple new use areas, including a residential neighborhood, a new commercial district with research facilities, and recreational and cultural uses utilizing an expansive natural park area."
        Images={[WalterReed1, WalterReed2, WalterReed3, WalterReed4]}
      />
    </div>
  );
};

export default WalterReed;
