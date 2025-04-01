"use client";

import Image from "next/image";
import React, { FC, useState } from "react";

interface sidebarProps {
  viewing: (isViewing: string) => void;
}

const SideBar: FC<sidebarProps> = ({ viewing }) => {
  const [isViewing, setIsViewing] = useState<string>("dashboard");

  const handleIsViewing = (currentlyViewing: string) => {
    setIsViewing(currentlyViewing);
    viewing(currentlyViewing);
  };

  return (
    <div className="relative min-h-screen bg-[#BD0A0A] w-[250px] rounded-tr-[24px] rounded-br-[24px] flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex justify-center items-center p-6 border-b-[1px] border-b-[#ffffff]">
          <Image
            src="/assets/empty_logo.svg"
            alt="avatar_img"
            width={50}
            height={50}
          />
          <h2 className="font-semibold text-[#ffffff] text-lg ml-4">ODDITOR</h2>
        </div>

        <div className="flex flex-col mt-6">
          <div
            onClick={() => handleIsViewing("dashboard")}
            className={`w-full flex p-4 cursor-pointer ${
              isViewing === "dashboard" ? "bg-[#ffffff]" : ""
            }`}
          >
            {isViewing === "dashboard" ? (
              <Image
                src="/assets/dashboard.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/assets/dashboard_white.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            )}
            <p
              className={`font-normal text-sm ml-4 ${
                isViewing === "dashboard" ? "text-[#BD0A0A]" : "text-[#ffffff]"
              }`}
            >
              Dashboard
            </p>
          </div>

          <div
            onClick={() => handleIsViewing("inbox")}
            className={`w-full flex p-4 cursor-pointer ${
              isViewing === "inbox" ? "bg-[#ffffff]" : ""
            }`}
          >
            {isViewing === "inbox" ? (
              <Image
                src="/assets/inbox.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/assets/inbox_white.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            )}
            <p
              className={`font-normal text-sm ml-4 ${
                isViewing === "inbox" ? "text-[#BD0A0A]" : "text-[#ffffff]"
              }`}
            >
              Inbox
            </p>
          </div>

          <div
            onClick={() => handleIsViewing("profile")}
            className={`w-full flex p-4 cursor-pointer ${
              isViewing === "profile" ? "bg-[#ffffff]" : ""
            }`}
          >
            {isViewing === "profile" ? (
              <Image
                src="/assets/profile.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/assets/profile_white.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            )}
            <p
              className={`font-normal text-sm ml-4 ${
                isViewing === "profile" ? "text-[#BD0A0A]" : "text-[#ffffff]"
              }`}
            >
              Profile
            </p>
          </div>

          <div
            onClick={() => handleIsViewing("service")}
            className={`w-full flex p-4 cursor-pointer ${
              isViewing === "service" ? "bg-[#ffffff]" : ""
            }`}
          >
            {isViewing === "service" ? (
              <Image
                src="/assets/service.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/assets/service_white.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            )}
            <p
              className={`font-normal text-sm ml-4 ${
                isViewing === "service" ? "text-[#BD0A0A]" : "text-[#ffffff]"
              }`}
            >
              Service
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-6 px-2">
        <p className="font-bold text-xs text-[#ffffff]">Terms of Services</p>
        <p className="font-bold text-xs text-[#ffffff] my-2">Privacy Policy</p>
        <p className="font-normal text-xs text-[#D4D4D4] mt-4">
          Copyright (C) 2024 odditor
        </p>
      </div>
    </div>
  );
};

export default SideBar;
