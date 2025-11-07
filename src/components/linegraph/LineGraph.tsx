"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Receita: 4000, Despesa: 2400 },
  { name: "Fev", Receita: 3000, Despesa: 1398 },
  { name: "Mar", Receita: 9000, Despesa: 1800 },
  { name: "Abr", Receita: 2780, Despesa: 4908 },
  { name: "Mai", Receita: 1890, Despesa: 1800 },
  { name: "Jun", Receita: 2390, Despesa: 3800 },
  { name: "Jul", Receita: 6590, Despesa: 4300 },
];

export default function LineGraph() {
  const legendPaddingTop = 25; // espaço acima
  const legendPaddingBottom = 15; // espaço abaixo

  return (
    <div className="w-full max-w-[530px] h-[300px] bg-[#1E293B] p-4 rounded-lg shadow-lg sm:max-w-[600px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 70 + legendPaddingBottom, // ajusta o espaço total do gráfico
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid stroke="#334155" strokeDasharray="5 5" />
          <XAxis dataKey="name" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip
            contentStyle={{ backgroundColor: "#0F172A", border: "none" }}
            labelStyle={{ color: "#F8FAFC" }}
          />

          <Line
            type="monotone"
            dataKey="Receita"
            stroke="#38BDF8"
            strokeWidth={3}
            dot={{ r: 5, fill: "#38BDF8" }}
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="Despesa"
            stroke="#F97316"
            strokeWidth={3}
            dot={{ r: 5, fill: "#F97316" }}
            activeDot={{ r: 7 }}
          />

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
              fill="#0F172A"
              fontSize={12}
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              Receita
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
              fill="#0F172A"
              fontSize={12}
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              Despesa
            </text>
          </g>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
