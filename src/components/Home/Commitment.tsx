import React from "react";
import Button from "../Global/Button";

function Commitment() {
  return (
    <div className="p-[20px] lg:p-[40px_80px] flex items-center justify-center font-manrope  ">
      <div className="border shadow w-full lg:w-[80%] p-[40px_20px] rounded-[10px] flex flex-col items-center justify-center space-y-[20px]">
        <p className="text-primary font-[700] text-[24px] text-center">
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
      </div>
    </div>
  );
}

export default Commitment;
