import styled from "styled-components";

export const FinancialContainer = styled.section`
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-inline-start: 80px;
  }
`;

export const FinancialContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  min-height: 100vh;
  margin-bottom: 20px;
  width: 100%;
  padding-inline: 120px;

  @media screen and (min-width:992px){
  padding-inline: 0px;

    margin-bottom: 0;
  }
  gap: 20px;
`;

export const FinancialContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
   width: 100%;
   max-width: 620px;
   @media screen and (min-width:1140px){
    width: auto;
    max-width: 100%;
   }
`;

export const Balance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-top: 100px;

   @media screen and (min-width: 768px) {
     padding-top: 20px;
    
  }

  @media screen and (min-width: 992px) {
     padding-top: 20px;
  }



  @media screen and (min-width:1200px) {
    flex-direction: row;
    padding-top: 0;
  }
`;

export const FinancialContentContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;

 

    @media screen and (min-width: 1140px) {
  flex-direction: row;
  }

  /* & > :first-child {

    min-width: 320px;
    } */
`;

export const FinancialContentContainer3 = styled.div`
  display: flex;
  gap: 25;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
