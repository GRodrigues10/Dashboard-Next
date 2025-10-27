import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1e293b;
  width: 100%;
  height: 160px;
  border-radius: 5px;
  color: #f8fafc;
  padding: 20px;
  justify-content: center;
  gap: 5px;

  h1 {
    font-size: 1.3rem;
  }

  h2 {
    font-size: 2.3rem;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    color: #94a3b8;
    display: flex;
  }
`;
