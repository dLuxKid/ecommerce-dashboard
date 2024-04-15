"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { faker } from "@faker-js/faker";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const recharts_data = [
  {
    name: "Sept 10",
    value: faker.number.int({ min: 0, max: 100000 }),
    max: 100000,
  },
  {
    name: "Sept 11",
    value: faker.number.int({ min: 0, max: 100000 }),
    max: 100000,
  },
  {
    name: "Sept 12",
    value: faker.number.int({ min: 0, max: 100000 }),
    max: 100000,
  },
  {
    name: "Sept 13",
    value: faker.number.int({ min: 0, max: 100000 }),
    max: 100000,
  },
  {
    name: "Sept 14",
    value: faker.number.int({ min: 0, max: 100000 }),
    max: 100000,
  },
  {
    name: "Sept 15",
    value: faker.number.int({ min: 0, max: 100000 }),
    max: 100000,
  },
  {
    name: "Sept 16",
    value: faker.number.int({ min: 0, max: 100000 }),
    max: 100000,
  },
];

export default function Chart() {
  return (
    <div className="px-3 py-5 nav:p-5 overflow-x-auto relative flex flex-col nav:max-w-[660px] max-h-[550px] items-center justify-between h-full rounded-lg gap-9 bg-white shadow-sm">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-5">
          <p className="text-base font-medium text-black">Summary</p>
          <div>
            <Select>
              <SelectTrigger
                className="text-primary bg-[#5570F114] rounded-sm p-3"
                color={"#5570F1"}
              >
                <SelectValue placeholder="Sales" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="orders">Orders</SelectItem>
                <SelectItem value="returns">Returns</SelectItem>
                <SelectItem value="purchase">Purchase</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="self-end my-auto">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Last 7 Days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-week">Last 14 Days</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="last-year">Last 2 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* <Bar data={data} options={options} /> */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={recharts_data} barSize={13}>
          <XAxis
            dataKey="name"
            color="#BEC0CA"
            fontSize={11}
            tickMargin={8}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            color="#BEC0CA"
            fontSize={11}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="#5570F1"
            background={{ fill: "#EEF0FA", radius: 50 }}
            radius={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
8;
