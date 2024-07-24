import React from "react";
import WhatShot from "./Icons/WhatShot";

type ButtonProps = {
  fill: string;
  type: "outlined" | "filled";
  text: string
};
function Button({ type, fill, text }: ButtonProps) {
  return (
    <div className={`${type === "outlined" ? "h-[60px] text-black " : "h-[66px] text-white"} w-full font-manrope`}>
      <WhatShot fill={`${type === "outlined" ? "#1A1A1A" : "#FFFFFF"}`}/>
      <p className="font-[600] text-[20px] leading-[30px]">{text}</p>
    </div>
  );
}

export default Button;
