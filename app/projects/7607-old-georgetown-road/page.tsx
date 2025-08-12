import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import OldGeorgetown1 from "@/public/images/7607-old-georgetown/old-georgetown-1.png";
import OldGeorgetown2 from "@/public/images/7607-old-georgetown/old-georgetown-2.png";
import OldGeorgetown3 from "@/public/images/7607-old-georgetown/old-georgetown-3.png";
import OldGeorgetown4 from "@/public/images/7607-old-georgetown/old-georgetown-4.png";
import OldGeorgetown5 from "@/public/images/7607-old-georgetown/old-georgetown-5.png";
import OldGeorgetown6 from "@/public/images/7607-old-georgetown/old-georgetown-6.png";
import OldGeorgetown7 from "@/public/images/7607-old-georgetown/old-georgetown-7.png";

const OldGeorgetown = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="7607 Old Georgetown Road"
        Location="Bethesda, Maryland"
        Completion=""
        Program="Residential, Retail"
        Description="A highly constrained urban site in the heart of this neighborhood required careful planning and massing. The volumes address both the primary arterial and the adjacent curving tree-lined frontage to the east. The architects utilized modest masonry materials and worked with window articulation, pattern, and color to provide design value using conventional construction practices."
        Images={[
          OldGeorgetown1,
          OldGeorgetown2,
          OldGeorgetown3,
          OldGeorgetown4,
          OldGeorgetown5,
          OldGeorgetown6,
          OldGeorgetown7,
        ]}
      />
    </div>
  );
};

export default OldGeorgetown;
