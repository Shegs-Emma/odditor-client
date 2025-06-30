"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

interface painterProps {
  viewing: (isViewing: string) => void;
}

interface Painter {
  id: number;
  name: string;
  submittedOn: string;
  docsSubmitted: string;
  avatar: string;
}

const painters: Painter[] = [
  {
    id: 1,
    name: "Lindsey Stroud",
    submittedOn: "Nov 7, 2024",
    docsSubmitted: "4 Documents",
    avatar: "/assets/mini_dp.svg",
  },
  {
    id: 2,
    name: "Sarah brown",
    submittedOn: "Nov 7, 2024",
    docsSubmitted: "4 Documents",
    avatar: "/assets/mini_dp.svg",
  },
  {
    id: 3,
    name: "Micheal Owen",
    submittedOn: "Nov 7, 2024",
    docsSubmitted: "4 Documents",
    avatar: "/assets/mini_dp.svg",
  },
  {
    id: 4,
    name: "Mary Jane",
    submittedOn: "Nov 7, 2024",
    docsSubmitted: "4 Documents",
    avatar: "/assets/mini_dp.svg",
  },
  {
    id: 5,
    name: "Peter dodle",
    submittedOn: "Nov 7, 2024",
    docsSubmitted: "4 Documents",
    avatar: "/assets/mini_dp.svg",
  },
];

const ListPendingPainters: FC<painterProps> = ({ viewing }) => {
  const [expandedId, setExpandedId] = useState<number | null>(1); // default open
  return (
    <div className="w-full px-4 py-6 md:hidden">
      <h2 className="text-xl font-bold mb-6">Pending Painters</h2>
      <p className="text-sm text-gray-500 mb-4">
        Here is a list of pending painters
      </p>

      <div className="border border-[1px] border-[#D1D5DB] rounded-md divide-y">
        {/* Header */}
        <div className="flex items-center px-4 py-2 font-semibold text-sm">
          <input type="checkbox" className="mr-3" />
          <span>Name</span>
        </div>

        {/* Painters List */}
        {painters.map((painter) => {
          const isExpanded = expandedId === painter.id;

          return (
            <div key={painter.id}>
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <Image
                    src={painter.avatar}
                    alt={painter.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <span className="capitalize text-sm font-medium">
                    {painter.name}
                  </span>
                </div>
                {painter.id ? (
                  <button
                    onClick={() =>
                      setExpandedId(isExpanded ? null : painter.id)
                    }
                  >
                    {isExpanded ? <IoChevronDown /> : <IoChevronForward />}
                  </button>
                ) : (
                  <IoChevronForward />
                )}
              </div>

              {isExpanded && painter.id && (
                <div className="px-4 py-3 text-sm border-[#D1D5DB] border-t-[1px]">
                  <div className="flex py-1 w-full">
                    <span className="font-medium w-[40%]">Submitted On</span>
                    <span className="text-gray-600 w-[60%]">
                      {painter.submittedOn}
                    </span>
                  </div>
                  <div className="flex py-1 w-full">
                    <span className="font-medium w-[40%]">Docs Submitted</span>
                    <span className="text-gray-600 w-[60%]">
                      {painter.docsSubmitted}
                    </span>
                  </div>
                  <div className="flex py-2 items-center w-full">
                    <span className="font-medium w-[40%]">Action</span>
                    <div className="flex gap-3 w-[60%]">
                      <p
                        onClick={() => viewing("review")}
                        className="text-sm underline text-[#1877F2]"
                      >
                        Review
                      </p>
                      <p className="text-sm underline text-[#0AAB50]">
                        Download
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListPendingPainters;
