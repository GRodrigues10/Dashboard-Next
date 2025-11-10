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
  Legend,
} from "recharts";

const data = [
  { name: "Jan", Entrada: 4000, Saída: 2400 },
  { name: "Fev", Entrada: 3000, Saída: 1398 },
  { name: "Mar", Entrada: 7000, Saída: 1800 },
  { name: "Abr", Entrada: 2780, Saída: 3908 },
  { name: "Mai", Entrada: 1890, Saída: 4800 },
  { name: "Jun", Entrada: 2390, Saída: 2800 },
  { name: "Jul", Entrada: 3490, Saída: 1300 },
];

export default function CashFlowCard() {
  const theme = useTheme();
  const legendPaddingTop = 33;
  const legendPaddingBottom = 25;

  // Cor do card conforme tema
  const cardColor =
    theme.background === "light" ? "#ffffff" : theme.cardBackground;

  // Sombra do card
  const cardShadow =
    theme.background === "light"
      ? "0 8px 25px rgba(0,0,0,0.15)"
      : theme.shadow;

  // Cor do texto "Fluxo de Caixa"
  const titleColor = theme.background === "light" ? "#000000" : "#38BDF8";

  return (
    <div
      className="
        w-full 
        max-w-[700px] 
        sm:max-w-[500px] 
        md:max-w-[600px] 
        xl:max-w-[620px]
        p-4 
        rounded-xl 
        flex 
        flex-col 
        justify-between
        min-h-[300px]
        transition-all 
        duration-300 
        ease-in-out
      "
      style={{ backgroundColor: cardColor, boxShadow: cardShadow }}
    >
      <div className="w-full h-[300px] sm:h-[280px] md:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 50 + legendPaddingBottom,
              right: 20,
              left: 20,
              bottom: 30,
            }}
          >
            <CartesianGrid stroke="#334155" strokeDasharray="5 5" />
            <XAxis dataKey="name" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip
              contentStyle={{ backgroundColor: "#0F172A", border: "none" }}
              labelStyle={{ color: "#F8FAFC" }}
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                paddingTop: 20,
                color: "#F8FAFC",
                fontSize: 13,
              }}
            />

            <Line
              type="monotone"
              dataKey="Entrada"
              stroke="#38BDF8"
              strokeWidth={3}
              dot={{ r: 5, fill: "#38BDF8" }}
              activeDot={{ r: 7 }}
            />
            <Line
              type="monotone"
              dataKey="Saída"
              stroke="#F97316"
              strokeWidth={3}
              dot={{ r: 5, fill: "#F97316" }}
              activeDot={{ r: 7 }}
            />

            {/* Texto central */}
            <text
              x="50%"
              y={legendPaddingTop}
              fill={titleColor}
              fontSize={18}
              fontWeight="normal"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              Fluxo de Caixa
            </text>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
