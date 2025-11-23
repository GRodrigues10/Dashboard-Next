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


  const entradaLabel = t("inCome");   
  const saidaLabel = t("outflow");    
const data = [
  { name: "Jan", [entradaLabel]: 9500, [saidaLabel]: 4800 },
  { name: "Fev", [entradaLabel]: 8700, [saidaLabel]: 4200 },
  { name: "Mar", [entradaLabel]: 16000, [saidaLabel]: 5200 },
  { name: "Abr", [entradaLabel]: 11000, [saidaLabel]: 5700 },
  { name: "Mai", [entradaLabel]: 5800, [saidaLabel]: 3000 },
  { name: "Jun", [entradaLabel]: 8700, [saidaLabel]: 4300 },
  { name: "Jul", [entradaLabel]: 13700, [saidaLabel]: 5900 },
  { name: "Ago", [entradaLabel]: 16000, [saidaLabel]: 4200 },
  { name: "Set", [entradaLabel]: 11000, [saidaLabel]: 2700 },
  { name: "Out", [entradaLabel]: 5800, [saidaLabel]: 3000 },
  { name: "Nov", [entradaLabel]: 8700, [saidaLabel]: 4300 },
  { name: "Dez", [entradaLabel]: 13700, [saidaLabel]: 2900 },
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
              right: 33,
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

      
            <Line
              type="monotone"
              dataKey={entradaLabel}
              stroke="#38BDF8"
              strokeWidth={3}
              dot={{ r: 5, fill: "#38BDF8" }}
              activeDot={{ r: 7 }}
            />

           
            <Line
              type="monotone"
              dataKey={saidaLabel}
              stroke="#F97316"
              strokeWidth={3}
              dot={{ r: 5, fill: "#F97316" }}
              activeDot={{ r: 7 }}
            />

           
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
