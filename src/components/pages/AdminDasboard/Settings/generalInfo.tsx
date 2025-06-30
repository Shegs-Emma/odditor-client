"use client";

import Image from "next/image";
import React from "react";

const GeneralInfo = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-2">General Information</h2>
        <p className="text-sm text-gray-500 mb-4">Personal Information</p>
      </div>

      <div className="flex">
        <div className="flex mt-4">
          <Image
            src="/assets/odditor_logo.svg"
            alt="avatar_img"
            width={70}
            height={70}
          />
          <div className="flex flex-col my-auto ml-2">
            <div className="flex">
              <p className="font-semibold text-[13px] text-[#000000]">
                ODDITOR Team
              </p>
            </div>

            <p className="font-normal text-[10px] text-[#7D7D7D] mt-2">Admin</p>
          </div>
        </div>

        <div className="flex justify-center items-center ml-12 mt-2">
          <button className="px-4 h-[45px] flex justify-center items-center bg-[#BD0A0A] text-sm text-[#ffffff] rounded-[6px] cursor-pointer">
            Upload New Photo
          </button>

          <button className="ml-6 h-[45px] px-6 flex justify-center items-center text-[#BD0A0A] bg-[#ffffff] border border-[1px] border-[#BD0A0A] text-sm rounded-[6px] cursor-pointer">
            Delete
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex w-full justify-between mt-8">
          <div className="flex flex-col w-[47%]">
            <p className="text-sm w-full mb-4 font-bold">First Name</p>
            <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
              <input
                type="text"
                placeholder="Eg. Blue"
                className="outline-none w-full bg-transparent text-[13px]"
              />
            </div>
          </div>

          <div className="flex flex-col w-[47%]">
            <p className="text-sm w-full mb-4 font-bold">Last Name</p>
            <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
              <input
                type="text"
                placeholder="Eg. 1965"
                className="outline-none w-full bg-transparent text-[13px]"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between mt-8">
          <div className="flex flex-col w-[47%]">
            <p className="text-sm w-full mb-4 font-bold">Email Address</p>
            <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
              <input
                type="text"
                placeholder="Eg. Blue"
                className="outline-none w-full bg-transparent text-[13px]"
              />
            </div>
          </div>

          <div className="flex flex-col w-[47%]">
            <p className="text-sm w-full mb-4 font-bold">Phone Number</p>
            <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
              <input
                type="text"
                placeholder="Eg. 1965"
                className="outline-none w-full bg-transparent text-[13px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mt-8">
          <p className="text-sm w-full mb-4 font-bold">Bio</p>
          <textarea
            className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm text-[13px]"
            rows={4}
            cols={12}
          >
            Type Here
          </textarea>
        </div>

        <button className="px-4 w-[150px] mt-12 mb-4 h-[45px] flex justify-center items-center bg-[#BD0A0A] text-sm text-[#ffffff] rounded-[6px] cursor-pointer">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default GeneralInfo;
