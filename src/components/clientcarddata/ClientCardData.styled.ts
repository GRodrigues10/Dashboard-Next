import styled from "styled-components";

export const ClientCardDataContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 910px;
  background-color: #1e293b;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
`;

export const ClientCardDataColumn = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 2px solid #334155;

  &:first-child {
    border-left: none;
  }
`;

export const ClientCardDataHeader = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;

`;

export const ClientCardDataItem = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;
