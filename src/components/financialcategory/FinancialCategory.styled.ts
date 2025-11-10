import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) =>
    theme.background === "light" ? "#FFFFFF" : theme.cardBackground}; // branco no light
  box-shadow: ${({ theme }) =>
    theme.background === "light"
      ? "0 8px 25px rgba(0, 0, 0, 0.15)" // sombra preta no light
      : theme.shadow};
  border-radius: 12px;
  padding: 20px;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 320px;
    height: 320px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 16px;
  font-size: 1.3rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const ChartContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LegendContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 16px;
  margin-top: 16px;
  place-items: center;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ColorDot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
