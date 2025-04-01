"use client";

import Image from "next/image";
import React from "react";
import { GoChevronDown, GoDotFill, GoSearch, GoTrash } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";

const Inbox = () => {
  return (
    <div className="flex w-[97%] mx-auto rounded-xs shadow-md mt-4">
      <div className="flex flex-col w-[34rem] border-r-[1px] border-r-[#E3E3E3]">
        <div className="flex w-full justify-between py-4 px-2 border-b-[1px] border-b-[#E3E3E3]">
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
              <BsThreeDotsVertical className="ml-auto mt-2" />
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
              <BsThreeDotsVertical className="ml-auto mt-2" />
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
              <BsThreeDotsVertical className="ml-auto mt-2" />
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
              <BsThreeDotsVertical className="ml-auto mt-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side of inbox */}
      <div className="flex flex-col w-full">
        <div className="border-b-[1px] border-b-[#E3E3E3] py-8 px-4">
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

        <div className="flex flex-col py-8 px-4">
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

export default Inbox;
