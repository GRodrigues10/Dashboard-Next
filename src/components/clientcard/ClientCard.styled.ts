import styled from "styled-components";

export const ClientContainer = styled.div`
  width: 100%;
  height: 180px;
  background-color: #1e293b;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: white;
  @media screen and (min-width: 1200px) {
    width: 265px;
  }
  h1 {
    font-size: 1.2rem;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    display: flex;
    gap: 5px;
  }
`;
