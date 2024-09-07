/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React from "react";
import Button from "./Button";
import { FiMenu } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const currentPath = usePathname();
  // const ;
  console.log(router);
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex items-center justify-between p-0 lg:p-[20px_30px] border font-manrope sticky bg-white top-0 z-20 shadow">
      <div className="p-[20px] lg:p-0 flex items-center justify-between lg:justify-start w-full lg:w-fit">
        <Link href="/">
          <img src="/logo-pup-light.png" className="w-[150px]" alt="" />
        </Link>
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          <FiMenu className="text-[25px]" />
        </div>
      </div>
      <div className="hidden lg:flex items-center space-x-[40px] mr-[-10%] ">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className={
              currentPath === link.url
                ? "text-[#4B0082] hover:text-primary uppercase text-[14px] lg:text-[16px] font-[600] text-center relative"
                : "uppercase"
            }
          >
            {link.name}
            <div className={
              currentPath === link.url
                ? "bg-[#4B0082] w-full h-[3px] absolute top-[54px] "
                : ""
            } />
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex w-[180px]">
        <Button type="outlined" text="Get Started" fill="#4B0082" />
      </div>

      <div
        className={`${
          open ? "left-0" : "left-[-100%]"
        } lg:hidden fixed top-0 h-screen bg-white w-full p-[20px] transition-all`}
      >
        <div className="flex w-full items-center justify-end">
          <FiPlus
            onClick={() => setOpen(!open)}
            className="text-[30px] rotate-45"
          />
        </div>
        <div className="flex flex-col items-start space-y-[20px]">
          {links.map((link, index) => (
            <Link
              key={index}
              onClick={() => setOpen(!open)}
              href={link.url}
              className={
                currentPath === link.url
                  ? "text-[#4B0082] hover:text-primary uppercase text-[20px] font-[600] text-center"
                  : "uppercase"
              }
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-[20px] w-[180px]">
          <Button type="outlined" text="Get Started" fill="#4B0082" />
        </div>
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
