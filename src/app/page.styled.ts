import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;

    padding-inline-start: 80px;
  }
`;

export const HomeContent = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  height: 100vh;
  /* padding: 20px; */
  /* padding-top: 40px; */
  gap: 20px;
  justify-content: center;
  width: 100%;
`;
export const HomePart1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const HomePart2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 340px;
  gap: 20px;
`;

export const TopCards = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  color: white;
`;
export const Cards = styled.div`
  display: flex;
  gap: 20px;
`;
