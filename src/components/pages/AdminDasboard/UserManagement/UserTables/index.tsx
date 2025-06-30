"use client";

import React from "react";
import { TbTrashXFilled } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";

const painters = [
  {
    name: "Lindsey Stroud",
    email: "lindsey.stroud@gmail.com",
    location: "Ikoyi, Lagos",
    memberSince: "Nov 7, 2024 | 12:00 PM",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Sarah Brown",
    email: "sarah.brown@gmail.com",
    location: "Ikoyi, Lagos",
    memberSince: "Nov 7, 2024 | 12:00 PM",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Micheal Owen",
    email: "michael.owen@gmail.com",
    location: "Ikoyi, Lagos",
    memberSince: "Nov 7, 2024 | 12:00 PM",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Mary Jane",
    email: "mary.jane@gmail.com",
    location: "Ikoyi, Lagos",
    memberSince: "Nov 7, 2024 | 12:00 PM",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Peter Doodle",
    email: "peter.doodle@gmail.com",
    location: "Ikoyi, Lagos",
    memberSince: "Nov 7, 2024 | 12:00 PM",
    status: "Active",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export default function UserManagementTable() {
  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-full text-sm text-left border rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-100 text-gray-700 font-medium">
          <tr>
            <th className="p-3">
              <input type="checkbox" className="form-checkbox" />
            </th>
            <th className="p-3 text-[#BD0A0A]">Painters Name</th>
            <th className="p-3 text-[#BD0A0A]">Email Address</th>
            <th className="p-3 text-[#BD0A0A]">Location</th>
            <th className="p-3 text-[#BD0A0A]">Member Since</th>
            <th className="p-3 text-[#BD0A0A]">Status</th>
            <th className="p-3 text-[#BD0A0A] text-center">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {painters.map((painter, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 bg-[#FFF3F3CC]">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="p-3 flex items-center gap-2 bg-[#FFF3F3CC]">
                <Image
                  src="/imgs/peter.svg"
                  alt={painter.name}
                  width={31}
                  height={31}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{painter.name}</span>
              </td>
              <td className="p-3 bg-[#FFF3F3CC]">{painter.email}</td>
              <td className="p-3 bg-[#FFF3F3CC]">{painter.location}</td>
              <td className="p-3 bg-[#FFF3F3CC]">{painter.memberSince}</td>
              <td className="p-3 bg-[#FFF3F3CC]">{painter.status}</td>
              <td className="p-3 bg-[#FFF3F3CC] flex justify-center gap-2">
                <button className="text-white bg-black p-1.5 rounded hover:opacity-80">
                  <FaEdit className="w-4 h-4" />
                </button>
                <button className="text-white bg-red-400 p-1.5 rounded hover:bg-red-500">
                  <TbTrashXFilled className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
