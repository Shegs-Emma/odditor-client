"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { month: "Jan", value: 22000 },
  { month: "Feb", value: 18000 },
  { month: "Mar", value: 30000 },
  { month: "Apr", value: 18000 },
  { month: "May", value: 30000 },
  { month: "Jun", value: 20000 },
  { month: "Jul", value: 30000 },
  { month: "Aug", value: 10000 },
  { month: "Sep", value: 23000 },
  { month: "Oct", value: 24000 },
  { month: "Nov", value: 0 },
  { month: "Dec", value: 0 },
];

export default function SmoothLineChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#BD0A0A" stopOpacity={0.23} />
            <stop offset="100%" stopColor="#BD0A0A" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="6 6" vertical={false} />
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <YAxis
          tickFormatter={(val) => `${val / 1000}k`}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#BD0A0A"
          fill="url(#colorRed)"
          strokeWidth={4}
          // dot={{ r: 5, fill: "#fff", stroke: "#BD0A0A", strokeWidth: 2 }}
          // activeDot={{ r: 6 }}
          isAnimationActive={true}
          animationDuration={1500}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
