import React from "react";

function Services() {
  return (
    <div className="font-manrope flex flex-col items-center p-[20px] lg:p-[40px]">
      <div className="flex flex-col items-center">
        <p className="font-[700] text-[16px] lg:text-[24px] text-primary">
          Our Services
        </p>
        <p className="font-[500] text-[12px] lg:text-[16px] text-center text-typography">
          Discover the Range of Expertise and Solutions We Offer to Transform
          Your Business
        </p>
      </div>
      <div className="grid lg:grid-cols-2 w-full lg:w-[80%] mt-[40px] gap-[40px]">
        <div className="p-[10px]  lg:p-[20px] border rounded-[10px]">
          <div className="border lg:h-[63px] h-[30px] w-[30px] lg:w-[63px] rounded-[10px]"></div>
          <p className="mt-[10px] text-[16px] lg:text-[24px] font-[700] text-typography2">
            Website Development
          </p>
          <p className="font-[500] text-typography text-[12px] lg:text-[16px]">
            We offer custom web applications and e-commerce platforms tailored
            to meet your unique business needs. Our team ensures your online
            presence is dynamic, engaging, and effective.
          </p>
        </div>
        <div className="p-[10px] lg:p-[20px] border rounded-[10px]">
          <div className="border lg:h-[63px] h-[30px] w-[30px] lg:w-[63px] rounded-[10px]"></div>
          <p className="mt-[10px] text-[16px] lg:text-[24px] font-[700] text-typography2">
            Portfolio Development
          </p>
          <p className="font-[500] text-typography text-[12px] lg:text-[16px]">
            Our portfolio development services include creating Professional and
            personal portfolios that showcase your skills and projects in a
            visually appealing manner.
          </p>
        </div>
        <div className="p-[10px] lg:p-[20px] border rounded-[10px]">
          <div className="border lg:h-[63px] h-[30px] w-[30px] lg:w-[63px] rounded-[10px]"></div>
          <p className="mt-[10px] text-[16px] lg:text-[24px] font-[700] text-typography2">
            UI/UX Design
          </p>
          <p className="font-[500] text-typography text-[12px] lg:text-[16px]">
            We provide user research and analysis to understand your
            audience&apos;s needs and create visual designs, including logo
            design, that engage and align with your brand.
          </p>
        </div>
        <div className="p-[20px] border rounded-[10px]">
          <div className="border lg:h-[63px] h-[30px] w-[30px] lg:w-[63px] rounded-[10px]"></div>
          <p className="mt-[10px] text-[16px] lg:text-[24px] font-[700] text-typography2">
            Digital Marketing
          </p>
          <p className="font-[500] text-typography text-[12px] lg:text-[16px]">
            At Build With Love, we know that a stunning website is just the
            beginning. To truly thrive in the digital landscape, your business
            needs a strategic and comprehensive digital marketing approach.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
