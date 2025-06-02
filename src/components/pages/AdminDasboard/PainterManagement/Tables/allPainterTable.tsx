"use client";

import React from "react";
import { TbTrashXFilled } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";

const painters = [
  {
    name: "Lindsey Stroud",
    email: "lindsey.stroud@gmail.com",
    status: "Active",
    availability: "Available",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Sarah Brown",
    email: "sarah.brown@gmail.com",
    status: "Active",
    availability: "Available",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Micheal Owen",
    email: "michael.owen@gmail.com",
    status: "Pending",
    availability: "Unavailable",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Mary Jane",
    email: "mary.jane@gmail.com",
    status: "Pending",
    availability: "Unavailable",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Peter Doodle",
    email: "peter.doodle@gmail.com",
    status: "Active",
    availability: "Available",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export default function AllPainterTable() {
  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-full text-sm text-left border rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-100 text-gray-700 font-medium">
          <tr>
            <th className="p-3">
              <input type="checkbox" className="form-checkbox" />
            </th>
            <th className="p-3">Painters Name</th>
            <th className="p-3">Email Address</th>
            <th className="p-3">Active</th>
            <th className="p-3">Availability</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {painters.map((painter, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="p-3 flex items-center gap-2">
                <Image
                  src="/imgs/peter.svg"
                  alt={painter.name}
                  width={31}
                  height={31}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{painter.name}</span>
              </td>
              <td className="p-3">{painter.email}</td>
              <td className="p-3">{painter.status}</td>
              <td className="p-3">{painter.availability}</td>
              <td className="p-3 flex justify-center gap-2">
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
