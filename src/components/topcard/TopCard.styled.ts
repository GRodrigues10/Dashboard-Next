import styled from "styled-components";

export const TopCardContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: 100%;

  height: 210px;
  background-color: #1e293b;
  border-radius: 5px;
  gap: 20px;
  color: white;
  padding: 20px;

  h2 {
    font-size: 1rem;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    max-width: 300px;
    h2 {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 992px) {
    h2 {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 1200px) {
    h2 {
      font-size: 1.4rem;
    }
  }
`;

export const TopCardContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TopCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    font-size: 1rem;
  }

  @media screen and (min-width: 992px) {
    p {
      font-size: 1.1rem;
    }
  }
`;
