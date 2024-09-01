import React from "react";
import Button from "../Global/Button";
import Image from "next/image";

function Commitment() {
  return (
    <div className="p-[20px] lg:p-[50px_60px] flex items-center justify-center font-manrope lg:w-[1300px] mx-auto  ">
      <div className="border shadow w-full lg:w-[90%] p-[40px_20px] rounded-[10px] flex flex-col items-center justify-center space-y-[10px] lg:space-y-[20px] relative">
        <p className="text-primary font-[700] text-[16px] lg:text-[24px] text-center">
          Our Commitment to Charity
        </p>
        <p className="w-full lg:w-[60%] text-[14px] lg:text-[16px] text-center text-typography">
          At BuildWithLove, We believe in giving back to the community. Each
          month, we provide freelancing pages and basic web services to two
          small businesses .This initiative helps them establish a strong online
          presence, contributing to their growth and success. We understand the
          challenges small business face and are here to lend a helping hand.
        </p>
        <div className="w-[150px] lg:w-[18%]">
          <Button type="filled" text="Apply Now" fill="#4B0082" />
        </div>
        <Image
          src="/romance.svg"
          alt="charity"
          width={220}
          height={220}
          className="lg:absolute right-0 bottom-0 mx-auto" />
      </div>
    </div>
  );
}

export default Commitment;
