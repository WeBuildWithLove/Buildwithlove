import React from "react";
import Button from "../Global/Button";
import Link from "next/link";

const ElevateCard = () => {
  return (
    <div className="max-container padding-container mx-auto flex items-center justify-center my-16 md:my-32">
      <div
        className="border shadow w-[90vw] lg:w-[90vw]  p-[40px_20px] rounded-[10px] flex flex-col items-center justify-center space-y-[10px] lg:space-y-[20px] relative bg-cover bg-center"
        style={{ backgroundImage: "url('/elevatebg.svg')" }}
      >
        <p className="text-white text-center my-3 text-4xl">
          Ready to Elevate Your Digital Presence?
        </p>
        <p className="w-full lg:w-[60%] text-[14px] lg:text-[26px] text-center text-white">
          Let’s bring your vision to life! Contact us today to discuss your
          project and see how we can help you reach your goals.
        </p>
        <Link href="/contact" className="w-[150px] lg:w-[18%]">
          <Button type="outlined" text="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default ElevateCard;
