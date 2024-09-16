import React from "react";
import Button from "../Global/Button";
import Image from "next/image";
import Link from "next/link";

function Commitment() {
  return (
    <div className="max-container padding-container p-[65px] lg:p-[160px] flex items-center justify-center font-manrope mx-auto ">
      <div className="border shadow w-full lg:w-[90%] p-[40px_20px] rounded-[10px] flex flex-col items-center justify-center space-y-[10px] lg:space-y-[20px] relative">
        <p className="text-primary font-[700] text-[16px] lg:text-[24px] text-center">
          Supporting Small Businesses, One Website at a Time
        </p>
        <p className="w-full lg:w-[60%] text-[14px] lg:text-[16px] text-center text-typography">
          At WeCr8T, we believe in giving back. Every month, we offer free web
          services to one small business, helping them build a strong online
          presence and grow. We understand the challenges small businesses face
          and are here to help them succeed.
        </p>
        <Image
          src="/romance.svg"
          alt="charity"
          width={220}
          height={220}
          className="xl:absolute right-0 bottom-0 mx-auto"
        />
        <Link
          className="w-[150px] lg:w-[18%]"
          href="https://forms.gle/H3TpBS64a2CBNUSb9"
          target="_blank"
        >
          <Button type="filled" text="Apply Now" fill="#4B0082" />
        </Link>
      </div>
    </div>
  );
}

export default Commitment;
