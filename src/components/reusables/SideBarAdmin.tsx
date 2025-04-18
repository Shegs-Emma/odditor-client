"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import { IoChevronDownOutline, IoChevronForward } from "react-icons/io5";

interface sidebarAdminProps {
  viewing: (isViewing: string) => void;
}

const SideBarAdmin: FC<sidebarAdminProps> = ({ viewing }) => {
  const [isViewing, setIsViewing] = useState<string>("overview");
  const [isViewingPM, setIsViewingPM] = useState<boolean>(false);

  const handleIsViewing = (currentlyViewing: string) => {
    setIsViewing(currentlyViewing);
    viewing(currentlyViewing);
  };

  return (
    <div className="relative min-h-screen bg-[#BD0A0A] w-[300px] rounded-tr-[24px] rounded-br-[24px] flex flex-col justify-between">
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
            onClick={() => {
              handleIsViewing("overview");
              setIsViewingPM(false);
            }}
            className={`w-full flex p-4 cursor-pointer ${
              isViewing === "overview" ? "bg-[#ffffff]" : ""
            }`}
          >
            {isViewing === "overview" ? (
              <Image
                src="/assets/overview.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/assets/overview_white.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            )}
            <p
              className={`font-normal text-sm ml-4 ${
                isViewing === "overview" ? "text-[#BD0A0A]" : "text-[#ffffff]"
              }`}
            >
              Overview
            </p>
          </div>

          <div
            onClick={() => {
              handleIsViewing("inbox");
              setIsViewingPM(false);
            }}
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
            onClick={() => {
              setIsViewingPM(!isViewingPM);
              handleIsViewing("all");
            }}
            className={`w-full flex p-4 cursor-pointer ${
              isViewing === "painter_management" ? "bg-[#ffffff]" : ""
            }`}
          >
            {isViewing === "painter_management" ? (
              <Image
                src="/assets/painter_management.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/assets/painter_management.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            )}
            <p
              className={`font-normal text-sm ml-4 ${
                isViewing === "painter_management"
                  ? "text-[#BD0A0A]"
                  : "text-[#ffffff]"
              }`}
            >
              Painter Management
            </p>
            {isViewingPM ? (
              <IoChevronDownOutline className="ml-2 flex mt-[.1rem] text-[#FFFFFF]" />
            ) : (
              <IoChevronForward className="ml-2 flex justify-center items-center mt-[.1rem] text-[#FFFFFF]" />
            )}
          </div>

          {isViewingPM && (
            <div className="flex flex-col mb-2">
              <p
                onClick={() => handleIsViewing("all")}
                className={`pl-[5rem] font-normal text-sm py-1 cursor-pointer ${
                  isViewing === "all"
                    ? "bg-[#ffffff] text-[#BD0A0A]"
                    : "text-[#ffffff]"
                }`}
              >
                All Painters
              </p>
              <p
                onClick={() => handleIsViewing("pending")}
                className={`pl-[5rem] font-normal text-sm py-1 cursor-pointer ${
                  isViewing === "pending"
                    ? "bg-[#ffffff] text-[#BD0A0A]"
                    : "text-[#ffffff]"
                }`}
              >
                Pending Verification
              </p>
              <p
                onClick={() => handleIsViewing("active")}
                className={`pl-[5rem] font-normal text-sm py-1 cursor-pointer ${
                  isViewing === "active"
                    ? "bg-[#ffffff] text-[#BD0A0A]"
                    : "text-[#ffffff]"
                }`}
              >
                Active Painters
              </p>
              <p
                onClick={() => handleIsViewing("inactive")}
                className={`pl-[5rem] font-normal text-sm py-1 cursor-pointer ${
                  isViewing === "inactive"
                    ? "bg-[#ffffff] text-[#BD0A0A]"
                    : "text-[#ffffff]"
                }`}
              >
                Inactive Painters
              </p>
            </div>
          )}

          <div
            onClick={() => {
              handleIsViewing("availability");
              setIsViewingPM(false);
            }}
            className={`w-full flex p-4 cursor-pointer ${
              isViewing === "availability" ? "bg-[#ffffff]" : ""
            }`}
          >
            {isViewing === "availability" ? (
              <Image
                src="/assets/availability.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/assets/availability_white.svg"
                alt="avatar_img"
                width={20}
                height={20}
              />
            )}
            <p
              className={`font-normal text-sm ml-4 ${
                isViewing === "availability"
                  ? "text-[#BD0A0A]"
                  : "text-[#ffffff]"
              }`}
            >
              Availability
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

export default SideBarAdmin;
