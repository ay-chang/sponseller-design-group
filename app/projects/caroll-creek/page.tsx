import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import CarollCreek1 from "@/public/images/caroll-creek/caroll-creek-1.jpg";
import CarollCreek2 from "@/public/images/caroll-creek/caroll-creek-2.jpg";
import CarollCreek3 from "@/public/images/caroll-creek/caroll-creek-3.jpg";
import CarollCreek4 from "@/public/images/caroll-creek/caroll-creek-4.jpg";
import CarollCreek5 from "@/public/images/caroll-creek/caroll-creek-5.jpg";
import CarollCreek6 from "@/public/images/caroll-creek/caroll-creek-6.jpg";
import CarollCreek7 from "@/public/images/caroll-creek/caroll-creek-7.jpg";

const CarollCreek = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="Caroll Creek"
        Location="Frederick, Maryland"
        Completion="2026"
        Program="230 Residences, Retail"
        Description="Located in a historic district on the National Register of Historic Places, the
            project's design responds to the industrial legacy of its site including a
            former rail station, warehouses, and manufacturing buildings. The site is located
            on the historic Carroll Creek canal and public park. The building concept consists
            of three wings organized around three outdoor courtyards. The material selections
            include clay masonry consistent with the historic context and metal panels that
            recall historic metal roofscapes in Frederick. The program includes retail and
            residential uses."
        Images={[
          CarollCreek1,
          CarollCreek2,
          CarollCreek3,
          CarollCreek4,
          CarollCreek5,
          CarollCreek6,
          CarollCreek7,
        ]}
      />
    </div>
  );
};

export default CarollCreek;
