import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { PORTFOLIO } from "../../../constants";

type PROJECTITEM = {
  project: string;
  description: string;
  image: string;
  link: string;
};

const ProjectItem = ({ project, description, image, link }: PROJECTITEM) => {
  return (
    <div className="flex flex-col-reverse lg:even:flex-row-reverse lg:flex-row">
      <Image
        src={image}
        alt="work-1"
        width={554}
        height={366}
        className="w-full md:w-auto p-6 bg-[#4B0082] rounded-b-xl lg:rounded-br-none lg:rounded-s-xl"
      />
      <div className="bg-[rgba(75,0,128,0.05)] w-full rounded-t-xl lg:rounded-tl-none lg:rounded-e-xl">
        <div className="flex flex-col gap-8 md:max-w-[529px] px-5 md:pl-10 pt-5 md:pt-10">
          <h4 className="text-3xl font-bold">{project}</h4>
          <p className="text-sm">{description}</p>
          <Link
            href={link}
            className="mt-5 md:mt-20 pb-6 flex items-center justify-end gap-2 text-[#4B0082] text-sm font-semibold"
          >
            Go to Project <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

const PortfolioWorks = () => {
  return (
    <section className="max-container padding-container pt-14 md:pt-20 lg:pt-24 mt-24 flex flex-col gap-[50px] lg:gap-[150px]">
      {PORTFOLIO.map((portfolio) => (
        <ProjectItem
          key={portfolio.project}
          project={portfolio.project}
          description={portfolio.description}
          image={portfolio.image}
          link={portfolio.link}
        />
      ))}
    </section>
  );
};

export default PortfolioWorks;
