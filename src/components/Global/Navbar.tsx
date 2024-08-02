import Link from "next/link";
import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-[20px_30px] border font-manrope sticky bg-white top-0">
      <div>loll</div>
      <div className="flex items-center space-x-[40px] mr-[-10%]">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="text-typography2 hover:text-primary uppercase  text-[14px] lg:text-[16px] font-[600] text-center"
          >
            {link.name}
          </Link>
        ))}
      </div>
        <div className="w-[180px]">
        <Button type="outlined" text="Get Started" fill="#4B0082" />
      </div>
    </div>
  );
}

export default Navbar;

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
