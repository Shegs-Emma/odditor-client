"use client";

import React from "react";
import ActivePainterTable from "../Tables/activePainterTable";

const ActivePainters = () => {
  return (
    <div className="flex w-[97%] mx-auto rounded-xs shadow-md mt-4">
      <div className="flex flex-col w-full p-4">
        <div className="flex flex-col">
          <p className="font-bold text-[20px] text-[#000000]">
            Active Painters
          </p>
          <p className="font-[13px] font-normal text-[#000000] mt-2">
            Here is a list of all active painters
          </p>
        </div>

        <div className="mt-12">
          <ActivePainterTable />
        </div>
      </div>
    </div>
  );
};

export default ActivePainters;
