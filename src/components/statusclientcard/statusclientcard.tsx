"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import "@/i18n";

const COLORS = ["#3B82F6", "#F97316"];

const StatusClientCardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) =>
    theme.background === "light" ? "#ffffff" : theme.cardBackground};
  border-radius: 12px;
  padding: 20px;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme }) =>
    theme.background === "light"
      ? "0 8px 25px rgba(0, 0, 0, 0.15)"
      : theme.shadow};
  transition: all 0.3s ease;

  h3 {
    text-align: center;
    margin-bottom: 0;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.text};
  }

  .legend {
    margin-top: 10px;
    display: flex;
    gap: 16px;

    div {
      display: flex;
      align-items: center;
      gap: 6px;

      span {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.text};
      }

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
      }
    }
  }
`;

export const StatusClientCard = () => {
  const { t } = useTranslation();

  const data = [
    { name: t("active"), value: 70 },
    { name: t("inactive"), value: 30 },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const ativos = data[0].value;
  const percentualAtivos = ((ativos / total) * 100).toFixed(0);

  return (
    <StatusClientCardContainer>
      <h3>{t("customersStatus")}</h3>

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
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
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

      <div className="legend">
        {data.map((item, index) => (
          <div key={item.name}>
            <div
              className="dot"
              style={{ backgroundColor: COLORS[index] }}
            ></div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </StatusClientCardContainer>
  );
};
