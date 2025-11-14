import styled from "styled-components";

export const CircleGraphContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.background === "light" ? "#fff" : theme.cardBackground};
  height: 340px;
  border-radius: 16px;
  gap: 20px;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) =>
    theme.background === "light"
      ? "0 8px 25px rgba(0, 0, 0, 0.1)"
      : theme.shadow};

  .circle {
    --size: 210px;
    --thickness: 18px;
    --color: ${({ theme }) => theme.primary};
    --background: ${({ theme }) =>
      theme.background === "light" ? "#e6e6e6" : "#333"};
    --percent: 0;

    position: relative;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    font-size: 2rem;

    background: conic-gradient(
      var(--color) calc(var(--percent) * 1%),
      var(--background) 0
    );

    &::before {
      content: "";
      position: absolute;
      width: calc(var(--size) - var(--thickness) * 2);
      height: calc(var(--size) - var(--thickness) * 2);
      border-radius: 50%;
      background-color: ${({ theme }) =>
        theme.background === "light" ? "#fff" : theme.cardBackground};
    }

    h2 {
      position: relative;
      z-index: 1;
      font-size: 2.4rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
  }

  @media screen and (min-width: 1124px) {
    max-width: 340px;
  }
`;
