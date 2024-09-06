import React from "react";
import { HiFire } from "react-icons/hi";

type ButtonProps = {
  text: string;
};
function Button({ text }: ButtonProps) {
  return (
    <div className="flex items-center justify-center gap-2 w-fit cursor-pointer bg-[#4B0082] rounded-[5px] md:rounded-[10px] uppercase px-3 py-1 md:px-8 md:py-4 text-white">
      <HiFire className="icon" color="" />
      <p className="text-[8px] md:text-xl font-light">{text}</p>
    </div>
  );
}

export default Button;
