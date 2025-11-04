"use client";

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
  { name: "Mar", Entrada: 2000, Saída: 9800 },
  { name: "Abr", Entrada: 2780, Saída: 3908 },
  { name: "Mai", Entrada: 1890, Saída: 4800 },
  { name: "Jun", Entrada: 2390, Saída: 3800 },
  { name: "Jul", Entrada: 3490, Saída: 4300 },
];

export default function CashFlowCard() {
  const legendPaddingTop = 33;
  const legendPaddingBottom = 25;

  return (
    <div
      className="
        w-full 
        max-w-[700px] 
        sm:max-w-[500px] 
        md:max-w-[600px] 
        xl:max-w-[620px]
        bg-[#1E293B] 
        p-4 
        rounded-xl 
        shadow-lg 
        flex 
        flex-col 
        justify-between
        min-h-[300px]
        transition-all 
        duration-300 
        ease-in-out
      "
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
              formatter={(value) =>
                value === "Entrada"
                  ? "Entrada"
                  : value === "Saída"
                  ? "Saída"
                  : value
              }
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

            <g>
              <text
                x="15%"
                y={legendPaddingTop}
                fill="white"
                fontSize={18}
                fontWeight="normal"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                Fluxo de Caixa
              </text>
            </g>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
