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
  overflow-x: scroll;
  box-shadow: ${({ theme }) =>
    theme.background === "#f8fafc"
      ? "0 8px 25px rgba(0,0,0,0.15)"
      : "0 4px 10px rgba(0,0,0,0.3)"};

  @media screen and (min-width: 768px) {
    max-width: 600px;
    overflow-x: hidden;
  }

  @media screen and (min-width: 1200px) {
    max-width: 960px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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
  &:nth-child(even) {
    background-color: ${({ theme }) =>
      theme.background === "#f8fafc" ? "#f1f5f9" : "#1f2937"};
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.background === "#f8fafc" ? "#e5e7eb" : "#334155"};
`;
