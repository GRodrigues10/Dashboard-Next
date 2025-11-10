import styled from "styled-components";

export const ClientCardDataContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) =>
    theme.background === "light" ? "#ffffff" : theme.cardBackground};
  border-radius: 10px;
  text-align: center;
  box-shadow: ${({ theme }) =>
    theme.background === "light"
      ? "0 8px 25px rgba(0, 0, 0, 0.15)"
      : theme.shadow};
  height: 100%;
  max-height: 320px;
  overflow-y: scroll;
  transition: all 0.3s ease;

  @media screen and (min-width: 1200px) {
    max-width: 960px;
    flex-direction: row;
    overflow-y: hidden;
  }
`;

export const ClientCardDataColumn = styled.div`
  flex: 1;
  padding: 20px;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 10px;
  border-left: 2px solid
    ${({ theme }) =>
      theme.background === "light" ? "#e2e8f0" : "#334155"};

  &:first-child {
    border-left: none;
  }
`;

export const ClientCardDataHeader = styled.h2`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
`;

export const ClientCardDataItem = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${({ theme }) =>
    theme.background === "light" ? "#475569" : "#94a3b8"};
`;
