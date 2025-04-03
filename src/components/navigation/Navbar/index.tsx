"use client";

import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import VerticalDivider from "@/components/reusables/vericalDivider";
import { useRouter } from "next/navigation";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const Navbar = () => {
  const router = useRouter();
  return (
    <div
      className="w-full py-8 pl-12 pr-10 flex justify-between"
      style={{ fontFamily: plusJakartaSans.style.fontFamily }}
    >
      <div className="flex font-bold text-lg text-[#1a202c] w-[20%] font-plus-jk-sans">
        OdditorLogo
      </div>
      <div className="flex w-[80%]">
        <div className="w-full flex justify-between">
          <div className="flex justify-between w-[60%] ml-[15%] mt-1">
            <p className="font-bold text-sm text-[#a82d28]">Home</p>
            <p className="font-semibold text-sm text-[#1a202c]">AboutUs</p>
            <p className="font-semibold text-sm text-[#1a202c]">HowItWorks</p>
            <p className="font-semibold text-sm text-[#1a202c]">Testimonials</p>
            <p className="font-semibold text-sm text-[#1a202c]">ContactUs</p>
          </div>
          <VerticalDivider />
          <div className="flex w-[20%] justify-end">
            <div
              onClick={() => router.push("/signup")}
              className="items-center justify-center flex border rounded-sm border-[#a82d28] w-[82px] py-2 cursor-pointer"
            >
              <p className="font-semibold text-xs text-[#a82d28]">Register</p>
            </div>
            <div
              onClick={() => router.push("/login")}
              className="items-center justify-center flex border rounded-sm border-[#a82d28] bg-[#a82d28] w-[82px] py-2 ml-4 cursor-pointer"
            >
              <p className="font-semibold text-xs text-[#ffffff]">Log In</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
