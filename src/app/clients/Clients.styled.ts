import styled from "styled-components";

export const ClientsContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ClientContent = styled.div`
  height: 100%;
  display: flex;
flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-inline-start: 80px;

  @media screen and (min-width:1200px) {
    flex-direction: column;
  }
`;

export const ClientCardContainerMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  @media screen and (min-width: 992px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const ClientCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;


  @media screen and (min-width: 1200px) {
    flex-direction: column;
  }
`;

export const ClientCardContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  

  @media screen and (min-width: 1200px) {
    flex-direction: column;
  }
`;
