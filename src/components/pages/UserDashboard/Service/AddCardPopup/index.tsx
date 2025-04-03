"use client";

import Image from "next/image";
import React, { FC } from "react";
import { FaStarOfLife } from "react-icons/fa";

interface VerifyProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCardPopup: FC<VerifyProps> = () => {
  return (
    <div className="mt-4 w-full bg-white rounded-md flex flex-col py-4">
      <div className="w-full flex flex-col items-center justify-center m-[auto]">
        <div className="flex flex-col mb-4 w-full">
          <div className="flex mb-2">
            <p className="font-semibold text-sm text-[#545454]">Card holder</p>
            <FaStarOfLife color="#FF2828" className="w-[5px] h-[5px] mt-1" />
          </div>

          <div className="flex items-center border-[#CFCFCF] bg-transparent border-[1px] rounded-[9px] px-3 py-2 shadow-sm w-full h-[42px]">
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

          <div className="flex items-center border-[#CFCFCF] bg-transparent border-[1px] rounded-[9px] px-3 py-2 shadow-sm w-full h-[42px]">
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

            <div className="flex items-center border-[#CFCFCF] bg-transparent border-[1px] rounded-[9px] px-3 py-2 shadow-sm w-full h-[42px]">
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

            <div className="flex items-center border-[#CFCFCF] bg-transparent border-[1px] rounded-[9px] px-3 py-2 shadow-sm w-full h-[42px]">
              <input
                type="password"
                placeholder="123"
                className="outline-none w-full text-[13px]"
              />
            </div>
          </div>
        </div>

        <div className="flex mt-12 text-[#ffffff] bg-[#000000] justify-center items-center rounded-[9px] py-3 cursor-pointer text-[16px] w-full">
          Add card
        </div>
      </div>
    </div>
  );
};

export default AddCardPopup;
