import React from "react";
import { SERVICES_SEC } from "../../../constants";
import VisionComponent from "@/app/about/VisionComponent";
import Link from "next/link";
import ButtonIcon from "@/components/Global/ButtonIcon";
import Button from "../Global/Button";

const HomeServices = () => {
  return (
    <section className="max-container padding-container md:px-9 mt-[40px] md:mt-[100px] lg:mt-[140px]">
      <div className="flex items-center justify-center flex-col gap-4">
        <h3 className="text-sm md:text-2xl text-[#4B0082] font-semibold">
          Our Services – Helping Your Business Stand Out Online
        </h3>
        <p className="text-[10px] md:text-xl md:leading-[31.2px] text-center font-light">
          We build websites, apps, and brands that help your business grow.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-20">
        {SERVICES_SEC.map((service) => (
          <VisionComponent
            key={service.text}
            title={service.text}
            description={service.description}
            img={service.image}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/services" className="w-[160px] lg:w-[220px]">
          <Button type="filled" text="View All Services" fill="#4B0082" />
        </Link>
      </div>
    </section>
  );
};

export default HomeServices;
