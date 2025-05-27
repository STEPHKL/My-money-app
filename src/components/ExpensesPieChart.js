import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";
import fakeRecords from "../data/fakeData";

const COLORS = ["#F88E8E", "#D55C5C", "#6FCF97"]; 
const ExpensesPieChart = () => {
  const expenses = fakeRecords.filter((rec) => rec.type === "expense");

  const grouped = expenses.reduce((acc, rec) => {
    const key = rec.category || "other";
    acc[key] = (acc[key] || 0) + rec.amount;
    return acc;
  }, {});

  const total = Object.values(grouped).reduce((sum, val) => sum + val, 0);

  const data = Object.entries(grouped).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value,
    percent: ((value / total) * 100).toFixed(0),
  }));

  return (
    <div style={{ width: "100%", height: 280 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
            paddingAngle={2}
            label={({ name, percent }) => `${name}\n${percent}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensesPieChart;
