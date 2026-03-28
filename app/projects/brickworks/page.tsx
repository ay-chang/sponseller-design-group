import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import Brickworks1 from "@/public/images/brickworks/brickworks-1.png";
import Brickworks4 from "@/public/images/brickworks/brickworks-4.jpg";
import Brickworks5 from "@/public/images/brickworks/brickworks-5.jpg";
import Brickworks6 from "@/public/images/brickworks/brickworks-6.jpg";
import Brickworks7 from "@/public/images/brickworks/brickworks-7.jpg";

const Brickworks = () => {
    return (
        <div>
            <ProjectSkeleton
                Title="Brickworks"
                Description="Sponseller Design Group have been awarded the master plan and execution of a 40-unit master plan for affordable housing on a 17-acre site in Belington, West Virginia.  The client group is a national partnership focused on providing affordable single-family homes nationally as part of their effort to increase access to housing for all incomes. The architects will work with pre-fabrication manufacturers in the design forward execution of the housing from housing for singles and the elderly, and families."
                Images={[Brickworks1, Brickworks4, Brickworks5, Brickworks6, Brickworks7]}
            />
        </div>
    );
};

export default Brickworks;
