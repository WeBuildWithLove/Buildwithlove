import React from "react";
import VisionComponent from "../about/VisionComponent";

import { SERVICES } from "../../../constants";

const Services = () => {
  return (
    <section className="max-container padding-container md:px-9 mt-[40px] md:mt-[100px] lg:mt-[140px]">
      <div className="mt-10 grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-20">
        {SERVICES.map((service) => (
          <VisionComponent
            key={service.text}
            title={service.text}
            description={service.description}
            img={service.image}
            bullets={service.bullets}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
