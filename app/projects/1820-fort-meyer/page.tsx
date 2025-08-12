import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import FortMeyer1 from "@/public/images/1820-fort-meyer/fort-meyer-1.png";
import FortMeyer2 from "@/public/images/1820-fort-meyer/fort-meyer-2.png";
import FortMeyer3 from "@/public/images/1820-fort-meyer/fort-meyer-3.png";
import FortMeyer4 from "@/public/images/1820-fort-meyer/fort-meyer-4.png";
import FortMeyer5 from "@/public/images/1820-fort-meyer/fort-meyer-5.png";

const FortMeyer = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="1820 Fort Meyer"
        Location="Rosslyn, Virginia"
        Completion="2028"
        Program="750 Residences, Retail"
        Description="The focus of this redevelopment project was implementing a mid-block public passage as part of a master plan that links the neighborhood to the adjacent transit center. The building forms are designed to maximize natural light along this public passage and scale the buildings appropriately. An undulating, wrinkled façade plane allows for outdoor balconies to be inset into the majority of residences. Green plantings enhance the public realm and are incorporated into the balconies."
        Images={[FortMeyer1, FortMeyer2, FortMeyer3, FortMeyer4, FortMeyer5]}
      />
    </div>
  );
};

export default FortMeyer;
