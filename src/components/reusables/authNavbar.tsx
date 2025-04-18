"use client";

import React, { FC } from "react";
import { GoSearch, GoChevronDown, GoBell } from "react-icons/go";
import Image from "next/image";

interface NavbarProps {
  isAdmin?: boolean | undefined;
}

const AuthNavbar: FC<NavbarProps> = ({ isAdmin }) => {
  return (
    <div className="w-full flex h-[70px] shadow-md pt-4">
      <div className="flex w-[80%] ml-auto justify-between">
        <div className="flex items-center border-[#eeeeee] border-[1px] rounded-[41px] px-3 py-2 shadow-sm w-[400px] h-[42px]">
          <GoSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-4 outline-none w-full bg-transparent"
          />
        </div>
        <div className="flex justify-center items-center pb-2 w-[18rem] pr-4">
          <div className="border-[2px] border-[#eeeeee] flex h-[41px] flex items-center justify-center rounded-[15px]">
            <Image
              src="/assets/lang.svg"
              alt="avatar_img"
              width={25}
              height={25}
            />
            <GoChevronDown className="text-gray-500 ml-2 pr-1" size={20} />
          </div>
          <div className="flex justify-center items-center mx-2">
            <GoBell className="text-[#C1C1C1] ml-2 pr-1 w-[34px] h-[34px]" />
          </div>

          {!isAdmin ? (
            <div className="flex justify-center items-center">
              <Image
                src="/assets/pp.svg"
                alt="avatar_img"
                width={42}
                height={42}
              />
              <p className="font-semibold text-sm text-[#000000] ml-2">
                Mary Johnson
              </p>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <Image
                src="/assets/odditor_logo.svg"
                alt="avatar_img"
                width={42}
                height={42}
              />
              <div className="flex flex-col">
                <p className="font-semibold text-sm text-[#000000] ml-2">
                  Mary Johnson
                </p>
                <p className="font-normal italic text-xs text-[#727272] ml-2">
                  Admin
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthNavbar;
