import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const data = [
  { name: "Ativos", value: 70 },
  { name: "Inativos", value: 30 },
];

const COLORS = ["#3B82F6", "#F97316"]; // azul e laranja

export const StatusClientCard = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const ativos = data.find((d) => d.name === "Ativos")?.value || 0;
  const percentualAtivos = ((ativos / total) * 100).toFixed(0);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 400,
        backgroundColor: "#1E293B",
        borderRadius: 12,
        padding: 20,
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: 0, fontSize: "20px" }}>
        Status de Clientes
      </h3>

      <div style={{ width: "100%", height: 282 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={0}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}

              {/* 👇 Número central */}
              <Label
                value={`${percentualAtivos}%`}
                position="center"
                fill="white"
                style={{ fontSize: 30, fontWeight: "bold" }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: 10, display: "flex", gap: 16 }}>
        {data.map((item, index) => (
          <div
            key={item.name}
            style={{ display: "flex", alignItems: "center", gap: 6 }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: COLORS[index],
              }}
            ></div>
            <span style={{ fontSize: 14 }}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
