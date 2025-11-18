"use client";
import React, { useState } from "react";
import {
  CardContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  LoadingRow,
} from "./DataSalesCard.styled";
import { formatPrice } from "@/utils/formatprice";
import "@/i18n";
import { useTranslation } from "react-i18next";

interface SalesTypes {
  id: number;
  user: string;
  date: string;
  product: string;
  category: string;
  price: number;
}

const DataSalesCard = () => {
  const { t } = useTranslation();

  // Agora os dados usam t()
  const mockSales: SalesTypes[] = [
    { id: 1, date: "05/01/2025", user:"Gabriel", product: "iPhone 14 Pro", category: t("electronics"), price: 7200 },
    { id: 2, date: "12/01/2025", user:"João", product: "Camisa Nike Dri-Fit", category: t("clothes"), price: 230 },
    { id: 3, date: "22/01/2025", user:"Matheus", product: "Perfume Dior Sauvage", category: t("beauty"), price: 580 },
    { id: 4, date: "28/01/2025", user:"Maria", product: "Sofá Retrátil 3 Lugares", category: t("furniture"), price: 1890 },
    { id: 5, date: "02/02/2025", user:"Beatriz", product: "Fone Bluetooth JBL", category: t("electronics"), price: 460 },
  ];

  return (
    <CardContainer>
      <h2>{t("recentTransactions")}</h2>

      <Table>
        <thead>
          <tr>
            <TableHeader>{t('date')}</TableHeader>
            <TableHeader>{t('customers')}</TableHeader>
            <TableHeader>{t('product')}</TableHeader>
            <TableHeader>{t('category')}</TableHeader>
            <TableHeader>{t('amount')}</TableHeader>
          </tr>
        </thead>

        <tbody>
          {mockSales.length > 0 ? (
            mockSales.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.date}</TableCell>
                <TableCell>{d.user}</TableCell>
                <TableCell>{d.product}</TableCell>
                <TableCell>{d.category}</TableCell>
                <TableCell>{formatPrice(d.price)}</TableCell>
              </TableRow>
            ))
          ) : (
            <LoadingRow>
              <td colSpan={4}>Nenhuma transação encontrada</td>
            </LoadingRow>
          )}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default DataSalesCard;
