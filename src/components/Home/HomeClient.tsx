/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Recommendations from "../Global/Recommendations";

const Clients = () => {
  return (
    <section className="max-container padding-container mb:mb-28 max-w-[1080px] ">
      <div className="mb-9">
        <h3 className="text-sm md:text-2xl text-[#4B0082] font-semibold text-center mb-3">
          What Our Clients Are Saying
        </h3>
        <p className="text-[10px] md:text-xl md:leading-[31.2px] text-center font-light max-w-[854px] mx-auto">
          Our clients' feedback speaks for itself. See how we've helped
          businesses grow, improved their online presence, and created digital
          experiences that drive results.
        </p>
      </div>
      <div className="w-full">
        <Recommendations />
      </div>
    </section>
  );
};

export default Clients;
