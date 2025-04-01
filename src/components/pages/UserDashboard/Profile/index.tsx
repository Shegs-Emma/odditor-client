"use client";

import Image from "next/image";
import React from "react";
import { MdEdit } from "react-icons/md";

const Profile = () => {
  return (
    <div className="flex w-[97%] mx-auto rounded-xs shadow-md mt-4">
      <div className="flex flex-col w-full p-4">
        <div className="flex w-full justify-between items-center border-[1px] border-[#E3E3E3] rounded-[14px] p-4">
          <div className="flex">
            <Image
              src="/assets/pp.svg"
              alt="avatar_img"
              width={70}
              height={70}
            />
            <div className="flex flex-col my-auto ml-2">
              <div className="flex">
                <p className="font-semibold text-[20px] text-[#000000]">
                  Mary Johnson
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center border-[1px] border-[#D9D9D9] w-[90px] h-[41px] rounded-[9px] cursor-pointer">
            <MdEdit className="w-[18px] h-[18px]" />
            <p className="text-[18px] ml-2">Edit</p>
          </div>
        </div>

        <div className="flex w-full justify-between border-[1px] border-[#E3E3E3] rounded-[14px] p-4 mt-8">
          <div className="flex flex-col w-[30rem]">
            <p className="text-lg font-semibold text-[#000000]">
              Personal Information
            </p>

            <div className="flex flex-col w-full my-6">
              <div className="flex">
                <p className="text-base w-[30%]">First name:</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-2 shadow-sm w-[337px] h-[29px]">
                  <input
                    type="text"
                    placeholder="First name"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>

              <div className="flex mt-4">
                <p className="text-base w-[30%]">Last name:</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-2 shadow-sm w-[337px] h-[29px]">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>

              <div className="flex mt-4">
                <p className="text-base w-[30%]">Email Address:</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-2 shadow-sm w-[337px] h-[29px]">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>

              <div className="flex mt-4">
                <p className="text-base w-[30%]">Phone:</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-2 shadow-sm w-[337px] h-[29px]">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100px] h-[35px] bg-[#000000] rounded-[9px] flex justify-center items-center cursor-pointer">
            <p className="text-base text-[#ffffff] text-center">Save</p>
          </div>
        </div>

        <div className="flex w-full justify-between border-[1px] border-[#E3E3E3] rounded-[14px] p-4 mt-8">
          <div className="flex flex-col w-[30rem]">
            <p className="text-lg font-semibold text-[#000000]">Address</p>

            <div className="flex flex-col w-full my-6">
              <div className="flex">
                <p className="text-base w-[30%]">Country:</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-2 shadow-sm w-[337px] h-[29px]">
                  <input
                    type="text"
                    placeholder="Nigeria"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>

              <div className="flex mt-4">
                <p className="text-base w-[30%]">City:</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-2 shadow-sm w-[337px] h-[29px]">
                  <input
                    type="text"
                    placeholder="Kano"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>

              <div className="flex mt-4">
                <p className="text-base w-[30%]">State:</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-2 shadow-sm w-[337px] h-[29px]">
                  <input
                    type="text"
                    placeholder="Kano"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>

              <div className="flex mt-4">
                <p className="text-base w-[30%]">Street Address:</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-2 shadow-sm w-[337px] h-[29px]">
                  <input
                    type="text"
                    placeholder="123 Palm Avenue, 45th Street"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100px] h-[35px] bg-[#000000] rounded-[9px] flex justify-center items-center cursor-pointer">
            <p className="text-base text-[#ffffff] text-center">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
