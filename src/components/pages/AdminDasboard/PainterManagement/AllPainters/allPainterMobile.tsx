"use client";

import { useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";
import Image from "next/image";

interface Painter {
  id: number;
  name: string;
  email: string;
  status: string;
  availability: string;
  avatar: string;
}

const painters: Painter[] = [
  {
    id: 1,
    name: "Lindsey Stroud",
    email: "lindsey.stroud@gmail.com",
    status: "Active",
    availability: "Available",
    avatar: "/assets/mini_dp.svg",
  },
  {
    id: 2,
    name: "Sarah brown",
    email: "sarahbrown@gmail.com",
    status: "Active",
    availability: "Available",
    avatar: "/assets/mini_dp.svg",
  },
  {
    id: 3,
    name: "Micheal Owen",
    email: "michaelowen@gmail.com",
    status: "All",
    availability: "Available",
    avatar: "/assets/mini_dp.svg",
  },
  {
    id: 4,
    name: "Mary Jane",
    email: "maryjane@gmail.com",
    status: "Pending",
    availability: "Not-Available",
    avatar: "/assets/mini_dp.svg",
  },
  {
    id: 5,
    name: "Peter dodle",
    email: "peterdodle@gmail.com",
    status: "Inactive",
    availability: "Available",
    avatar: "/assets/mini_dp.svg",
  },
];

export default function AllPainterMobile() {
  const [expandedId, setExpandedId] = useState<number | null>(1); // default open

  return (
    <div className="w-full px-4 py-6 md:hidden">
      <h2 className="text-xl font-bold mb-6">All Painters</h2>
      <p className="text-sm text-gray-500 mb-4">
        Here is a list of all painters
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
                {painter.email ? (
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

              {isExpanded && painter.email && (
                <div className="px-4 py-3 text-sm border-[#D1D5DB] border-t-[1px]">
                  <div className="flex py-1 w-full">
                    <span className="font-medium w-[40%]">Email</span>
                    <span className="text-gray-600 w-[60%]">
                      {painter.email}
                    </span>
                  </div>
                  <div className="flex py-1 w-full">
                    <span className="font-medium w-[40%]">Status</span>
                    <span className="text-gray-600 w-[60%]">
                      {painter.status}
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
                    <div className="flex gap-3 w-[60%]">
                      <FaPen className="text-black hover:text-blue-500 cursor-pointer" />
                      <FaTrashAlt className="text-red-500 cursor-pointer" />
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
}
