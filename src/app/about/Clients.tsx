/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

import Recommendations from "@/components/Global/Recommendations";
import Button from "@/components/Global/Button";

const Clients = () => {
  return (
    <section className="max-container padding-container mt-24 md:mt-48 mb-16 mb:mb-28">
      <div className="border border-solid border-[#E1E1E1] rounded-xl px-8 md:px-32 lg:px-64 py-8 md:py-16 relative max-w-[1080px] mx-auto">
        <Image
          src="/business-deal.svg"
          alt="business-deal"
          width={220}
          height={220}
          className="lg:absolute right-3 top-5 mx-auto"
        />
        <p className="md:max-w-[580px] text-center text-[10px] md:text-xl mx-auto">
          We are <span className="text-[#4B0082]">passionate</span> about
          delivering exceptional digital experiences. Our team specializes in
          creating stunning, high-quality websites and web applications that
          help businesses of all sizes grow and connect with more customers.
        </p>
        <p className="md:max-w-[580px] text-center text-[10px] md:text-2xl mx-auto pt-3 text-[#4B0082]">
          Ready to elevate your business?{" "}
        </p>
        <div className="flex flex-col justify-center mx-auto items-center mt-4 w-[160px] lg:w-[220px]">
          <Button type="filled" text="Start project!" fill="#4B0082" />
        </div>
      </div>
      <div className="mt-14 md:mt-36 mb-9">
        <h3 className="text-sm md:text-2xl text-[#4B0082] font-semibold text-center mb-3">
          What Our Clients Are Saying
        </h3>
        <p className="text-[10px] md:text-xl md:leading-[31.2px] text-center font-light max-w-[854px] mx-auto">
          Our clients' feedback speaks for itself. See how we've helped
          businesses grow, improved their online presence, and created digital
          experiences that drive results.
        </p>
      </div>
      <Recommendations />
    </section>
  );
};

export default Clients;
