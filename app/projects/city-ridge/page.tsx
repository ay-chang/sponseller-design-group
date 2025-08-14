import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import CityRidge1 from "@/public/images/city-ridge/city-ridge-1.jpg";
import CityRidge2 from "@/public/images/city-ridge/city-ridge-2.jpg";
import CityRidge3 from "@/public/images/city-ridge/city-ridge-3.jpg";
import CityRidge4 from "@/public/images/city-ridge/city-ridge-4.jpg";
import CityRidge5 from "@/public/images/city-ridge/city-ridge-5.jpg";
import CityRidge6 from "@/public/images/city-ridge/city-ridge-6.jpg";

const CityRidge = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="City Ridge"
        Location="Washington DC"
        Completion="2022"
        Completed={true}
        Program="700 Residences Office, Retail"
        Description="This project began with a masterplan for the densification of a site formerly home to Fannie Mae's headquarters in northwest Washington DC. A series of new, intimate walking streets surround the historic existing building and connect to the adjacent neighborhoods to the north and south. Intimately scaled curb-less streets are defined by the eight new buildings and open spaces that form the public realm. A varied palette of materials provides architectural interest within a distinctly industrial, timeless vocabulary."
        Images={[CityRidge1, CityRidge2, CityRidge3, CityRidge4, CityRidge5, CityRidge6]}
      />
    </div>
  );
};

export default CityRidge;
