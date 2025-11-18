"use client";

import { useTheme } from "styled-components";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import '@/i18n';
import { useTranslation } from "react-i18next";

const COLORS = ["#38BDF8", "#0EA5E9", "#14B8A6", "#F97316"];

export default function PizzaGraph() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [data, setData] = useState<{ name: string; value: number }[]>([]);

 useEffect(() => {
  const mockData = [
    { name: t("beauty"), value: 320 },
    { name: t("eletronics"), value: 780 },
    { name: t("sports"), value: 410 },
    { name: t("furniture"), value: 210 },
    { name: t("clothes"), value: 580 },
  ];

  setData(mockData);
}, [t]);

  return (
    <div
      className="p-6 rounded shadow-md w-full h-[210px] flex flex-col items-center justify-center transition-all duration-300"
      style={{
        backgroundColor: theme.cardBackground,
        color: theme.text,
        boxShadow: theme.shadow,
      }}
    >
      <h2 className="text-[1.3rem] font-normal mb-4 text-center w-full relative top-2">
        {t('salesByCategory')}
      </h2>

      <div className="w-full h-40 px-4 relative top-2">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => value.toLocaleString()}
              contentStyle={{
                backgroundColor:
                  theme.background === "dark" ? "#1e293b" : "#ffffff",
                border: "none",
                borderRadius: "8px",
                color: theme.background === "dark" ? "#f8fafc" : "#1e293b",
              }}
            />
            <Legend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              wrapperStyle={{
                color: theme.text,
                fontSize: 14,
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
