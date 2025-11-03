"use client";
import React from "react";
import {
  CardContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from "./DataSalesCard.styled";

interface Transaction {
  date: string;
  product: string;
  category: string;
  amount: string;
}

interface DataSalesCardProps {
  transactions: Transaction[];
}

const DataSalesCard: React.FC<DataSalesCardProps> = ({ transactions }) => {
  return (
    <CardContainer>
      <h2>Transações</h2>
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
          {transactions.map((t, index) => (
            <TableRow key={index}>
              <TableCell>{t.date}</TableCell>
              <TableCell>{t.product}</TableCell>
              <TableCell>{t.category}</TableCell>
              <TableCell>{t.amount}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
};

export default DataSalesCard;
