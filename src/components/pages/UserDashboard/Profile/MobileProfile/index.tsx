"use client";

import Image from "next/image";
import React from "react";
import { MdEdit } from "react-icons/md";

const MobileProfile = () => {
  return (
    <div className="md:hidden flex w-[97%] mx-auto rounded-xs shadow-md mt-4">
      <div className="flex flex-col w-full p-4">
        <p className="flex md:hidden font-bold text-lg my-6">Profile</p>

        <div className="flex flex-col justify-center w-full items-center p-4">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/pp.svg"
              alt="avatar_img"
              width={70}
              height={70}
            />
            <div className="flex flex-col my-4 ml-2">
              <div className="flex">
                <p className="font-semibold text-[20px] text-[#000000]">
                  Mary Johnson
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center border-[1px] border-[#D9D9D9] w-[300px] h-[41px] rounded-[9px] cursor-pointer">
            <MdEdit className="w-[18px] h-[18px]" />
            <p className="text-[18px] ml-2">Edit</p>
          </div>
        </div>

        <div className="flex flex-col w-full justify-between mt-8">
          <div className="flex flex-col w-full">
            <p className="text-lg font-semibold text-[#000000]">
              Personal Information
            </p>

            <div className="flex flex-col w-full my-6">
              <div className="flex w-full justify-between">
                <div className="flex flex-col w-[47%]">
                  <p className="text-base w-full mb-4">First name</p>
                  <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                    <input
                      type="text"
                      placeholder="First name"
                      className="outline-none w-full bg-transparent text-[13px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-[47%]">
                  <p className="text-base w-full mb-4">Last name</p>
                  <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                    <input
                      type="text"
                      placeholder="Last name"
                      className="outline-none w-full bg-transparent text-[13px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex mt-8 flex-col">
                <p className="text-base w-full mb-4">Email Address</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>

              <div className="flex mt-4 flex-col">
                <p className="text-base w-full mb-4">Phone</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[50px] mt-4 bg-[#BD0A0A] rounded-[9px] flex justify-center items-center cursor-pointer">
            <p className="text-base text-[#ffffff] text-center">Save</p>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between my-8">
          <div className="flex flex-col w-full">
            <p className="text-lg font-semibold text-[#000000]">Address</p>

            <div className="flex flex-col w-full my-6">
              <div className="flex flex-col">
                <p className="text-base w-full mb-4">Country</p>
                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                  <input
                    type="text"
                    placeholder="Nigeria"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>

              <div className="flex w-full justify-between mt-8">
                <div className="flex flex-col w-[47%]">
                  <p className="text-base w-full mb-4">City</p>
                  <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                    <input
                      type="text"
                      placeholder="City"
                      className="outline-none w-full bg-transparent text-[13px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-[47%]">
                  <p className="text-base w-full mb-4">State</p>
                  <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                    <input
                      type="text"
                      placeholder="State"
                      className="outline-none w-full bg-transparent text-[13px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex mt-8 flex-col">
                <p className="text-base w-full mb-4">Street Address:</p>

                <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                  <input
                    type="text"
                    placeholder="123 Palm Avenue, 45th Street"
                    className="outline-none w-full bg-transparent text-[13px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[50px] mt-4 bg-[#BD0A0A] rounded-[9px] flex justify-center items-center cursor-pointer">
            <p className="text-base text-[#ffffff] text-center">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProfile;
