import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import IwoJima1 from "@/public/images/iwo-jima/iwo-jima-1.jpg";
import IwoJima2 from "@/public/images/iwo-jima/iwo-jima-2.jpg";
import IwoJima3 from "@/public/images/iwo-jima/iwo-jima-3.jpg";
import IwoJima4 from "@/public/images/iwo-jima/iwo-jima-4.jpg";
import IwoJima5 from "@/public/images/iwo-jima/iwo-jima-5.png";
import IwoJima6 from "@/public/images/iwo-jima/iwo-jima-6.jpg";

const IwoJimaCondominiums = () => {
    return (
        <div>
            <ProjectSkeleton
                Title="Iwo Jima Condominiums"
                Location="Rosslyn, Virginia"
                Completion="Construction 2025 - 2026"
                Designed={true}
                Program="20 residential units"
                Description="Located on axis with and overlooking the National Mall in Washington DC, this site is in close proximity to the memorial grounds. A simple architectural palette of sculptural precast concrete provides the primary enclosure. The building form is a distorted rectangular volume in response to the site and includes integrated outdoor spaces and a rooftop terrace. Units are designed with direct elevator access and connect to private rooftop terraces overlooking the river, Iwo Jima memorial grounds, and Lincoln Memorial. The design embraces the sculptural potential of formed precast concrete as its primary expression using the panel depth to create compelling, variegated shadow lines that vary throughout the day and season depending on orientation."
                Images={[IwoJima1, IwoJima2, IwoJima3, IwoJima4, IwoJima5, IwoJima6]}
            />
        </div>
    );
};

export default IwoJimaCondominiums;
