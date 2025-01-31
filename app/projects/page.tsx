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
import FortMeyer from "@/public/images/1820-fort-meyer/fort-meyer-1.png";
import Bethesda from "@/public/images/4747-bethesda-avenue/bethesda-1.png";
import Greenbelt from "@/public/images/green-belt/green-belt-1.png";
import SilverSpring from "@/public/images/silver-spring/silver-spring-1.png";
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
    <div className="cursor-pointer">
      <div className="max-h-100 2xl:max-h-96 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          className="w-full max-h-100 2xl:max-h-96 min-h-44 object-cover hover:scale-98 duration-500"
          loading="lazy"
        />
      </div>
      <p className="text-sm pt-2">{title}</p>
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
      {/* Grid View */}
      <div className="grid grid-cols-3 2xl:grid-cols-5 gap-y-24 gap-x-24 mx-12 my-24 items-center">
        <Card
          href="/projects/city-ridge"
          src={CityRidge}
          alt="City Ridge"
          title="City Ridge"
          subtitle="Office / Residences / Retail"
        />
        <Card
          href="/projects/880-p-street-nw"
          src={PStreet}
          alt="P Street Development"
          title="880 P Street NW"
          subtitle="Mixed-Use Development"
        />
        <Card
          href="/projects/caroll-creek"
          src={CarollCreek}
          alt="Caroll Creek Historic District"
          title="Caroll Creek Historic District"
          subtitle="Residences / Retail"
        />

        <Card
          href="/projects/national-hq"
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
          href="/projects/4747-bethesda-avenue"
          src={Bethesda}
          alt="Bethesda Development"
          title="4747 Bethesda Avenue"
          subtitle="Corporate Headquarters / Retail"
        />
        <Card
          href="/projects/7607-old-georgetown-road"
          src={OldGeorgetown}
          alt="Old Georgetown"
          title="7607 Old Georgetown Road"
          subtitle="Historic Redevelopment"
        />
        <Card
          href="/projects/international-corporate-headquarters"
          src={InternationalHQ}
          alt="International Corporate Headquarters"
          title="International Corporate Headquarters"
          subtitle="Corporate Office"
        />
        <Card
          href="/projects/7272-wisconsin-avenue"
          src={Wisconsin}
          alt="7272 Wisconsin"
          title="7272 Wisconsin Avenue"
          subtitle="Mixed-Use Development"
        />
        <Card
          href="/projects/walter-reed-master-plan"
          src={WalterReed}
          alt="Walter Reed Development"
          title="Walter Reed Master Plan"
          subtitle="Mixed-Use Development"
        />
        <Card
          href="/projects/1820-fort-meyer"
          src={FortMeyer}
          alt="Fort Meyer"
          title="1820 Fort Meyer"
          subtitle="Mixed-Use Development"
        />
        <Card
          href="/projects/union-market"
          src={UnionMarket}
          alt="Union Market"
          title="Union Market"
          subtitle="Residential"
        />
        <Card
          href="/projects/silver-spring-vision"
          src={SilverSpring}
          alt="Silver Spring"
          title="Silver Spring Vision"
          subtitle="Mixed-Use Development"
        />
        <Card
          href="/projects/historic-greenbelt-master-plan"
          src={Greenbelt}
          alt="Greenbelt"
          title="Historic Greenbelt Master Plan"
          subtitle="Office, Hotel, Residential, Townhomes"
        />
      </div>
    </div>
  );
};

export default Projects;
