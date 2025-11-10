import styled from "styled-components";

export const CircleGraphContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme.background === "light" ? "#ffffff" : theme.cardBackground};
  height: 340px;
  border-radius: 10px;
  gap: 20px;
  transition: all 0.3s ease;

  /* mesma sombra do CardContainer */
  box-shadow: ${({ theme }) =>
    theme.background === "light"
      ? "0 8px 25px rgba(0, 0, 0, 0.15)"
      : theme.shadow};

  .radius {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 25px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;

    h2 {
      font-size: 2.1rem;
    }
  }

  p {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;
  }

  @media screen and (min-width: 1124px) {
    width: 100%;
    max-width: 340px;
  }
`;
