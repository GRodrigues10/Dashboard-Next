import styled from "styled-components";

export const ClientsContainer = styled.div`
  width: 100%;

  @media screen and (min-width:1200px) {
    height: 100vh;
  }


`;

export const ClientContent = styled.div`
padding-top: 100px;
padding-inline: 20px;
margin-bottom: 20px;
  height: 100%;
  display: flex;
flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 20px;
    flex-direction: row;
  padding-inline-start: 100px;


  }

  @media screen and (min-width:1200px) {
    margin-top: 0px;
    flex-direction: column;
    padding-top:0;
  }
`;

export const ClientCardContainerMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;


  @media screen and (min-width: 1200px) {
    flex-direction: column;
     max-width: 265px;
  }
`;

export const ClientCardContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
   width: 100%;
  max-width: 400px;


  @media screen and (min-width: 1200px) {
    flex-direction: column;
     max-width: 265px;
  }

  

  @media screen and (min-width: 1200px) {
    flex-direction: column;
  }
`;
