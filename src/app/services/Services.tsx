import React from "react";
import VisionComponent from "../about/VisionComponent";
import { BsPersonWorkspace } from "react-icons/bs";
import { SERVICES } from "../../../constants";

const Services = () => {
  return (
    <section className="max-container padding-container md:px-9 mt-[40px] md:mt-[120px] lg:mt-[190px]">
      <div className="flex items-center justify-center flex-col gap-4">
        <h3 className="text-sm md:text-2xl text-[#4B0082] font-semibold">
          Our Services
        </h3>
        <p className="text-[10px] md:text-xl md:leading-[31.2px] text-center font-light">
          Discover the Range of Expertise and Solutions We Offer to Transform
          Your Business
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-20">
        {SERVICES.map((service) => (
          <VisionComponent
            key={service.text}
            title={service.text}
            description={service.description}
            icon={<BsPersonWorkspace className="icon" color="#4B0082" />}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
