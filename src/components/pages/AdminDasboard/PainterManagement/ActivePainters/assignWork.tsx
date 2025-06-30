"use client";

import React, { FC } from "react";
import { IoChevronBack } from "react-icons/io5";

interface painterProps {
  viewing: (isViewing: string) => void;
}

const AssignWork: FC<painterProps> = ({ viewing }) => {
  return (
    <div className="flex flex-col w-full mx-auto mt-6 px-4">
      <div className="flex">
        <IoChevronBack onClick={() => viewing("list")} size={30} />
        <p className="text-sm text-[#000000] flex justify-center items-center ml-4">
          Assign Work
        </p>
      </div>

      <div className="flex flex-col mt-4">
        <div className="flex flex-col mt-4">
          <p className="text-lg font-bold text-[#000000] mb-4">
            1. Work Details
          </p>
          <div className="flex flex-col mb-4">
            <p className="text-sm w-full mb-4">Client Name</p>
            <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
              <input
                type="text"
                placeholder="Car Name"
                className="outline-none w-full bg-transparent text-[13px]"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4 mt-2">
            <p className="text-sm w-full mb-4">Car Details</p>
            <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
              <input
                type="text"
                placeholder="Car Name"
                className="outline-none w-full bg-transparent text-[13px]"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4 mt-2">
            <p className="text-sm w-full mb-4">Job Description</p>
            <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
              <textarea
                rows={4}
                cols={12}
                className="outline-none w-full bg-transparent text-[13px]"
              >
                Describe work to be done
              </textarea>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <p className="text-lg font-bold text-[#000000] mb-4">
            2. Schedule Details
          </p>
          <div className="flex w-full justify-between">
            <div className="flex flex-col w-[47%]">
              <p className="text-sm w-full mb-4">Date</p>
              <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                <input
                  type="text"
                  placeholder="Eg. Blue"
                  className="outline-none w-full bg-transparent text-[13px]"
                />
              </div>
            </div>

            <div className="flex flex-col w-[47%]">
              <p className="text-sm w-full mb-4">Time</p>
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
              <p className="text-sm w-full mb-2">Completion Date</p>
              <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                <input
                  type="text"
                  placeholder="Eg. Blue"
                  className="outline-none w-full bg-transparent text-[13px]"
                />
              </div>
            </div>

            <div className="flex flex-col w-[47%]">
              <p className="text-sm w-full mb-2">Completion Time</p>
              <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[5px] px-3 py-4 shadow-sm">
                <input
                  type="text"
                  placeholder="Eg. 1965"
                  className="outline-none w-full bg-transparent text-[13px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-8 flex flex-col">
          <button className="w-full h-[47px] flex justify-center items-center bg-[#BD0A0A] text-sm text-[#ffffff] rounded-[6px] cursor-pointer">
            Submit
          </button>

          <button
            onClick={() => viewing("list")}
            className="w-full h-[47px] flex justify-center items-center text-[#BD0A0A] bg-[rgba(189,10,10,0.2)] text-sm rounded-[6px] cursor-pointer mt-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignWork;
