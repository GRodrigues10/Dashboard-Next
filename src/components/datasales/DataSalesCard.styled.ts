import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.background === "#f8fafc" ? "#ffffff" : theme.cardBackground};
  border-radius: 8px;
  padding: 20px;
  color: ${({ theme }) =>
    theme.background === "#f8fafc" ? "#0f172a" : "#f8fafc"};
  width: 100%;
  margin: 0 auto;
  box-shadow: ${({ theme }) =>
    theme.background === "#f8fafc"
      ? "0 8px 25px rgba(0,0,0,0.15)"
      : "0 4px 10px rgba(0,0,0,0.3)"};
  transition: all 0.3s ease;
overflow-x: scroll;
  /* Altura fixa para evitar “pulo” no layout */
  min-height: 230px;
 

  @media screen and (min-width: 768px) {
    max-width: 600px;
    overflow-x: auto;
  }

  @media screen and (min-width: 1200px) {
    max-width: 960px;
max-height: 230px;


    
  overflow-y: scroll;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.background === "#f8fafc" ? "#e5e7eb" : "#334155"};
  font-weight: 600;
  color: ${({ theme }) =>
    theme.background === "#f8fafc" ? "#1f2937" : "#cbd5e1"};
`;

export const TableRow = styled.tr`
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:nth-child(even) {
    background-color: ${({ theme }) =>
      theme.background === "#f8fafc" ? "#f1f5f9" : "#1f2937"};
  }

  &:hover {
    transform: scale(1.01);
    background-color: ${({ theme }) =>
      theme.background === "#f8fafc" ? "#e2e8f0" : "#334155"};
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.background === "#f8fafc" ? "#e5e7eb" : "#334155"};
`;

export const LoadingRow = styled.tr`
  td {
    text-align: center;
    padding: 20px;
    font-style: italic;
    color: ${({ theme }) =>
      theme.background === "#f8fafc" ? "#64748b" : "#94a3b8"};
  }
`;
