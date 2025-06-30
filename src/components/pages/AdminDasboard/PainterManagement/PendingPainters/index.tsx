"use client";

import React from "react";
import PendingPainterTable from "../Tables/pendingPainterTable";

const PendingPainters = () => {
  return (
    <div className="md:flex w-[97%] mx-auto rounded-xs shadow-md mt-4 hidden">
      <div className="flex flex-col w-full p-4">
        <div className="flex flex-col">
          <p className="font-bold text-[20px] text-[#000000]">
            Pending Painters
          </p>
          <p className="font-[13px] font-normal text-[#000000] mt-2">
            Here is a list of all pending painters
          </p>
        </div>

        <div className="mt-12">
          <PendingPainterTable />
        </div>
      </div>
    </div>
  );
};

export default PendingPainters;
