"use client";

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

export default function BarGraph() {
  const legendPaddingTop = 20; // espaçamento do topo

  return (
    <div className="w-full max-w-[600px] h-[360px] bg-[#1E293B] p-4 rounded-lg shadow-lg">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 70, right: 30, left: 20, bottom: 20 }} // aumentei o top pra dar espaço
        >
          <CartesianGrid stroke="#334155" strokeDasharray="5 5" />
          <XAxis dataKey="name" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip
            contentStyle={{ backgroundColor: "#0F172A", border: "none" }}
            labelStyle={{ color: "#F8FAFC" }}
          />

          <Bar dataKey="Vendas" fill="#38BDF8" radius={[6, 6, 0, 0]} />
          <Bar dataKey="Lucro" fill="#F97316" radius={[6, 6, 0, 0]} />

          {/* Legenda interna com padding */}
          <g>
            {/* Retângulo Receita */}
            <rect
              x={20}
              y={legendPaddingTop}
              width={80}
              height={20}
              fill="#38BDF8"
              rx={4}
            />
            <text
              x={20 + 40} // centro horizontal (x + width / 2)
              y={legendPaddingTop + 10} // centro vertical (y + height / 2)
              fill="#0F172A"
              fontSize={12}
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              Vendas
            </text>

            {/* Retângulo Despesa */}
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
    </div>
  );
}
