import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #1e293b;
  border-radius: 8px;
  padding: 20px;
  color: #f8fafc;
  width: 100%;
  /* max-width: 960px; */
  margin: 0 auto;
  overflow-x: scroll;

  @media screen and (min-width: 768px){
    max-width: 600px;
  overflow-x: hidden;

  }

    @media screen and (min-width: 1200px){
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
  border-bottom: 1px solid #334155;
  font-weight: 600;
  color: #cbd5e1;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #1f2937;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #334155;
`;
