import ButtonIcon from "@/components/Global/ButtonIcon";

const Hero = () => {
  return (
    <section className="max-container padding-container pt-14 md:pt-20 lg:pt-24">
      <div className="flex items-center flex-col">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-[#1A1A1A] lg:leading-[81px] capitalize text-center">
          Innovative <span className="text-[#4B0082]">Digital</span> Solutions
          for Every Business
        </h1>
        <p className="my-3 md:my-6 w-[202px] md:w-full text-center text-[8px] text-[#323337] md:text-sm lg:text-xl">
          Blending Creativity and Technical Expertise to Drive Growth and
          Engagement.
        </p>
        <ButtonIcon text="view our portfolio" />
      </div>

      <div className="mt-16 flex items-center justify-center flex-col gap-4 px-6 md:px-9 py-3 md:py-10 lg:py-[90px] border border-solid border-[#E1E1E1] rounded-xl max-w-[1230px] mx-auto">
        <h3 className="text-sm md:text-2xl text-[#4B0082] font-semibold">
          About WeCr8t
        </h3>
        <p className="text-[10px] md:text-xl md:leading-[31.2px] text-center font-light">
          At WeCr8t, we craft stunning, high-quality websites and web
          applications for businesses of all sizes. Our skilled team blends
          creativity and technical expertise to create custom digital solutions
          that help your business grow and engage more customers.We also believe
          in giving back. Through our charity initiatives, we offer free web
          services to deserving small businesses, helping them succeed in the
          digital landscape.
        </p>
      </div>
    </section>
  );
};

export default Hero;
