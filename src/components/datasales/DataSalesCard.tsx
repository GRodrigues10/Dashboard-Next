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

// 🔹 Tipo dos dados
interface SalesTypes {
  id: number;
  date: string;
  product: string;
  category: string;
  price: number;
}

// 🔹 Dados simulados (mock)
const mockSales: SalesTypes[] = [
  { id: 1, date: "05/01/2025", product: "iPhone 14 Pro", category: "Eletrônicos", price: 7200 },
  { id: 2, date: "12/01/2025", product: "Camisa Nike Dri-Fit", category: "Roupas", price: 230 },
  { id: 3, date: "22/01/2025", product: "Perfume Dior Sauvage", category: "Beleza", price: 580 },
  { id: 4, date: "28/01/2025", product: "Sofá Retrátil 3 Lugares", category: "Móveis", price: 1890 },
  { id: 5, date: "02/02/2025", product: "Fone Bluetooth JBL", category: "Eletrônicos", price: 460 },
  { id: 6, date: "15/02/2025", product: "Relógio Casio Vintage", category: "Acessórios", price: 340 },
  { id: 7, date: "27/02/2025", product: "Notebook Dell XPS 13", category: "Eletrônicos", price: 8900 },
  { id: 8, date: "04/03/2025", product: "Tênis Adidas Ultraboost", category: "Roupas", price: 780 },
  { id: 9, date: "10/03/2025", product: "Creme Hidratante Nivea", category: "Beleza", price: 45 },
  { id: 10, date: "21/03/2025", product: "Mesa de Escritório", category: "Móveis", price: 1190 },
];

const DataSalesCard = () => {
  const [data] = useState<SalesTypes[]>(mockSales);

  return (
    <CardContainer>
      <h2>Transações Recentes</h2>

      <Table>
        <thead>
          <tr>
            <TableHeader>Data</TableHeader>
            <TableHeader>Produto</TableHeader>
            <TableHeader>Categoria</TableHeader>
            <TableHeader>Valor</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((d) => (
              <TableRow key={d.id}>
                <TableCell>{d.date}</TableCell>
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
