import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  Card,
  Title,
  ChartContainer,
  LegendContainer,
  LegendItem,
  ColorDot,
} from "./FinancialCategory.styled";

// Dados do gráfico
const data = [
  { name: "Vendas", value: 400 },
  { name: "Despesas", value: 300 },
  { name: "Marketing", value: 200 },
  { name: "Outros", value: 100 },
];

const COLORS = ["#3B82F6", "#6366F1", "#10B981", "#F97316"];

const FinancialCategory: React.FC = () => {
  return (
    <Card>
      <Title>Categorias financeiras</Title>

      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>

      <LegendContainer>
        {data.map((entry, index) => (
          <LegendItem key={index} isLast={index === data.length - 1}>
            <ColorDot color={COLORS[index % COLORS.length]} />
            <span>{entry.name}</span>
          </LegendItem>
        ))}
      </LegendContainer>
    </Card>
  );
};

export default FinancialCategory;
