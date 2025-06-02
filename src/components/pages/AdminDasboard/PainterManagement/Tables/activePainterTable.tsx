"use client";

import React from "react";
import Image from "next/image";
import { PiDotsThreeOutlineThin } from "react-icons/pi";

const painters = [
  {
    name: "Lindsey Stroud",
    painter_id: "P001",
    location: "Lagos",
    contact_info: "sarah.brown@gmail.com",
    availability: "Available",
  },
  {
    name: "Serah Brown",
    painter_id: "P002",
    location: "Lagos",
    contact_info: "sarah.brown@gmail.com",
    availability: "Busy",
  },
  {
    name: "Michael Owen",
    painter_id: "P003",
    location: "Kano",
    contact_info: "sarah.brown@gmail.com",
    availability: "Unavailable",
  },
  {
    name: "Mary June",
    painter_id: "P004",
    location: "Port Harcort",
    contact_info: "sarah.brown@gmail.com",
    availability: "Unavailable",
  },

  {
    name: "Peter Dodle",
    painter_id: "P005",
    location: "Ibadan",
    contact_info: "sarah.brown@gmail.com",
    availability: "Available",
  },
];

export default function ActivePainterTable() {
  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-full text-sm text-left border rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-100 text-gray-700 font-medium">
          <tr>
            <th className="p-3">
              <input type="checkbox" className="form-checkbox" />
            </th>
            <th className="p-3">Painters Name</th>
            <th className="p-3">Painter ID</th>
            <th className="p-3">Location</th>
            <th className="p-3">Contact info</th>
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
              <td className="p-3">{painter.painter_id}</td>
              <td className="p-3">{painter.location}</td>
              <td className="p-3">{painter.contact_info}</td>
              <td className="p-3">{painter.availability}</td>
              <td className="p-3 flex justify-center gap-2">
                <PiDotsThreeOutlineThin size="32" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
