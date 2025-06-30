"use client";

import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";
import SmoothLineChart from "../SmoothLineChart";
import PieChart from "../PieChart";
import CustomLineChart from "../CustomLineChart";

const MobileOverview = () => {
  return (
    <div className="flex w-full md:hidden">
      <div className="flex flex-col w-full">
        <p className="flex md:hidden font-bold text-lg ml-6 md:mx-12 mt-6">
          Overview
        </p>
        <div className="flex flex-col ml-6 my-12 justify-between w-full">
          <div className="flex justify-center items-center w-[85%] h-[169px] rounded-[11px] border-[1px] border-[rgba(189,10,10,0.23)] shadow-lg border mb-4">
            <Image
              src="/assets/overview_icon.svg"
              alt="avatar_img"
              width={60}
              height={60}
            />
            <div className="flex flex-col ml-4">
              <p className="font-bold text-4xl text-[#464255]">120</p>
              <p className="font-normal text-xs text-[#464255]">Active</p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[85%] h-[169px] rounded-[11px] border-[1px] border-[rgba(189,10,10,0.23)] shadow-lg border mb-4">
            <Image
              src="/assets/overview_icon.svg"
              alt="avatar_img"
              width={60}
              height={60}
            />
            <div className="flex flex-col ml-4">
              <p className="font-bold text-4xl text-[#464255]">350</p>
              <p className="font-normal text-xs text-[#464255]">In-Active</p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[85%] h-[169px] rounded-[11px] border-[1px] border-[rgba(189,10,10,0.23)] shadow-lg border mb-4">
            <Image
              src="/assets/overview_icon.svg"
              alt="avatar_img"
              width={60}
              height={60}
            />
            <div className="flex flex-col ml-4">
              <p className="font-bold text-4xl text-[#464255]">50</p>
              <p className="font-normal text-xs text-[#464255]">New sign-ups</p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[85%] h-[169px] rounded-[11px] border-[1px] border-[rgba(189,10,10,0.23)] shadow-lg border mb-4">
            <Image
              src="/assets/overview_icon.svg"
              alt="avatar_img"
              width={60}
              height={60}
            />
            <div className="flex flex-col ml-4">
              <p className="font-bold text-4xl text-[#464255]">200</p>
              <p className="font-normal text-xs text-[#464255]">
                Completed Audits
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center w-[85%] h-[169px] rounded-[11px] border-[1px] border-[rgba(189,10,10,0.23)] shadow-lg border mb-4">
            <Image
              src="/assets/overview_icon.svg"
              alt="avatar_img"
              width={60}
              height={60}
            />
            <div className="flex flex-col ml-4">
              <p className="font-bold text-4xl text-[#464255]">50</p>
              <p className="font-normal text-xs text-[#464255]">
                Pending Audits
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-1 justify-between">
          <div className="w-full h-[351px] border-[1px] border-[rgba(189,10,10,0.23)] rounded-sm mb-4">
            <div className="flex border-b-[1px] border-b-[#EAEBEB] justify-between py-4 px-8">
              <p className="font-semibold text-base text-[#000000]">Revenue</p>
              <div className="flex items-center">
                <p className="font-normal text-[12px] text-[#C6C6C6]">Year</p>
                <p className="font-normal text-[17px] text-[#6C7172] ml-1">
                  2020
                </p>
              </div>
            </div>
            <div className="w-full h-[300px]">
              <SmoothLineChart />
            </div>
          </div>

          <div className="w-full flex h-[228px] border-[1px] border-[rgba(189,10,10,0.23)] rounded-sm mb-4">
            <div>
              <PieChart />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex mb-2">
                <GoDotFill color="#BD0A0A" />
                <p className="text-[10px] text-[#8C97A7] font-normal">
                  Completed Audits
                </p>
                <p className="font-bold text-[12px] text-[#2A2E33] ml-2">60%</p>
              </div>

              <div className="flex">
                <GoDotFill color="#E4ECA2" />
                <p className="text-[10px] text-[#8C97A7] font-normal">
                  Pending Audits
                </p>
                <p className="font-bold text-[12px] text-[#2A2E33] ml-2">40%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mt-12 mb-8">
          <p className="font-normal text-[12px] text-[#000000] ml-6">
            Number of Users
          </p>
          <div className="mt-8 ml-[-1rem]">
            <CustomLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileOverview;
