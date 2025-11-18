"use client";

import { useTheme } from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n";

export default function LineGraph() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDark = theme.background === "#0f172a";
  const legendPaddingTop = 25;
  const legendPaddingBottom = 15;

  const [data, setData] = useState<
    { name: string; revenue: number; expense: number }[]
  >([]);

  useEffect(() => {
    // 🔹 Dados simulados (mock)
    const mockData = [
      { name: "Jan", revenue: 9500, expense: 4800 },
      { name: "Fev", revenue: 8700, expense: 4200 },
      { name: "Mar", revenue: 16000, expense: 7200 },
      { name: "Abr", revenue: 11000, expense: 5700 },
      { name: "Mai", revenue: 5800, expense: 3000 },
      { name: "Jun", revenue: 8700, expense: 4300 },
      { name: "Jul", revenue: 13700, expense: 5900 },
    ];

    setData(mockData);
  }, []);

  return (
    <div
      className="w-full max-w-[530px] h-[300px] p-4 rounded-lg shadow-lg sm:max-w-[600px] transition-all duration-300"
      style={{
        backgroundColor: theme.cardBackground,
        color: theme.text,
        boxShadow: theme.shadow,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 70 + legendPaddingBottom,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid
            stroke={isDark ? "#334155" : "#CBD5E1"}
            strokeDasharray="5 5"
          />
          <XAxis dataKey="name" stroke={isDark ? "#94A3B8" : "#475569"} />
          <YAxis
            stroke={isDark ? "#94A3B8" : "#475569"}
            tickFormatter={(value) => `${value.toLocaleString()}`}
            domain={[0, "dataMax + 1000"]}
          />
          <Tooltip
            formatter={(value: number) => `R$${value.toLocaleString()}`}
            contentStyle={{
              backgroundColor: isDark ? "#0F172A" : "#FFFFFF",
              border: "none",
              borderRadius: "8px",
              color: isDark ? "#F8FAFC" : "#1E293B",
            }}
            labelStyle={{
              color: isDark ? "#F8FAFC" : "#1E293B",
            }}
          />

          {/* 🔹 Linhas usando tradução */}
          <Line
            type="monotone"
            dataKey="revenue"
            name={t("revenue")}
            stroke="#38BDF8"
            strokeWidth={3}
            dot={{ r: 5, fill: "#38BDF8" }}
            activeDot={{ r: 7 }}
          />

          <Line
            type="monotone"
            dataKey="expense"
            name={t("expense")}
            stroke="#F97316"
            strokeWidth={3}
            dot={{ r: 5, fill: "#F97316" }}
            activeDot={{ r: 7 }}
          />

          {/* 🔹 Legenda personalizada */}
          <g>
            <rect
              x={20}
              y={legendPaddingTop}
              width={80}
              height={20}
              fill="#38BDF8"
              rx={4}
            />
            <text
              x={20 + 80 / 2}
              y={legendPaddingTop + 20 / 2}
              fill={isDark ? "#F8FAFC" : "#FFFFFF"}
              fontSize={12}
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {t("revenue")}
            </text>

            <rect
              x={120}
              y={legendPaddingTop}
              width={80}
              height={20}
              fill="#F97316"
              rx={4}
            />
            <text
              x={120 + 80 / 2}
              y={legendPaddingTop + 20 / 2}
              fill={isDark ? "#F8FAFC" : "#FFFFFF"}
              fontSize={12}
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {t("expense")}
            </text>
          </g>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
