/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { REVIEWS } from "../../../constants";
// import {
//   IoArrowBackCircleOutline,
//   IoArrowForwardCircleOutline,
// } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type REVIEWITEM = {
  name: string;
  text: string;
  position: string;
  image: string;
};

const ReviewItem = ({ name, position, text, image }: REVIEWITEM) => {
  return (
    <CarouselItem className="px-7 py-10 flex flex-col gap-4 items-center border border-solid border-[#E1E1E1] rounded-xl md:basis-1/2 lg:basis-1/3">
      <Image
        src={image}
        width={87}
        height={87}
        alt={name}
        className="rounded-full"
      />
      <div>
        <h5 className="text-xs md:text-base font-bold">{name}</h5>
        <p className="text-[#4B0082]">{position}</p>
      </div>
      <p className="text-[#5D5F61] text-center">{text}</p>
    </CarouselItem>
  );
};

const Recommendations = () => {
  return (
    <section className="max-container padding-container mb:mb-28">
      <Carousel className="w-full">
        <CarouselContent className="flex gap-10">
          {REVIEWS.map((review) => (
            <ReviewItem
              key={review.name}
              name={review.name}
              text={review.text}
              position={review.position}
              image={review.image}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="border my-16 md:my-40 border-solid border-[#E1E1E1] rounded-xl px-8 md:px-32 lg:px-64 py-8 md:py-16 relative max-w-[1080px] mx-auto">
        <Image
          src="/think.svg"
          alt="business-deal"
          width={220}
          height={220}
          className="lg:absolute right-3 top-5 mx-auto"
        />
        <div>
          <h2 className="text-[#4B0082] text-center my-3 text-4xl">
            Why work with us
          </h2>
          <p className="md:max-w-[580px] text-center text-[10px] md:text-xl mx-auto">
            We’re a team of passionate professionals who deliver innovative
            solutions with a focus on your needs. Our transparent process and
            client-first approach ensure that we meet—and exceed—your
            expectations every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
