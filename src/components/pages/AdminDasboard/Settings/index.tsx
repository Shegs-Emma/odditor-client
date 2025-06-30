"use client";

import React, { useState } from "react";
import { AiOutlineLock } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import GeneralInfo from "./generalInfo";

const Settings = () => {
  const [isViewing, setIsViewing] = useState("info");

  const handleIsViewing = (currentlyViewing: string) => {
    setIsViewing(currentlyViewing);
  };

  return (
    <div className="hidden md:flex w-[97%] mx-auto flex-col">
      <p className="font-bold text-[20px] text-[#000000] my-6">Settings</p>

      <div className="md:rounded-xs rounded mt-4 px-2 md:p-0 flex border border-[1px] border-[#E3E3E3]">
        <div className="flex flex-col md:border-r-[1px] md:border-r-[#E3E3E3]">
          <div
            onClick={() => {
              handleIsViewing("info");
            }}
            className={`flex w-[311px] py-4 mx-4 mt-4 pl-10 cursor-pointer ${
              isViewing === "info" ? "bg-[#BD0A0A]" : ""
            }`}
          >
            <IoPerson
              className="mr-4"
              color={`${isViewing === "info" ? "#ffffff" : "#666666"}`}
              size={20}
            />
            <p
              className={`text-base ${
                isViewing === "info" ? "text-[#FFFFFF]" : "text-[#666666]"
              }`}
            >
              General Information
            </p>
          </div>

          <div
            onClick={() => {
              handleIsViewing("security");
            }}
            className={`flex w-[311px] py-4 mx-4 mt-4 pl-10 cursor-pointer ${
              isViewing === "security" ? "bg-[#BD0A0A]" : ""
            }`}
          >
            <AiOutlineLock
              className="mr-4"
              color={`${isViewing === "security" ? "#ffffff" : "#666666"}`}
              size={20}
            />
            <p
              className={`text-base ${
                isViewing === "security" ? "text-[#FFFFFF]" : "text-[#666666]"
              }`}
            >
              Security
            </p>
          </div>

          <div
            onClick={() => {
              handleIsViewing("account");
            }}
            className={`flex w-[311px] py-4 mx-4 mt-4 pl-10 cursor-pointer ${
              isViewing === "account" ? "bg-[#BD0A0A]" : ""
            }`}
          >
            <IoPerson
              className="mr-4"
              color={`${isViewing === "account" ? "#ffffff" : "#666666"}`}
              size={20}
            />
            <p
              className={`text-base ${
                isViewing === "account" ? "text-[#FFFFFF]" : "text-[#666666]"
              }`}
            >
              Management Account
            </p>
          </div>
        </div>

        {/* Right side of inbox */}
        <div className="hidden md:flex flex-col w-full px-12 py-4">
          {isViewing === "info" && <GeneralInfo />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
