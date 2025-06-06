"use client";

import React from "react";

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <p className="flex md:hidden font-bold text-lg mx-12 mt-6">Dashboard</p>
      <div className="flex m-12 flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center w-[300px] md:w-[220px] h-[151px] md:h-[130px] rounded-[11px] bg-[#2D3373] mb-6 md:mb-0">
          <p className="font-semibold text-6xl text-[#ffffff] mb-2">8</p>
          <p className="font-normal text-base text-[#ffffff]">
            Active Requests
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[300px] md:w-[220px] h-[151px] md:h-[130px] rounded-[11px] bg-[#4CAF50] mx-0 md:mx-6 mb-6 md:mb-0">
          <p className="font-semibold text-6xl text-[#ffffff] mb-2">5</p>
          <p className="font-normal text-base text-[#ffffff]">
            Completed requests
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[300px] md:w-[220px] h-[151px] md:h-[130px] rounded-[11px] bg-[#FFC107] mb-6 md:mb-0">
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
