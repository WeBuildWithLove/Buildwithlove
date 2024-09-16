/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegCopyright, FaSquareXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <div className="grid gap-y-[20px] p-[20px_30px] font-manrope mt-[50px]">
      <div className="grid  lg:grid-cols-3 gap-[40px]">
        <div className=" ">
          <Link href="/">
            <img src="/logo.png" className="w-[150px]" alt="" />
          </Link>
          <p>
            At WeCr8T, we design and develop stunning, high-quality websites and
            web applications for businesses of all sizes
          </p>
        </div>
        <div>
          <p className="uppercase text-[20px] font-[600]">Contact Us</p>
          <div className="mt-[10px] flex flex-col space-y-[10px]">
            <div className="flex items-center space-x-[10px]">
              <CiMail className="text-[#1A1A1A] text-[20px]" />
              <p className="text-[18px]">contact@wecr8t.xyz</p>
            </div>
            {/* <div className="flex items-center space-x-[10px]">
              <LuPhone className="text-[#1A1A1A] text-[20px]" />
              <p className="text-[18px]">+234 818 588 0532</p>
            </div> */}
          </div>
        </div>
        <div>
          <p className="uppercase text-[20px] font-[600]">Connect With Us</p>
          <div className="mt-[10px] flex flex-col space-y-[10px]">
            <Link
              className="flex items-center space-x-[10px]"
              href="https://www.linkedin.com/company/wecr8t"
              target="_blank"
            >
              <FaLinkedinIn className="text-[#1A1A1A] text-[20px]" />
              <p className="text-[18px]">LinkedIn</p>
            </Link>
            <Link
              className="flex items-center space-x-[10px]"
              href="https://x.com/We_Cr8T"
              target="_blank"
            >
              <FaSquareXTwitter className="text-[#1A1A1A] text-[20px]" />
              <p className="text-[18px]">Twitter(X)</p>
            </Link>
          </div>
        </div>
        {/* <div className="">
          <p className="uppercase text-[20px] font-[600]">
            SUBSCRIBE to our Newsletter
          </p>
          <p>
            Want to stay up to date with news and updates about our product?
            Subscribe.
          </p>
          <div className="flex flex-row lg:flex-col w-full mt-[20px]  lg:space-y-[20px] space-x-[10px] lg:space-x-0">
            <input
              type="text"
              className="w-full h-[40px] lg:h-[50px] px-[10px] rounded-[5px] border outline-none"
            />
            <Button type="filled" fill="#4B0082" text="Subscribe" />
          </div>
        </div> */}
      </div>
      <div className="w-full border-t p-[20px] border-[#CFCFD1] flex items-center justify-center space-x-[5px] mt-[50px]">
        <FaRegCopyright />
        <p className="text-[12px] lg:text-[16px]">
          2024,<span className=" font-bold text-[#4B0082]">WeCr8T.</span>All
          Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
