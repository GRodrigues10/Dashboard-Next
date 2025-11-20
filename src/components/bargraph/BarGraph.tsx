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
import "@/i18n";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const [data, setData] = useState<
    { name: string; clientesNovos: number; clientesPerdidos: number }[]
  >([]);

  useEffect(() => {
    const mockData = [
      { name: "Jan", clientesNovos: 20, clientesPerdidos: 25 },
      { name: "Fev", clientesNovos: 30, clientesPerdidos: 22 },
      { name: "Mar", clientesNovos: 30, clientesPerdidos: 17 },
      { name: "Abr", clientesNovos: 45, clientesPerdidos: 15 },
      { name: "Mai", clientesNovos: 50, clientesPerdidos: 15 },
      { name: "Jun", clientesNovos: 45, clientesPerdidos: 19 },
      { name: "Jul", clientesNovos: 50, clientesPerdidos: 17 },
      { name: "Ago", clientesNovos: 40, clientesPerdidos: 20 },
      { name: "Set", clientesNovos: 35, clientesPerdidos: 22 },
      { name: "Out", clientesNovos: 45, clientesPerdidos: 18 },
      { name: "Nov", clientesNovos: 50, clientesPerdidos: 20 },
      // { name: "Dez", clientesNovos: 55, clientesPerdidos: 15 },
    ];

    setData(mockData);
  }, []);

  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
          barCategoryGap="35%"
          barGap={6}
        >
          <CartesianGrid stroke="#334155" strokeDasharray="4 4" strokeOpacity={0.4} />

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
            formatter={(value, name) => {
              if (name === "clientesNovos") return `${value} ${t("newClients")}`;
              if (name === "clientesPerdidos") return `${value} ${t("lostClients")}`;
              return value;
            }}
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
            formatter={(value) => {
              if (value === "clientesNovos") return t("newCustomers");
              if (value === "clientesPerdidos") return t("lostCustormers");
              return value;
            }}
          />

          <Bar
            dataKey="clientesNovos"
            name={t("newCustomers")}
            fill="#38BDF8"
            radius={[6, 6, 0, 0]}
            barSize={15}
          />

          <Bar
            dataKey="clientesPerdidos"
            name={t("lostCustomers")}
            fill="#F97316"
            radius={[6, 6, 0, 0]}
            barSize={15}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
