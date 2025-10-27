import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import RoederCommunity1 from "@/public/images/roeder-community-center/roeder-community-1.png";
import RoederCommunity2 from "@/public/images/roeder-community-center/roeder-community-2.png";
import RoederCommunity3 from "@/public/images/roeder-community-center/roeder-community-3.png";

const RoederCommunityCenter = () => {
    return (
        <div>
            <ProjectSkeleton
                Title="Roeder Community Center"
                Location="Silver Spring, MD"
                Completion="Construction: 2026 - 2027"
                Program=""
                Description="This adaptive re-use project converts an existing parking garage into community office space for a local non-profit organization. This project provides active street-level activity for the first two levels of the building, which is currently structured, and has exposed parking spaces. The project also includes improvements to the public realm including upgrading of the streetscape with new street trees, and planting areas and incorporates plantings integrated into the façade design."
                Images={[RoederCommunity1, RoederCommunity2, RoederCommunity3]}
            />
        </div>
    );
};

export default RoederCommunityCenter;
