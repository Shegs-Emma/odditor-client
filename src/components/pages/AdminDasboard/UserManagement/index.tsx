"use client";

import React from "react";
import UserManagementTable from "./UserTables";
import { FiUpload } from "react-icons/fi";
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const UserManagement = () => {
  return (
    <div className="hidden md:flex w-[97%] mx-auto rounded-xs shadow-md mt-4">
      <div className="flex flex-col w-full p-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-[20px] text-[#000000]">
              User Management
            </p>
            <p className="font-[13px] font-normal text-[#000000] mt-2">
              Here is a list of all Users
            </p>
          </div>

          <div className="flex">
            <div className="flex px-4 h-[35px] justify-center items-center rounded border border-[1px] border-[#595959]">
              <FiUpload color="#595959" size={20} className="flex mr-2" />
              <p className="text-sm text-[#595959] flex justify-center items-center">
                Export as CSV
              </p>
            </div>

            <div className="flex ml-4 mt-1">
              <p className="font-bold text-[#BD0A0A] text-lg">Filter by</p>
              <IoFilterOutline color="#BD0A0A" size={20} className="ml-4" />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <UserManagementTable />
        </div>

        <div className="flex justify-center items-center my-6">
          <div className="flex">
            <div className="flex justify-center items-center mr-[6rem]">
              <div className="bg-[#BD0A0A] rounded-[50%] w-[31px] h-[31px] flex justify-center items-center">
                <IoIosArrowRoundBack color="#ffffff" size={20} />
              </div>

              <div className="flex bg-[#BD0A0A] rounded px-4 py-2 justify-center items-center ml-4">
                <p className="font-bold text-xs text-[#ffffff] mr-2">
                  Next Page
                </p>
                <IoIosArrowRoundForward color="#ffffff" size={20} />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <p className="text-base text-[#595959] font-normal">Page</p>

              <div className="border border-[1px] border-[#595959] rounded w-[80px] py-1 flex justify-center items-center ml-4">
                <p className="text-base text-[#595959]">4</p>
              </div>

              <p className="text-base text-[#595959] ml-2">of 50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
