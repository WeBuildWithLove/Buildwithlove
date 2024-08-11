import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TEAMS } from "../../../constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type TEAMITEM = {
  name: string;
  desc: string;
  position: string;
  twitter: string;
  linkedin: string;
  image: string;
};

const TeamItem = ({
  name,
  desc,
  position,
  twitter,
  linkedin,
  image,
}: TEAMITEM) => {
  return (
    <div className="max-w-[390px]">
      <Image
        src={image}
        className="grayscale"
        alt={name}
        width={390}
        height={434}
      />
      <div className="flex justify-between mt-4 items-center">
        <h3 className="text-sm md:text-xl font-semibold">{name}</h3>
        <div className="flex gap-2">
          <Link href={linkedin}>
            <FaLinkedinIn color="#4B0082" size={18} />
          </Link>
          <Link href={twitter}>
            <FaSquareXTwitter color="#4B0082" size={18} />
          </Link>
        </div>
      </div>
      <p className="text-[#4B0082] text-xs md:text-[18px] pt-3">{position}</p>
      <p className="text-[#1A1A1A] text-[10px] md:text-base pt-2">{desc}</p>
    </div>
  );
};
const TeamItemMobile = ({
  name,
  desc,
  position,
  twitter,
  linkedin,
  image,
}: TEAMITEM) => {
  return (
    <CarouselItem className="max-w-[390px]">
      <Image
        src={image}
        className="grayscale"
        alt={name}
        width={390}
        height={434}
      />
      <div className="flex justify-between mt-4 items-center">
        <h3 className="text-sm md:text-xl font-semibold">{name}</h3>
        <div className="flex gap-2">
          <Link href={linkedin}>
            <FaLinkedinIn color="#4B0082" size={18} />
          </Link>
          <Link href={twitter}>
            <FaSquareXTwitter color="#4B0082" size={18} />
          </Link>
        </div>
      </div>
      <p className="text-[#4B0082] text-xs md:text-[18px] pt-3">{position}</p>
      <p className="text-[#1A1A1A] text-[10px] md:text-base pt-2">{desc}</p>
    </CarouselItem>
  );
};

const MeetTheTeam = () => {
  return (
    <section className="max-container padding-container pt-14 md:pt-20 lg:pt-24">
      <div className="text-center">
        <h2 className="text-[#4B0082] text-xl md:text-4xl font-bold">
          Meet The Team
        </h2>
        <p className="text-[10px] md:text-base pt-1 md:pt-3">
          The Creative Minds Behind Our Success
        </p>
      </div>
      <div className="hidden mt-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-20">
        {TEAMS.map((team) => (
          <TeamItem
            key={team.name}
            name={team.name}
            desc={team.description}
            position={team.position}
            linkedin={team.linkedin}
            twitter={team.twitter}
            image={team.image}
          />
        ))}
      </div>
      <Carousel className="w-full block md:hidden mt-6">
        <CarouselContent>
          {TEAMS.map((team) => (
            <TeamItemMobile
              key={team.name}
              name={team.name}
              desc={team.description}
              position={team.position}
              linkedin={team.linkedin}
              twitter={team.twitter}
              image={team.image}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default MeetTheTeam;
