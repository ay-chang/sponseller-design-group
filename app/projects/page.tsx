import AuburnAvenue from "@/public/images/auburn-avenue/auburn-avenue-1.png";
import CarollCreek from "@/public/images/caroll-creek/caroll-creek-1.png";
import NationalHQ from "@/public/images/national-headquarter/national-hq-1.png";
import CityRidge from "@/public/images/city-ridge/city-ridge-1.png";
import PStreet from "@/public/images/880-p-street/p-street-880-1.png";
import Wisconsin from "@/public/images/7272-wisconsin-avenue/wisconsin-1.png";
import InternationalHQ from "@/public/images/int-corp-hq/international-hq-1.png";
import WalterReed from "@/public/images/walter-reed/walter-reed-1.png";
import UnionMarket from "@/public/images/union-market/union-market-1.png";
import OldGeorgetown from "@/public/images/7607-old-georgetown/old-georgetown-1.png";
import SilverSpring from "@/public/images/silver-spring/silver-spring-1.png";
import Bethesda from "@/public/images/4747-bethesda-avenue/bethesda-1.png";
import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

interface CardProps {
  href?: string;
  src: StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ href = "/", src, alt, title, subtitle }) => {
  const cardContent = (
    <div>
      <div className="h-110 2xl:h-160 w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          className="w-full h-110 xl:h-160 object-cover hover:scale-110 duration-300"
          loading="lazy"
        />
      </div>
      <p className="text-lg py-4">{title}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );

  return (
    <Link href={href}>
      <div className="cursor-pointer">{cardContent}</div>
    </Link>
  );
};

const Projects = () => {
  return (
    <div>
      <div className="mx-12 my-16 text-6xl w-2/3">
        <p>Discover how we transform ideas into architectural statements.</p>
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-2 gap-y-12 gap-x-4 mx-12 mb-24">
        <Card
          src={CityRidge}
          alt="City Ridge"
          title="City Ridge"
          subtitle="Office / Residences / Retail"
        />
        <Card
          href="/projects/caroll-creek"
          src={CarollCreek}
          alt="Caroll Creek Historic District"
          title="Caroll Creek Historic District"
          subtitle="Residences / Retail"
        />
        <Card
          src={NationalHQ}
          alt="National Headquarters"
          title="National Headquarters"
          subtitle="Residences / Retail"
        />
        <Card
          href="/projects/auburn-avenue"
          src={AuburnAvenue}
          alt="Auburn Avenue Residences"
          title="Auburn Avenue"
          subtitle="Residences"
        />
        <Card
          src={PStreet}
          alt="P Street Development"
          title="P Street"
          subtitle="Mixed-Use Development"
        />
        <Card
          src={OldGeorgetown}
          alt="Old Georgetown"
          title="Old Georgetown"
          subtitle="Historic Redevelopment"
        />
        <Card
          src={InternationalHQ}
          alt="International Headquarters"
          title="International Headquarters"
          subtitle="Corporate Office"
        />
        <Card
          src={Wisconsin}
          alt="7272 Wisconsin"
          title="7272 Wisconsin"
          subtitle="Mixed-Use Development"
        />
        <Card
          src={WalterReed}
          alt="Walter Reed Development"
          title="Walter Reed"
          subtitle="Residences / Retail"
        />
        <Card
          src={SilverSpring}
          alt="Silver Spring Residential"
          title="Silver Spring"
          subtitle="Residences / Retail"
        />
        <Card
          src={UnionMarket}
          alt="Union Market"
          title="Union Market"
          subtitle="Commercial / Retail"
        />
        <Card
          src={Bethesda}
          alt="Bethesda Development"
          title="Bethesda"
          subtitle="Corporate Headquarters / Retail"
        />
      </div>
    </div>
  );
};

export default Projects;
