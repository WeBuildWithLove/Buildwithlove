import React from "react";
import WhatShot from "./Icons/WhatShot";

type ButtonProps = {
  fill?: string;
  type: "outlined" | "filled";
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

function Button({ type, fill, text, onClick, disabled }: ButtonProps) {
  return (
    <button
    disabled={disabled}
    onClick={onClick}
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

{/* <div
className={`${
  type === "outlined" ? "text-black " : "text-white"
}  flex items-center justify-center gap-5 w-fit cursor-pointer bg-[#4B0082] rounded-sm md:rounded-lg uppercase px-3 py-1 md:px-8 md:py-4`}
>
<WhatShot fill={`${type === "outlined" ? "#1A1A1A" : "#FFFFFF"}`} />
<p className="text-[8px] md:text-xl font-light">{text}</p>
</div> */}

export default Button;
