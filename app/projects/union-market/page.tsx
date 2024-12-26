import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import UnionMarket1 from "@/public/images/union-market/union-market-1.png";
import UnionMarket2 from "@/public/images/union-market/union-market-2.png";
import UnionMarket3 from "@/public/images/union-market/union-market-3.png";

const UnionMarket = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="Union Market"
        Location="Silver Spring, Maryland"
        Completion="2018"
        Program="Residential"
        Description="A residential and commercial building were designed as part of an emerging district in northeast Washington DC. The unique architectural approach was a response to the industrial character of the existing warehouse district, long an integral part of the food distribution network of the city. The commercial building is designed to span a new food market that remains operational during construction. The residential building provides four modules that rise above an existing warehouse that is repurposed as a food market."
        Images={[UnionMarket1, UnionMarket2, UnionMarket3]}
      />
    </div>
  );
};

export default UnionMarket;
