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
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-between p-0 lg:p-[20px_30px] border font-manrope sticky bg-white top-0 z-20 shadow">
      <div className="p-[20px] lg:p-0 flex items-center justify-between lg:justify-start w-full lg:w-fit">
        <Link href="/" className="flex flex-col text-end">
          <img src="/logo.png" className="lg:w-[150px] w-[120px]" alt="Logo" />
          <p className="text-[11px]">Your Vision, Our Craft</p>
        </Link>

        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <FiPlus
              onClick={() => setOpen(!open)}
              className="text-[30px] rotate-45"
            />
          ) : (
            <FiMenu className="text-[25px]" />
          )}
        </div>
      </div>
      <div className="hidden  lg:flex items-center space-x-[40px] mr-[-10%] ">
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
            <div
              className={
                currentPath === link.url
                  ? "bg-[#4B0082] w-full h-[3px] absolute top-[54px] "
                  : ""
              }
            />
          </Link>
        ))}
      </div>
      <Link href="/contact" className="hidden lg:flex w-[180px]">
        <Button type="outlined" text="Get Started" fill="#4B0082" />
      </Link>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "left-0" : "left-[-100%]"
        } lg:hidden fixed top-0 h-screen bg-[#4B0082] w-[80%] p-[20px] transition-all duration-300 ease-in-out`} // Add smooth transition here
      >
        <div className="flex flex-col items-start space-y-[40px]">
          {links.map((link, index) => (
            <Link
              key={index}
              onClick={() => setOpen(!open)}
              href={link.url}
              className={
                currentPath === link.url
                  ? "text-white hover:text-primary uppercase text-[20px] font-[600] text-center"
                  : "uppercase text-white"
              }
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-20">
          <Link href="/contact" className="pt-[20px] w-[180px]">
            <Button type="outlined" text="Get Started" fill="#4B0082" />
          </Link>
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
