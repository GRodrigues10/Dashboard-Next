"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CardContainer } from "./Card.styled";
import '@/i18n'; // importa i18n no client
import { useTranslation } from "react-i18next";

export interface CardContent {
  title: string;
  price: string;
  percent: string;
  expanded?: boolean;
  reduced?: boolean;
}

const Card: React.FC<CardContent> = ({
  title,
  price,
  percent,
  expanded = false,
  reduced = false,
}) => {
  // Se não houver valor ou percent, mantém o Card vazio
  if (!price || !percent) return <CardContainer expanded={expanded} reduced={reduced} />;

  const numericPercent = parseFloat(percent.replace(",", "."));
  const isPositive = numericPercent >= 2;

  // lógica de altura: reduced > expanded > normal
  const showDetails = expanded; // só mostra detalhes se expanded
  const { t } = useTranslation();
  return (
    <CardContainer expanded={expanded} reduced={reduced}>
      <div>
        <h1>{title}</h1>
        <h2>{price}</h2>
        <p
          style={{
            color: isPositive ? "rgb(96, 165, 250)" : "red",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          {isPositive ? <ChevronUp /> : <ChevronDown />}
          {percent}
        </p>
      </div>

      {showDetails && (
        <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#cbd5e1" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Entradas:</span>
            <span style={{ color: "#38bdf8" }}>R$ 12.000</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Saídas:</span>
            <span style={{ color: "#f87171" }}>R$ 5.080</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Lucro líquido:</span>
            <span style={{ color: "#22c55e" }}>R$ 6.920</span>
          </div>
        </div>
      )}
    </CardContainer>
  );
};

export default Card;
