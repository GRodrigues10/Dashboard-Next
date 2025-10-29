import styled from "styled-components";

export const CircleGraphContainer = styled.div`
width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1e293b;
  height: 340px;
  border-radius: 10px;
  gap: 20px;

  .radius {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 25px solid #38bdf8;
    color: white;
    h2 {
      font-size: 2.1rem;
    }
  }

  p {
    font-size: 1.3rem;
    color: white;
  }

  @media screen and (min-width: 1124px) {
    width: 100%;
    max-width: 340px;
  }
`;
