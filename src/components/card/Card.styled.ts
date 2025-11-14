import styled from "styled-components";

interface CardContainerProps {
  expanded?: boolean;
  reduced?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};

  width: ${({ reduced }) => (reduced ? "100%" : "100%")};
  min-width: ${({ reduced }) => (reduced ? "100%" : "200px")};
  max-width: ${({ reduced, expanded }) =>
    reduced ? "200px" : expanded ? "400px" : "600px"};

  flex-shrink: 0;

  height: ${({ expanded, reduced }) =>
    expanded ? "240px" : reduced ? "140px" : "170px"};

  border-radius: 10px;
  padding: 20px;

  justify-content: ${({ expanded }) =>
    expanded ? "space-between" : "center"};

  gap: 5px;
  box-shadow: ${({ theme }) => theme.shadow};

  /* Transições suaves ao trocar o tema */
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    height 0.3s ease,
    width 0.3s ease,
    font-size 0.3s ease,
    box-shadow 0.3s ease;

  /* Leve destaque ao passar o mouse */
  /* &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 15px ${({ theme }) => theme.primary}33;
  } */

  h1 {
    font-size: ${({ reduced }) => (reduced ? "0.9rem" : "1.1rem")};
    color: ${({ theme }) => theme.text};
  }

  h2 {
    font-size: ${({ reduced }) => (reduced ? "1.6rem" : "2.1rem")};
    font-weight: 600;
  }

  p {
    font-size: ${({ reduced }) => (reduced ? "0.85rem" : "1rem")};
    color: ${({ theme }) => theme.secondary};
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  @media screen and (min-width: 530px) {
    max-width: ${({ reduced, expanded }) =>
      reduced ? "400px" : expanded ? "400px" : "560px"};

    min-width: ${({ reduced, expanded }) =>
      reduced ? "100%" : expanded ? "400px" : "200px"};
  }

  @media screen and (min-width: 768px) {
    max-width: ${({ reduced, expanded }) =>
      reduced ? "200px" : expanded ? "400px" : "290px"};

    h1 { font-size: ${({ reduced }) => (reduced ? "0.95rem" : "1.1rem")}; }
    h2 { font-size: ${({ reduced }) => (reduced ? "1.8rem" : "2rem")}; }
    p { font-size: ${({ reduced }) => (reduced ? "0.9rem" : "1rem")}; }
  }

  @media screen and (min-width: 992px) {
    max-width: 600px;
    min-width: auto;

    h1 { font-size: ${({ reduced }) => (reduced ? "1rem" : "1.2rem")}; }
    h2 { font-size: ${({ reduced }) => (reduced ? "1.9rem" : "2.1rem")}; }
    p { font-size: ${({ reduced }) => (reduced ? "0.95rem" : "1rem")}; }
  }

  @media screen and (min-width: 1200px) {
    min-width: ${({ reduced, expanded }) =>
      reduced ? "225px" : expanded ? "400px" : "290px"};
    max-width: ${({ reduced, expanded }) =>
      reduced ? "200px" : expanded ? "400px" : "290px"};

    h1 { font-size: ${({ reduced }) => (reduced ? "1.1rem" : "1.3rem")}; }
    h2 { font-size: ${({ reduced }) => (reduced ? "2rem" : "2.3rem")}; }
    p { font-size: ${({ reduced }) => (reduced ? "1rem" : "1.1rem")}; }
  }
`;
