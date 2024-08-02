import React from "react";
import WhatShot from "./Icons/WhatShot";

type ButtonProps = {
  fill: string;
  type: "outlined" | "filled";
  text: string;
};
function Button({ type, fill, text }: ButtonProps) {
  return (
    <button
      className={`${
        type === "outlined" ? "h-[45px] lg:h-[50px] border text-black border-[#E1E1E1]" : "h-[40px] lg:h-[50px] text-white"
      }  w-full font-manrope flex items-center space-x-[10px]
      } rounded-[8px] justify-center`}
      style={{
        backgroundColor: `${type === "outlined" ? "white" : fill}`,
      }}
    >
      <WhatShot fill={`${type === "outlined" ? "#1A1A1A" : "#FFFFFF"}`} />
      <p className="font-[600] text-[12px] lg:text-[18px] uppercase leading-[30px]">{text}</p>
    </button>
  );
}

export default Button;
