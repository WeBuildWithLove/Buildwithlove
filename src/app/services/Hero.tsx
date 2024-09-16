import ButtonIcon from "@/components/Global/ButtonIcon";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container padding-container pt-14 md:pt-20 lg:pt-24">
      <div className="flex items-center flex-col">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-[#1A1A1A] lg:leading-[81px] capitalize text-center">
          A Few Services Executed Exceptionally Well
        </h1>
        <p className="my-3 md:my-6 w-[202px] md:w-full text-center text-[8px] text-[#323337] md:text-sm lg:text-xl">
          We turn your ideas into digital solutions that grow your business.
        </p>
        <Link href="/contact">
          <ButtonIcon text="start project" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
