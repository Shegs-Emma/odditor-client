"use client";

import React from "react";
import Image from "next/image";

const painters = [
  {
    name: "Lindsey Stroud",
    submitted_on: "Nov 7, 2024",
    docs_submitted: "4 Documents",
  },
  {
    name: "Sarah Brown",
    submitted_on: "Nov 7, 2024",
    docs_submitted: "4 Documents",
  },
  {
    name: "Micheal Owen",
    submitted_on: "Nov 7, 2024",
    docs_submitted: "3 Documents",
  },
  {
    name: "Mary Jane",
    submitted_on: "Nov 7, 2024",
    docs_submitted: "3 Documents",
  },
  {
    name: "Peter Doodle",
    submitted_on: "Nov 7, 2024",
    docs_submitted: "4 Documents",
  },
];

export default function PendingPainterTable() {
  return (
    <div className="overflow-x-auto py-4">
      <table className="min-w-full text-sm text-left border rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-100 text-gray-700 font-medium">
          <tr>
            <th className="p-3">
              <input type="checkbox" className="form-checkbox" />
            </th>
            <th className="p-3">Painters Name</th>
            <th className="p-3">Submitted On</th>
            <th className="p-3">Documents Submitted</th>
            <th className="p-3 text-left">Action</th>
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
              <td className="p-3">{painter.submitted_on}</td>
              <td className="p-3">{painter.docs_submitted}</td>
              <td className="p-3 flex justify-start gap-2">
                <p className="font-normal text-[13px] text-[#63ADFF] cursor-pointer">
                  Review
                </p>
                <p className="font-semibold ml-12 text-[13px] text-[#BD0A0A] cursor-pointer">
                  Download
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
