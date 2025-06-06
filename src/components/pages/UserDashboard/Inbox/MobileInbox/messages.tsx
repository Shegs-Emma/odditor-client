"use client";

import Image from "next/image";
import React, { FC } from "react";
import { GoChevronDown, GoDotFill, GoSearch, GoTrash } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";

interface sidebarProps {
  viewing: (isViewing: string) => void;
}

const MobileInboxMessages: FC<sidebarProps> = ({ viewing }) => {
  return (
    <div
      onClick={() => viewing("detail")}
      className="flex w-[97%] mx-auto md:rounded-xs md:shadow-md mt-4 px-2 md:p-0 md:hidden"
    >
      <div className="flex flex-col w-full md:w-[34rem] md:border-r-[1px] md:border-r-[#E3E3E3]">
        <div className="my-4 md:hidden flex justify-between">
          <p className="flex font-bold text-lg">Inbox</p>
          <GoSearch className="text-[#000000] mr-6" size={20} />
        </div>
        <div className="md:flex hidden w-full justify-between py-4 px-2 border-b-[1px] border-b-[#E3E3E3]">
          <div className="flex">
            <p className="font-semibold text-sm text-[#000000]">Newest</p>
            <GoChevronDown className="text-gray-500 ml-2 pr-1" size={20} />
          </div>

          <div className="flex w-[40%] justify-center items-center">
            <GoSearch className="text-[#000000] mr-6" />

            <div className="flex">
              <GoTrash color="#9D9D9D" />
              <p className="font-semibold text-sm text-[#626262] ml-2">
                Delete
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-4 px-2 border-b-[1px] border-b-[#E3E3E3]">
          <div className="flex justify-between">
            <div className="flex">
              <Image
                src="/assets/odditor_logo.svg"
                alt="avatar_img"
                width={45}
                height={45}
              />
              <div className="flex flex-col my-auto ml-2">
                <div className="flex">
                  <p className="font-semibold text-[13px] text-[#000000]">
                    Booking Confirmations
                  </p>
                  <GoDotFill
                    color="#4DB3FF"
                    className="w-[15px] h-[15px] flex my-auto"
                  />
                </div>

                <p className="font-normal text-[11px] text-[#959595]">
                  Your booking painters on.......
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-normal text-[10px] text-[#7D7D7D]">
                23 October, 09:25am
              </p>
              <BsThreeDotsVertical className="ml-auto mt-2 md:block hidden" />
            </div>
          </div>
        </div>

        <div className="flex flex-col py-4 px-2 border-b-[1px] border-b-[#E3E3E3]">
          <div className="flex justify-between">
            <div className="flex">
              <Image
                src="/assets/odditor_logo.svg"
                alt="avatar_img"
                width={45}
                height={45}
              />
              <div className="flex flex-col my-auto ml-2">
                <div className="flex">
                  <p className="font-semibold text-[13px] text-[#000000]">
                    Booking Confirmations
                  </p>
                  <GoDotFill
                    color="#4DB3FF"
                    className="w-[15px] h-[15px] flex my-auto"
                  />
                </div>

                <p className="font-normal text-[11px] text-[#959595]">
                  Your booking painters on.......
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-normal text-[10px] text-[#7D7D7D]">
                23 October, 09:25am
              </p>
              <BsThreeDotsVertical className="ml-auto mt-2 md:block hidden" />
            </div>
          </div>
        </div>

        <div className="flex flex-col py-4 px-2 border-b-[1px] border-b-[#E3E3E3]">
          <div className="flex justify-between">
            <div className="flex">
              <Image
                src="/assets/odditor_logo.svg"
                alt="avatar_img"
                width={45}
                height={45}
              />
              <div className="flex flex-col my-auto ml-2">
                <div className="flex">
                  <p className="font-semibold text-[13px] text-[#000000]">
                    Booking Confirmations
                  </p>
                  <GoDotFill
                    color="#4DB3FF"
                    className="w-[15px] h-[15px] flex my-auto"
                  />
                </div>

                <p className="font-normal text-[11px] text-[#959595]">
                  Your booking painters on.......
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-normal text-[10px] text-[#7D7D7D]">
                23 October, 09:25am
              </p>
              <BsThreeDotsVertical className="ml-auto mt-2 md:block hidden" />
            </div>
          </div>
        </div>

        <div className="flex flex-col py-4 px-2 border-b-[1px] border-b-[#E3E3E3]">
          <div className="flex justify-between">
            <div className="flex">
              <Image
                src="/assets/odditor_logo.svg"
                alt="avatar_img"
                width={45}
                height={45}
              />
              <div className="flex flex-col my-auto ml-2">
                <div className="flex">
                  <p className="font-semibold text-[13px] text-[#000000]">
                    Booking Confirmations
                  </p>
                  <GoDotFill
                    color="#4DB3FF"
                    className="w-[15px] h-[15px] flex my-auto"
                  />
                </div>

                <p className="font-normal text-[11px] text-[#959595]">
                  Your booking painters on.......
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-normal text-[10px] text-[#7D7D7D]">
                23 October, 09:25am
              </p>
              <BsThreeDotsVertical className="ml-auto mt-2 md:block hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileInboxMessages;
