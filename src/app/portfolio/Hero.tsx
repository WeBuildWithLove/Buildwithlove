import ButtonIcon from "@/components/Global/ButtonIcon";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container padding-container pt-14 md:pt-20 lg:pt-24">
      <div className="flex items-center flex-col max-w-[940px] mx-auto gap-3 md:gap-8">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-[#1A1A1A] lg:leading-[81px] capitalize text-center">
          Our Portfolio of <span className="text-[#4B0082]">Excellence</span>
        </h1>
        <p className="md:w-full text-center text-[8px] text-[#323337] md:text-sm lg:text-xl">
          Explore some of the incredible projects we’ve brought to life. From
          small business websites to portfolios for well-known personalities,
          our work speaks for itself.
        </p>

        <Link href="/contact">
          <ButtonIcon text="start project" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
