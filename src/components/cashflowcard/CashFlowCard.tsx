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
import "@/i18n";
import { useTranslation } from "react-i18next";

export default function CashFlowCard() {
  const { t } = useTranslation();
  const theme = useTheme();

  const legendPaddingTop = 33;
  const legendPaddingBottom = 25;

  // 🔹 Labels traduzidos
  const entradaLabel = t("inCome");   // Entrada
  const saidaLabel = t("outflow");    // Saída

  // 🔹 Dados traduzidos dinamicamente
  const data = [
    { name: "Jan", [entradaLabel]: 4000, [saidaLabel]: 2400 },
    { name: "Fev", [entradaLabel]: 3000, [saidaLabel]: 1398 },
    { name: "Mar", [entradaLabel]: 7000, [saidaLabel]: 1800 },
    { name: "Abr", [entradaLabel]: 2780, [saidaLabel]: 3908 },
    { name: "Mai", [entradaLabel]: 1890, [saidaLabel]: 4800 },
    { name: "Jun", [entradaLabel]: 2390, [saidaLabel]: 2800 },
    { name: "Jul", [entradaLabel]: 3490, [saidaLabel]: 1300 },
  ];

  const cardColor =
    theme.background === "light" ? "#ffffff" : theme.cardBackground;

  const cardShadow =
    theme.background === "light"
      ? "0 8px 25px rgba(0,0,0,0.15)"
      : theme.shadow;

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
              formatter={(value: number) => `R$ ${value.toLocaleString()}`}
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

            {/* 🔹 Linha Entrada */}
            <Line
              type="monotone"
              dataKey={entradaLabel}
              stroke="#38BDF8"
              strokeWidth={3}
              dot={{ r: 5, fill: "#38BDF8" }}
              activeDot={{ r: 7 }}
            />

            {/* 🔹 Linha Saída */}
            <Line
              type="monotone"
              dataKey={saidaLabel}
              stroke="#F97316"
              strokeWidth={3}
              dot={{ r: 5, fill: "#F97316" }}
              activeDot={{ r: 7 }}
            />

            {/* 🔹 Título central */}
            <text
              x="50%"
              y={legendPaddingTop}
              fill={titleColor}
              fontSize={18}
              fontWeight="normal"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {t("cashFlow")}
            </text>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
