import ProjectSkeleton from "@/app/components/ProjectSkeleton";
import WisconsinAvenue1 from "@/public/images/7272-wisconsin-avenue/wisconsin-1.png";
import WisconsinAvenue2 from "@/public/images/7272-wisconsin-avenue/wisconsin-2.png";
import WisconsinAvenue3 from "@/public/images/7272-wisconsin-avenue/wisconsin-3.png";
import WisconsinAvenue4 from "@/public/images/7272-wisconsin-avenue/wisconsin-4.png";

const WisconsinAvenue = () => {
  return (
    <div>
      <ProjectSkeleton
        Title="7272 Wisconsin Avenue"
        Location="Bethesda, Maryland"
        Completion="2019"
        Program="Office, Residential, Retail, Transit Station"
        Description="Located on one of the most transit-friendly sites in the Washington metropolitan region, 7272 Wisconsin establishes a high-water mark for design. The program includes class A office, residential, and retail uses built atop a new transit station for metro, light rail, and a regional pedestrian trail. Three separate towers were sculpted to form a series of outdoor spaces and to maximize natural light and views for residents and office workers. A main entry plaza links to transit stations below grade. The innovative design has received awards from the Tall Building Institute and Design Excellence awards program in Montgomery County."
        Images={[WisconsinAvenue1, WisconsinAvenue2, WisconsinAvenue3, WisconsinAvenue4]}
      />
    </div>
  );
};

export default WisconsinAvenue;
