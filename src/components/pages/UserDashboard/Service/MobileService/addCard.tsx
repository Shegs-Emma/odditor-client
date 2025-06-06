"use client";

import Image from "next/image";
import React, { FC } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";

interface sidebarProps {
  viewing: (isViewing: string) => void;
}

const AddCard: FC<sidebarProps> = ({ viewing }) => {
  return (
    <div className="mt-4 w-full bg-white rounded-md flex flex-col py-4 px-4">
      <div className="flex flex-col">
        <IoChevronBack onClick={() => viewing("serviceform")} size={30} />
        <p className="flex md:hidden font-bold text-lg my-6">Profile</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center m-[auto]">
        <div className="flex flex-col mb-4 w-full">
          <div className="flex mb-2">
            <p className="font-semibold text-sm text-[#545454]">Card holder</p>
            <FaStarOfLife color="#FF2828" className="w-[5px] h-[5px] mt-1" />
          </div>

          <div className="flex items-center border-[#CFCFCF] bg-transparent border-[1px] rounded-[9px] px-3 py-4 shadow-sm w-full h-[42px]">
            <input
              type="text"
              placeholder="Enter here"
              className="outline-none w-full text-[13px]"
            />
          </div>
        </div>

        <div className="flex flex-col mb-4 w-full">
          <div className="flex mb-2">
            <p className="font-semibold text-sm text-[#545454]">Card number</p>
            <FaStarOfLife color="#FF2828" className="w-[5px] h-[5px] mt-1" />
          </div>

          <div className="flex items-center border-[#CFCFCF] bg-transparent border-[1px] rounded-[9px] px-3 py-4 shadow-sm w-full h-[42px]">
            <input
              type="text"
              placeholder="0000 0000 0000 0000"
              className="outline-none w-full text-[13px]"
            />

            <Image
              src="/assets/visa.svg"
              alt="avatar_img"
              width={66}
              height={20}
            />
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex flex-col mb-4 w-[48%]">
            <div className="flex mb-2">
              <p className="font-semibold text-sm text-[#545454]">
                Expiry date
              </p>
              <FaStarOfLife color="#FF2828" className="w-[5px] h-[5px] mt-1" />
            </div>

            <div className="flex items-center border-[#CFCFCF] bg-transparent border-[1px] rounded-[9px] px-3 py-4 shadow-sm w-full h-[42px]">
              <input
                type="text"
                placeholder="10/24"
                className="outline-none w-full text-[13px]"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4 w-[48%]">
            <div className="flex mb-2">
              <p className="font-semibold text-sm text-[#545454]">CVV</p>
              <FaStarOfLife color="#FF2828" className="w-[5px] h-[5px] mt-1" />
            </div>

            <div className="flex items-center border-[#CFCFCF] bg-transparent border-[1px] rounded-[9px] px-3 py-4 shadow-sm w-full h-[42px]">
              <input
                type="password"
                placeholder="123"
                className="outline-none w-full text-[13px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full justify-end mt-8 w-full">
          <div className="flex w-full h-[53px] rounded-[7px] bg-[#000000] text-[#ffffff] font-normal text-base justify-center items-center cursor-pointer">
            Add Card
          </div>
          <div className="flex w-full h-[53px] rounded-[7px] bg-[#BD0A0A] text-[#ffffff] font-normal text-base justify-center items-center mt-4 cursor-pointer">
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
