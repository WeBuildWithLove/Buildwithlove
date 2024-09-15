"use client";

import React from "react";
import Button from "../Global/Button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// type PropType = {
//   plugins?: AutoplayType[];
// };

// const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
function HomeHero() {
  return (
    <div className="space-y-[20px] lg:space-y-[40px] font-manrope pt-[100px] flex flex-col items-center justify-center">
      <p className="leading-[30px] lg:leading-[75px] font-[800] text-[24px] lg:text-[70px] text-center text-typography2">
        Elevate Your <span className="text-[#4B0082]">Business</span> with{" "}
        <br className="hidden lg:block" /> Stunning Digital Solutions
      </p>
      <p className="text-center text-[12px] lg:text-[16px] px-[10px]">
        Welcome to <span>WeCr8t</span> – where we create beautifully crafted
        websites and full web applications for{" "}
        <br className="hidden lg:block" /> businesses of all sizes. Empower your
        online presence with our expert services.
      </p>
      <div className="w-[160px] lg:w-[220px]">
        <Button type="filled" text="START PROJECT" fill="#4B0082" />
      </div>

      <div className="h-[69px] w-full bg-[#4B0082] mt-[50px] flex items-center justify-center gap-20">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              stopOnFocusIn: false,
            }),
          ]}
          className="px-5 w-full max-w-5xl"
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="flex items-center ">
            <CarouselItem className=" basis-1/2 lg:basis-1/3">
              <div>
                <Image src="/chess.png" alt="chess" width={45} height={60} />
              </div>
            </CarouselItem>
            <CarouselItem className=" basis-1/2 lg:basis-1/3">
                <Image
                  src="/logo-white-dark.png"
                  alt="wecr8t"
                  width={130}
                  height={69}
                />
            </CarouselItem>
            <CarouselItem className="pl-4 basis-1/2 lg:basis-1/3">
              <div>
                <Image src="/white-hod.png" alt="red" width={80} height={60} />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 basis-1/2 lg:basis-1/3">
              <div>
                <Image
                  src="/save-d-bride.png"
                  alt="save-d-bride"
                  width={60}
                  height={60}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4 basis-1/2 lg:basis-1/3">
              <div>
                <Image
                  src="/splash-screen.png"
                  alt="splash"
                  width={80}
                  height={60}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-5 basis-1/2 lg:basis-1/3">
              <div>
                <Image
                  src="/nurtifeed.png"
                  alt="nutrifeed"
                  width={85}
                  height={60}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-5 basis-1/2 lg:basis-1/3">
              <div>
                <Image
                  src="/frameasy.png"
                  alt="frameasy"
                  width={80}
                  height={60}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-5 basis-1/2 lg:basis-1/3">
              <div>
                <Image src="/readr.png" alt="readr" width={60} height={60} />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-4">
              <div>
                <Image
                  src="/gericht.png"
                  alt="gericht"
                  width={55}
                  height={60}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious />
      <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeHero;
