import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-full bg-[#D3DCE7] pt-[4rem]">
      <div className="">
        <div className="flex justify-between w-[92%] mx-auto">
          <div className="flex flex-col w-[27%]">
            <h2 className="flex font-bold text-2xl text-[#1A202C]">
              Odditor Logo
            </h2>

            <p className="font-medium text-base text-[#1A202C] my-4">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>

            <div className="flex justify-between w-[9rem]">
              <Image
                src="/assets/fbook.svg"
                alt="avatar_img"
                width={45.6}
                height={45.6}
              />

              <Image
                src="/assets/Twitter.svg"
                alt="avatar_img"
                width={45.6}
                height={45.6}
              />

              <Image
                src="/assets/Instagram.svg"
                alt="avatar_img"
                width={45.6}
                height={45.6}
              />
            </div>
          </div>
          <div className="flex w-[50%] mr-12 justify-between">
            <div className="flex flex-col">
              <p className="font-semibold text-lg text-[#1A202C] mb-8">About</p>
              <p className="font-medium text-sm text-[#1A202C] mb-4">
                How it works
              </p>
              <p className="font-medium text-sm text-[#1A202C] mb-4">
                Featured
              </p>
              <p className="font-medium text-sm text-[#1A202C] mb-4">
                Partnership
              </p>
              <p className="font-medium text-sm text-[#1A202C] mb-4">
                Business Relation
              </p>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold text-lg text-[#1A202C] mb-8">
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
              <p className="font-semibold text-lg text-[#1A202C] mb-8">
                Socials
              </p>
              <p className="font-medium text-sm text-[#1A202C] mb-4">Discord</p>
              <p className="font-medium text-sm text-[#1A202C] mb-4">
                Instagram
              </p>
              <p className="font-medium text-sm text-[#1A202C] mb-4">Twitter</p>
              <p className="font-medium text-sm text-[#1A202C] mb-4">
                Facebook
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-8 border-t-[1px] border-t-[#48628429] w-[92%] mx-auto py-8">
        <div className="flex">
          <p className="font-semibold text-sm text-[#1A202C]">
            ©2025 Odditor. All rights reserved
          </p>
        </div>
        <div className="flex justify-between w-[30%]">
          <p className="font-semibold text-sm text-[#1A202C]">
            Privacy & Policy
          </p>
          <p className="font-semibold text-sm text-[#1A202C]">
            Terms & Condition
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
