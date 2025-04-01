"use client";

import React from "react";

const Dashboard = () => {
  return (
    <div className="flex w-full">
      <div className="flex m-12">
        <div className="flex flex-col justify-center items-center w-[220px] h-[130px] rounded-[11px] bg-[#2D3373]">
          <p className="font-semibold text-6xl text-[#ffffff] mb-2">8</p>
          <p className="font-normal text-base text-[#ffffff]">
            Active Requests
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[220px] h-[130px] rounded-[11px] bg-[#4CAF50] mx-6">
          <p className="font-semibold text-6xl text-[#ffffff] mb-2">5</p>
          <p className="font-normal text-base text-[#ffffff]">
            Completed requests
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[220px] h-[130px] rounded-[11px] bg-[#FFC107]">
          <p className="font-semibold text-6xl text-[#ffffff] mb-2">10</p>
          <p className="font-normal text-base text-[#ffffff]">
            Total Quotes Requested
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
