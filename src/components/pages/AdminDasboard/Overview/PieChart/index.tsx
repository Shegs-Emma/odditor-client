// components/AuditStatusChart.tsx

import { PieChart as RePieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Completed Audits", value: 60 },
  { name: "Pending Audits", value: 40 },
];

const COLORS = ["#A1241D", "#E7EBA8"]; // Red and light yellow-green

export default function PieChart() {
  return (
    <div className="rounded-lg bg-white w-full">
      <RePieChart width={220} height={225}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text
          x={110}
          y={110}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "14px", fontWeight: 400 }}
        >
          Audit status
        </text>
      </RePieChart>
    </div>
  );
}
