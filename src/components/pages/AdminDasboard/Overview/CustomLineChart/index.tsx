"use client";

import React, { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 10 },
  { month: "Feb", value: 20 },
  { month: "March", value: 30 },
  { month: "April", value: 40 },
  { month: "May", value: 50 },
  { month: "June", value: 60 },
  { month: "July", value: 70 },
  { month: "Aug", value: 80 },
  { month: "Sept", value: 90 },
  { month: "Oct", value: 100 },
  { month: "Nov", value: 110 },
  { month: "Dec", value: 120 },
];

const CustomLineChart: FC = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis domain={[0, 300]} tickCount={11} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="brown" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
