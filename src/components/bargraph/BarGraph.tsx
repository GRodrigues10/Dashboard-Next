"use client";

import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Vendas: 4000, Lucro: 2400 },
  { name: "Fev", Vendas: 3000, Lucro: 1398 },
  { name: "Mar", Vendas: 2000, Lucro: 980 },
  { name: "Abr", Vendas: 2780, Lucro: 1908 },
  { name: "Mai", Vendas: 1890, Lucro: 4800 },
  { name: "Jun", Vendas: 2390, Lucro: 3800 },
  { name: "Jul", Vendas: 3490, Lucro: 4300 },
];

const ChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 360px;
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
`;

export default function BarGraph() {
  const legendPaddingTop = 20;

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 70, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid
            stroke="#334155"
            strokeDasharray="5 5"
            strokeOpacity={0.5}
          />
          <XAxis dataKey="name" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0F172A",
              border: "none",
              borderRadius: "8px",
              color: "#F8FAFC",
            }}
            labelStyle={{ color: "#F8FAFC" }}
          />

          <Bar dataKey="Vendas" fill="#38BDF8" radius={[6, 6, 0, 0]} />
          <Bar dataKey="Lucro" fill="#F97316" radius={[6, 6, 0, 0]} />

          {/* Legenda */}
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
              x={20 + 40}
              y={legendPaddingTop + 10}
              fill="#0F172A"
              fontSize={12}
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              Vendas
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
              x={120 + 40}
              y={legendPaddingTop + 10}
              fill="#0F172A"
              fontSize={12}
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              Lucro
            </text>
          </g>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
