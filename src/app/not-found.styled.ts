import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-size: 1.8rem;
    text-align: center;
  }
  button {
    font-size: 1.1rem;
    padding: 10px;
    border: 1px solid white;
    border-radius: 5px;
    max-width: 200px;
    width: 100%;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background-color: rgb(56, 189, 248);
      color: black;
      border-color: black;
    }
  }
  a{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 530px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;
