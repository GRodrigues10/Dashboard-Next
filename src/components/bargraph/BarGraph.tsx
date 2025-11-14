"use client";

import styled, { useTheme } from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";

const ChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 363px;
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 0.5rem;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function BarGraph() {
  const theme = useTheme();
  const [data, setData] = useState<
    { name: string; Vendas: number; Lucro: number }[]
  >([]);

  useEffect(() => {
    // 🔹 Dados simulados (coerentes com seu dashboard)
    const mockData = [
      { name: "Jan", Vendas: 9000, Lucro: 4200 },
      { name: "Fev", Vendas: 7500, Lucro: 3800 },
      { name: "Mar", Vendas: 18000, Lucro: 9100 },
      { name: "Abr", Vendas: 13500, Lucro: 7200 },
      { name: "Mai", Vendas: 5000, Lucro: 2000 },
      { name: "Jun", Vendas: 7200, Lucro: 3400 },
      { name: "Jul", Vendas: 15000, Lucro: 7200 },
    ];

    setData(mockData);
  }, []);

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid
            stroke="#334155"
            strokeDasharray="4 4"
            strokeOpacity={0.4}
          />
          <XAxis
            dataKey="name"
            stroke={theme.text}
            tick={{ fontSize: 12 }}
            axisLine={false}
          />
          <YAxis
            stroke={theme.text}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value: number) => `R$ ${value.toLocaleString()}`}
            contentStyle={{
              backgroundColor: theme.background,
              border: "none",
              borderRadius: "8px",
              color: theme.text,
            }}
            labelStyle={{ color: theme.text }}
          />
          <Legend
            verticalAlign="top"
            align="left"
            wrapperStyle={{
              paddingBottom: "30px",
              fontSize: "14px",
              color: theme.text,
              right: 0,
              left: "auto",
            }}
          />
          <Bar
            dataKey="Vendas"
            fill="#38BDF8"
            radius={[6, 6, 0, 0]}
            barSize={15}
          />
          <Bar
            dataKey="Lucro"
            fill="#F97316"
            radius={[6, 6, 0, 0]}
            barSize={15}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
