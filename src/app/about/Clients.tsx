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
    <CarouselItem className="px-7 py-10 flex flex-col gap-4 items-center border border-solid border-[#E1E1E1] rounded-xl basis-3/4 md:basis-1/2 lg:basis-1/3">
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
          creating exceptional digital experiences. We specialize in crafting
          stunning, high-quality websites and web applications that help
          businesses of all sizes grow and engage more customers.
        </p>
      </div>
      <div className="mt-14 md:mt-36 mb-9">
        <h3 className="text-sm md:text-2xl text-[#4B0082] font-semibold text-center mb-3">
          Our Client’s Reviews
        </h3>
        <p className="text-[10px] md:text-xl md:leading-[31.2px] text-center font-light">
          Our client&apos;s feedback is a testament to our dedication, creativity,
          and expertise. Read on to see how we have transformed businesses,
          enhanced online presence, and created seamless digital experiences
          that drive success.
        </p>
      </div>
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
      {/* <div className="mt-7 flex gap-6">
      <IoArrowBackCircleOutline  size={40} color="#999999" className="cursor-pointer" />
      <IoArrowForwardCircleOutline size={40} color="#4B0082" className="cursor-pointer" />
      </div> */}
    </section>
  );
};

export default Clients;
