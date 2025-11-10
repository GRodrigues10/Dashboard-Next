import styled from "styled-components";

export const VipCardContainer = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) =>
    theme.background === "light" ? "#ffffff" : theme.cardBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  color: ${({ theme }) => theme.text};
  align-items: center;
  border-radius: 8px;
  box-shadow: ${({ theme }) =>
    theme.background === "light"
      ? "0 8px 25px rgba(0, 0, 0, 0.15)"
      : theme.shadow};
  transition: all 0.3s ease;

  @media screen and (min-width: 1200px) {
    width: 265px;
  }

  h1 {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.text};
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  }

  p {
    display: flex;
    gap: 5px;
    font-size: 1.4rem;
    color: ${({ theme }) =>
      theme.background === "light" ? "#64748b" : "#94a3b8"};
  }
`;
