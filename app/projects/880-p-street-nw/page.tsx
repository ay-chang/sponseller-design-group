import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import PStreet1 from "@/public/images/880-p-street/p-street-880-1.jpg";
import PStreet2 from "@/public/images/880-p-street/p-street-880-2.jpg";
import PStreet3 from "@/public/images/880-p-street/p-street-880-3.jpg";
import PStreet4 from "@/public/images/880-p-street/p-street-880-4.jpg";

const PStreet = () => {
    return (
        <div>
            <ProjectSkeleton
                Title="880 P Street NW"
                Location="Washington DC, Shaw neighborhood"
                Completion="2015"
                Completed={true}
                Designed={true}
                Program="Residential, Retail"
                Description="As the final phase of the City Market at O Street development, this project restores the urban fabric along the Ninth and P street frontages. A series of vertically proportioned volumes face the historic townhomes characteristic of the historic Shaw neighborhood. Upper story setbacks emphasize the scale along the street frontage. Exterior materials include deeply coffered facades in anodized aluminum in combination with softly textured white masonry. Direct entrances from the street are provided along P Street, and outdoor balconies and terraces are incorporated throughout."
                Images={[PStreet1, PStreet2, PStreet3, PStreet4]}
            />
        </div>
    );
};

export default PStreet;
