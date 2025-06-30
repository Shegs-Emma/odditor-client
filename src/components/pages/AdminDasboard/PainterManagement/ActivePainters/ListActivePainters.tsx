"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

interface painterProps {
  viewing: (isViewing: string) => void;
}

interface Painter {
  id: number;
  paintId: string;
  location: string;
  contactInfo: string;
  availability: string;
  avatar: string;
}

const painters: Painter[] = [
  {
    id: 1,
    paintId: "P001",
    location: "Lagos",
    contactInfo: "painteremail@example.com",
    availability: "available",
    avatar: "/assets/mini_dp.svg",
  },
  {
    id: 2,
    paintId: "P002",
    location: "Lagos",
    contactInfo: "painteremail@example.com",
    availability: "available",
    avatar: "/assets/mini_dp.svg",
  },
  {
    id: 3,
    paintId: "P003",
    location: "Lagos",
    contactInfo: "painteremail@example.com",
    availability: "available",
    avatar: "/assets/mini_dp.svg",
  },
  {
    id: 4,
    paintId: "P004",
    location: "Lagos",
    contactInfo: "painteremail@example.com",
    availability: "available",
    avatar: "/assets/mini_dp.svg",
  },
  {
    id: 5,
    paintId: "P005",
    location: "Lagos",
    contactInfo: "painteremail@example.com",
    availability: "available",
    avatar: "/assets/mini_dp.svg",
  },
];

const ListActivePainters: FC<painterProps> = ({ viewing }) => {
  const [expandedId, setExpandedId] = useState<number | null>(1); // default open
  return (
    <div className="w-full px-4 py-6 md:hidden">
      <h2 className="text-xl font-bold mb-6">Active Painters</h2>
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
                    alt={painter.paintId}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <span className="capitalize text-sm font-medium">
                    {painter.paintId}
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
                    <span className="font-medium w-[40%]">Painter ID</span>
                    <span className="text-gray-600 w-[60%]">
                      {painter.paintId}
                    </span>
                  </div>
                  <div className="flex py-1 w-full">
                    <span className="font-medium w-[40%]">Location</span>
                    <span className="text-gray-600 w-[60%]">
                      {painter.location}
                    </span>
                  </div>
                  <div className="flex py-1 w-full">
                    <span className="font-medium w-[40%]">Contact Info</span>
                    <span className="text-gray-600 w-[60%]">
                      {painter.contactInfo}
                    </span>
                  </div>
                  <div className="flex py-1 w-full">
                    <span className="font-medium w-[40%]">Availability</span>
                    <span className="text-gray-600 w-[60%]">
                      {painter.availability}
                    </span>
                  </div>
                  <div className="flex py-2 items-center w-full">
                    <span className="font-medium w-[40%]">Action</span>
                    <div className="flex flex-col gap-3 w-[60%]">
                      <div className="flex mb-1">
                        <div className="w-[94px] h-[30px] bg-[#F0F0F0] text-sm text-[#BD0A0A] flex items-center justify-center mr-2">
                          Delete
                        </div>
                        <div
                          onClick={() => viewing("assign")}
                          className="w-[94px] h-[30px] bg-[#F0F0F0] text-sm text-[#000000] flex items-center justify-center"
                        >
                          Assign work
                        </div>
                      </div>

                      <div className="flex">
                        <div className="w-[76px] h-[30px] bg-[#F0F0F0] text-sm text-[#000000] flex items-center justify-center mr-2">
                          Alert
                        </div>
                        <div className="w-[94px] h-[30px] bg-[#F0F0F0] text-sm text-[#000000] flex items-center justify-center">
                          Deactivate
                        </div>
                      </div>
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

export default ListActivePainters;
