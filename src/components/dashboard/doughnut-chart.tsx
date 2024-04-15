"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Cell, Pie, PieChart } from "recharts";

const pie_data = [
  { name: "Acquisition", value: 55 },
  { name: "Purchase", value: 30 },
  { name: "Retention", value: 15 },
];

const COLORS = ["#5570F1", "#FFCC91", "#97A5EB"];

export default function DoughnutChart() {
  return (
    <div className="py-5 nav:px-5 px-3  w-full nav:max-w-[321px] flex flex-col rounded-lg gap-[10px] bg-white shadow-sm">
      <div className="w-full flex items-center justify-between">
        <p className="text-base font-medium text-black">Marketing</p>
        <div className="self-end my-auto">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="This Week" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="flex items-center gap-1 md:gap-2 text-[11px] text-[#A6A8B1]">
          <span className="size-2 rounded-full bg-[#5570F1]" />
          Acquisition
        </p>
        <p className="flex items-center gap-2 text-[11px] text-[#A6A8B1]">
          <span className="size-2 rounded-full bg-[#97A5EB]" />
          Purchase
        </p>
        <p className="flex items-center gap-2 text-[11px] text-[#A6A8B1]">
          <span className="size-2 rounded-full bg-[#FFCC91]" />
          Retention
        </p>
      </div>
      <div className="w-full flex items-center justify-center my-auto mx-auto">
        <PieChart width={210} height={210}>
          <Pie
            data={pie_data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
          >
            {pie_data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}
