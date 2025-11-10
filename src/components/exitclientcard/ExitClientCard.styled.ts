import styled from "styled-components";

export const ExitClientCardContainer = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) =>
    theme.background === "light" ? "#ffffff" : theme.cardBackground};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  box-shadow: ${({ theme }) =>
    theme.background === "light"
      ? "0 8px 25px rgba(0, 0, 0, 0.15)"
      : theme.shadow};
  transition: all 0.3s ease;

  @media screen and (min-width: 1200px) {
    width: 265px;
  }

  h1 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
  }

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
  }

  p {
    font-size: 1.2rem;
    display: flex;
    gap: 5px;
    color: ${({ theme }) => theme.secondary};
  }
`;
