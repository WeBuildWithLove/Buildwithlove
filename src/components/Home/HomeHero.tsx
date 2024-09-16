"use client";

import React from "react";
import Button from "../Global/Button";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

function HomeHero() {
  return (
    <div className="space-y-[20px] lg:space-y-[40px] font-manrope pt-[100px] flex flex-col items-center justify-center">
      <p className="leading-[30px] lg:leading-[75px] font-[800] text-[24px] lg:text-[70px] text-center text-typography2">
        Transform Your <span className="text-[#4B0082]">Business</span> with{" "}
        <br className="hidden lg:block" /> Stunning Digital Solutions
      </p>

      <p className="text-center text-[12px] lg:text-[16px] px-[10px]">
        At <span>WeCr8t,</span> we build more than just websites – we create
        online experiences that help your business grow.
        <br className="hidden lg:block" />
        Whether you&apos;re a startup, small business, or an established
        company,
        <br className="hidden lg:block" />
        we bring your vision to life and make sure your brand shines online.
      </p>

      <Link href="/contact" className="w-[160px] lg:w-[220px]">
        <Button type="filled" text="START PROJECT" fill="#4B0082" />
      </Link>
      <div className="h-[69px] w-full bg-[#4B0082] mt-[50px] flex justify-center items-center">
        <Marquee pauseOnClick pauseOnHover className=" ">
          <div className="flex items-center gap-[60px]">
            <div className="flex justify-center items-center w-[120px]">
              <Image src="/chess.png" alt="chess" width={60} height={60} />
            </div>
            <div className="flex justify-center items-center w-[120px]">
              <Image
                src="/logo-white-dark.png"
                alt="wecr8t"
                width={150}
                height={69}
              />
            </div>
            <div className="flex justify-center items-center w-[120px]">
              <Image
                src="/white-hod.png"
                alt="white-hod"
                width={100}
                height={60}
              />
            </div>
            <div className="flex justify-center items-center w-[120px]">
              <Image
                src="/save-d-bride.png"
                alt="save-d-bride"
                width={80}
                height={60}
              />
            </div>
            <div className="flex justify-center items-center w-[120px]">
              <Image
                src="/splash-screen.png"
                alt="splash-screen"
                width={100}
                height={60}
              />
            </div>
            <div className="flex justify-center items-center w-[120px]">
              <Image
                src="/nurtifeed.png"
                alt="nurtifeed"
                width={100}
                height={60}
              />
            </div>
            <div className="flex justify-center items-center w-[120px]">
              <Image
                src="/frameasy.png"
                alt="frameasy"
                width={100}
                height={60}
              />
            </div>
            <div className="flex justify-center items-center w-[120px]">
              <Image src="/readr.png" alt="readr" width={65} height={60} />
            </div>
            <div className="flex justify-center items-center w-[120px]">
              <Image src="/gericht.png" alt="gericht" width={60} height={60} />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default HomeHero;
