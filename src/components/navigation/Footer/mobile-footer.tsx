import React from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

const MobileFooter = () => {
  return (
    <div className="md:hidden flex flex-col w-full bg-[#D3DCE7] px-[4rem] py-[2rem]">
      <div className="flex flex-col">
        <div className="flex flex-col">
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

          <p className="font-normal text-sm text-[#1A202C] mt-4">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>

          <div className="flex justify-between w-[9rem] my-6">
            <Image
              src="/assets/black_facebook.svg"
              alt="avatar_img"
              width={11}
              height={23}
            />

            <Image
              src="/assets/black_twitter.svg"
              alt="avatar_img"
              width={25}
              height={25}
            />

            <Image
              src="/assets/black_instagram.svg"
              alt="avatar_img"
              width={26}
              height={26}
            />
          </div>
        </div>

        <div className="flex flex-col w-[50%] mr-12 justify-between">
          <div className="flex flex-col mb-4">
            <p className="font-semibold text-lg text-[#1A202C] mb-4">About</p>
            <p className="font-medium text-sm text-[#1A202C] mb-4">
              How it works
            </p>
            <p className="font-medium text-sm text-[#1A202C] mb-4">Featured</p>
            <p className="font-medium text-sm text-[#1A202C] mb-4">
              Partnership
            </p>
            <p className="font-medium text-sm text-[#1A202C] mb-4">
              Business Relation
            </p>
          </div>

          <div className="flex flex-col mb-4">
            <p className="font-semibold text-lg text-[#1A202C] mb-4">
              Community
            </p>
            <p className="font-medium text-sm text-[#1A202C] mb-4">Events</p>
            <p className="font-medium text-sm text-[#1A202C] mb-4">Blog</p>
            <p className="font-medium text-sm text-[#1A202C] mb-4">Podcast</p>
            <p className="font-medium text-sm text-[#1A202C] mb-4">
              Invite a Friend
            </p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-lg text-[#1A202C] mb-4">Socials</p>
            <p className="font-medium text-sm text-[#1A202C] mb-4">Discord</p>
            <p className="font-medium text-sm text-[#1A202C] mb-4">Instagram</p>
            <p className="font-medium text-sm text-[#1A202C] mb-4">Twitter</p>
            <p className="font-medium text-sm text-[#1A202C] mb-4">Facebook</p>
          </div>
        </div>

        <hr className="b-[1px] b-[#1A202C] my-4" />

        <div className="flex flex-col justify-center items-center mt-4 w-full mx-auto">
          <div className="flex mb-4">
            <p className="font-normal text-xs text-[#1A202C]">
              ©2025 Odditor. All rights reserved
            </p>
          </div>
          <div className="flex justify-center items-center w-full">
            <p className="font-normal text-xs text-[#1A202C]">
              Privacy & Policy
            </p>
            <GoDotFill className="w-[5px] h-[5px] mx-2" color="#1A202C" />
            <p className="font-normal text-xs text-[#1A202C]">
              Terms & Condition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
