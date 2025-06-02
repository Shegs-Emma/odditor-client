"use client";

import React, { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import VerticalDivider from "@/components/reusables/vericalDivider";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const Navbar = () => {
  const router = useRouter();
  const [isShowing, setIsShowing] = useState<boolean>(false);

  return (
    <div
      className="w-full py-4 md:py-8 pl-4 md:pl-12 pr-4 md:pr-10 flex justify-between bg-[#BD0A0A] md:bg-[#ffffff]"
      style={{ fontFamily: plusJakartaSans.style.fontFamily }}
    >
      <div className="flex font-bold text-lg text-[#1a202c] w-[20%] font-plus-jk-sans hidden md:block">
        OdditorLogo
      </div>
      <div className="flex font-bold text-lg text-[#1a202c] w-[20%] font-plus-jk-sans flex md:hidden">
        <Image
          src="/assets/odditor_logo_white.svg"
          alt="avatar_img"
          width={34}
          height={34}
        />
      </div>

      <div className="flex w-[80%] hidden md:block">
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

      <div className="flex md:hidden">
        <FaBars
          className="flex items-center justify-center mt-1"
          color="#ffffff"
          size={20}
          onClick={() => setIsShowing(!isShowing)}
        />
      </div>

      {isShowing && (
        <div className="fixed absolute z-100 w-[95%] flex flex-col">
          <div className="flex justify-between bg-[#ffffff] w-full p-4">
            <div className="flex">
              <Image
                src="/assets/red_logo.svg"
                alt="avatar_img"
                width={34}
                height={34}
              />

              <p className="text-lg text-[#BD0A0A] flex justify-center items-center ml-6 font-semibold">
                ODDITOR
              </p>
            </div>

            <RxCross1
              onClick={() => setIsShowing(!isShowing)}
              color="#BD0A0A"
              size={25}
            />
          </div>
          <div className="bg-[#BD0A0A] p-2 flex flex-col">
            <div className="flex flex-col">
              <div className="flex border-b-[1px] border-b-[#ffffff] pb-2 mb-4">
                <p className="text-sm text-[#ffffff] font-bold">Home</p>
              </div>

              <div className="flex border-b-[1px] border-b-[#ffffff] pb-2  mb-4">
                <p className="text-sm text-[#ffffff] font-bold">About Us</p>
              </div>

              <div className="flex border-b-[1px] border-b-[#ffffff] pb-2  mb-4">
                <p className="text-sm text-[#ffffff] font-bold">How It Works</p>
              </div>

              <div className="flex border-b-[1px] border-b-[#ffffff] pb-2  mb-4">
                <p className="text-sm text-[#ffffff] font-bold">Testimonials</p>
              </div>

              <div className="flex border-b-[1px] border-b-[#ffffff] pb-2  mb-4">
                <p className="text-sm text-[#ffffff] font-bold">Contact Us</p>
              </div>
            </div>

            <div className="flex flex-col mt-[8rem]">
              <button className="w-full bg-[#ffffff] rounded text-sm text-[#BD0A0A] font-semibold flex items-center justify-center p-3 mb-6">
                Login
              </button>

              <button className="w-full border-[#ffffff] border-[1px] rounded text-sm text-[#ffffff] font-semibold flex items-center justify-center p-3">
                Register
              </button>
            </div>

            <div className="flex justify-between w-[7rem] my-6 mx-auto">
              <Image
                src="/assets/white_facebook.svg"
                alt="avatar_img"
                width={7}
                height={14}
              />

              <Image
                src="/assets/white_twitter.svg"
                alt="avatar_img"
                width={16}
                height={16}
              />

              <Image
                src="/assets/white_instagram.svg"
                alt="avatar_img"
                width={16}
                height={16}
              />
            </div>

            <div className="flex flex-col justify-center items-center mt-4 w-full mx-auto">
              <div className="flex mb-4">
                <p className="font-normal text-xs text-[#ffffff]">
                  ©2025 Odditor. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
