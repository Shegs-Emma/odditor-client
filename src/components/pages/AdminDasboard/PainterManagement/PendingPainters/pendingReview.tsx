"use client";

import React, { FC } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";

interface painterProps {
  viewing: (isViewing: string) => void;
}

const PendingReview: FC<painterProps> = ({ viewing }) => {
  return (
    <div className="flex flex-col w-full mx-auto mt-6 px-4">
      <div className="flex">
        <IoChevronBack onClick={() => viewing("list")} size={30} />
      </div>
      <div className="flex flex-col w-full mt-4">
        <p className="text-sm text-[#848484] italic w-[95%] my-3 mx-[auto] text-center">
          {
            "Please review the painter's submission and select an action to either approve the account or reject it with a reason. Once submitted, the painter will be notified of your decision."
          }
        </p>

        <div className="border border-[1px] border-[#D1D5DB] flex flex-col rounded p-4 mt-6">
          <div className="flex">
            <IoMdRadioButtonOff color="#BD0A0A" size={24} />
            <p className="text-sm text-[#919191] flex justify-center ml-3 items-center">
              Approve
            </p>
          </div>

          <p className="text-xs text-[#919191] mt-2">
            {
              "Tick this box to approve the painter's account. Once approved, the painter will be activated and allowed to provide services on the platform."
            }
          </p>
        </div>

        <div className="border border-[1px] border-[#D1D5DB] flex flex-col rounded p-4 mt-6">
          <div className="flex">
            <IoMdRadioButtonOn color="#BD0A0A" size={24} />
            <p className="text-sm text-[#919191] flex justify-center ml-3 items-center">
              Reject
            </p>
          </div>

          <p className="text-xs text-[#919191] mt-2">
            {
              "Tick this box to reject the painter's account. Please provide a reason for rejection in the text box below. The reason will be sent to the painter as feedback for further action."
            }
          </p>
        </div>

        <textarea
          className="border border-[1px] border-[#D1D5DB] p-4 text-sm text-[#767676] rounded mt-6"
          rows={4}
          cols={33}
        >
          Provide reasons for rejection
        </textarea>

        <div className="mt-6 flex flex-col">
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

export default PendingReview;
