import React from "react";
import {
  ClientCardDataContainer,
  ClientCardDataColumn,
  ClientCardDataHeader,
  ClientCardDataItem,
} from "./ClientCardData.styled";
import "@/i18n";
import { useTranslation } from "react-i18next";

function ClientCardData() {
 
 const { t } = useTranslation();
  const clients = [
    { name: "Ana", email: "Ana@gmail.com", sales: 32, status: "VIP" },
    { name: "Alex", email: "Alex@gmail.com", sales: 25, status: "Ativo" },
    { name: "João", email: "João@gmail.com", sales: 16, status: "Ativo" },
    { name: "Jonathan", email: "Jonathan@gmail.com", sales: 12, status: "Inativo" },
    { name: "Suzy", email: "Suzy@gmail.com", sales: 11, status: "VIP" },
  ];

  return (
    <ClientCardDataContainer>
      <ClientCardDataColumn>
        <ClientCardDataHeader>{t('name')}</ClientCardDataHeader>
        {clients.map((c) => <ClientCardDataItem key={c.name}>{c.name}</ClientCardDataItem>)}
      </ClientCardDataColumn>

      <ClientCardDataColumn>
        <ClientCardDataHeader>{t('email')}</ClientCardDataHeader>
        {clients.map((c) => <ClientCardDataItem key={c.email}>{c.email}</ClientCardDataItem>)}
      </ClientCardDataColumn>

      <ClientCardDataColumn>
        <ClientCardDataHeader>{t('sales')}</ClientCardDataHeader>
        {clients.map((c) => <ClientCardDataItem key={c.name + "_sales"}>{c.sales}</ClientCardDataItem>)}
      </ClientCardDataColumn>

      <ClientCardDataColumn>
        <ClientCardDataHeader>{t('status')}</ClientCardDataHeader>
        {clients.map((c) =>  <ClientCardDataItem
            key={c.name + "_status"}
            style={{
              color:
                c.status === "VIP"
                  ? "#38bdf8" // azul
                  : c.status === "Ativo"
                  ? "#22c55e" // verde
                  : "#ef4444", // vermelho
              fontWeight: 600,
            }}
          >
            {c.status}
          </ClientCardDataItem>)}
      </ClientCardDataColumn>
    </ClientCardDataContainer>
  );
}

export default ClientCardData;
