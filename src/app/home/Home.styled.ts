import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow-x: hidden; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
  padding-inline-start: 70px;


  }
`;

export const HomeContent = styled.div`
margin-top: 80px;
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

  
  @media screen and (min-width: 768px) {
  margin-top: 0px;
  }
`;
export const HomePart1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 600px; 
  padding-inline: 0px;
`;

export const HomePart2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  max-width: 600px; 
  padding-inline: 0px;
  padding-bottom: 20px;


  @media screen and (min-width: 1250px) {
    padding-bottom: 0px;
  }

  @media screen and (min-width: 1124px) {
    max-width: 340px;
  }
`;

export const TopCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
  max-width: 600px; /* 👈 adicionado */
  padding-inline: 0px;

  @media screen and (min-width: 640px) {
    flex-direction: row;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px; /* 👈 adicionado */
  padding-inline: 0px;

  @media screen and (min-width: 640px) {
    flex-direction: row;
  }
`;

