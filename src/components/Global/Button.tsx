import React from "react";
import WhatShot from "./Icons/WhatShot";

type ButtonProps = {
  fill?: string;
  type: "outlined" | "filled";
  text: string;
};
function Button({ type, fill, text }: ButtonProps) {
  return (
    <div
      className={`${
        type === "outlined" ? "text-black " : "text-white"
      }  flex items-center justify-center gap-5 w-fit cursor-pointer bg-[#4B0082] rounded-sm md:rounded-lg uppercase px-3 py-1 md:px-8 md:py-4`}
    >
      <WhatShot fill={`${type === "outlined" ? "#1A1A1A" : "#FFFFFF"}`} />
      <p className="text-[8px] md:text-xl font-light">{text}</p>
    </div>
  );
}

export default Button;
