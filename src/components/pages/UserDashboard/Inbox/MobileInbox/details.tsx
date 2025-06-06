"use client";

import Image from "next/image";
import React, { FC } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoTrash } from "react-icons/go";
import { ImAttachment } from "react-icons/im";
import { IoChevronBack } from "react-icons/io5";

interface sidebarProps {
  viewing: (isViewing: string) => void;
}

const MobileInboxDetail: FC<sidebarProps> = ({ viewing }) => {
  return (
    <div className="flex flex-col w-full mx-auto mt-6 px-4">
      <div className="flex">
        <IoChevronBack onClick={() => viewing("messages")} size={30} />
      </div>
      <div className="flex flex-col w-full mt-4">
        <div className="border-b-[1px] border-b-[#E3E3E3] py-4">
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
                    ODDITOR Team
                  </p>
                </div>

                <p className="font-normal text-[10px] text-[#7D7D7D]">
                  23 October, 09:25am
                </p>
              </div>
            </div>

            <BsThreeDotsVertical className="ml-auto mt-2" />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-[13px] text-[#7B7B7B] mt-4 mb-2">
              Subject:
              <span className="text-[#000000] ml-2">Booking Confirmations</span>
            </p>

            <div className="flex flex-col font-normal text-[13px] text-[#000000]">
              <p className="my-2">Dear Sam,</p>
              <p className="my-2">
                Your booking with white painter has been confirmed for 09
                November 2024 at 02:00pm. The service location is Lagos stand
                no. 245 . Please contact the painter directly if you need to
                make changes.
              </p>
              <p className="my-2">Thank you for using ODDITOR platform.</p>
              <p className="my-2">Please see attached quotation.</p>
            </div>
          </div>

          <div className="flex mt-12">
            <div className="flex">
              <ImAttachment color="#000000" className="w-[16px] h-[16px]" />
              <p className="font-normal text-xs text-[#000000] ml-2">
                ODDITOR_QUOTATION.pdf
              </p>
            </div>
            <p className="font-semibold text-xs text-[#192F5D] ml-12">
              Download
            </p>
          </div>
        </div>

        <div className="flex flex-col py-8 mt-12">
          <div className="flex justify-between w-full">
            <div className="flex">
              <Image
                src="/assets/pp.svg"
                alt="avatar_img"
                width={45}
                height={45}
              />
              <div className="flex flex-col my-auto ml-2">
                <div className="flex">
                  <p className="font-semibold text-[13px] text-[#000000]">
                    Mary Johnson
                  </p>
                </div>

                <p className="font-normal text-[10px] text-[#7D7D7D]">
                  23 October, 09:25am
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <GoTrash color="#9D9D9D" />
              <p className="font-semibold text-sm text-[#626262] ml-2">
                Delete
              </p>
            </div>
          </div>

          <div className="flex w-full mt-8">
            <textarea
              id="message"
              rows={8}
              className="w-full rounded-lg border border-gray-300 p-3 text-[#767676] focus:border-blue-500 focus:ring-blue-500 text-[10px]"
              placeholder="Write a reply..."
            ></textarea>
          </div>

          <div className="flex my-6">
            <ImAttachment color="#000000" className="w-[16px] h-[16px]" />
          </div>

          <div className="mt-2">
            <button className="w-[121px] h-[47px] flex justify-center items-center bg-[#BD0A0A] text-lg text-[#ffffff] rounded-[6px] cursor-pointer">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileInboxDetail;
