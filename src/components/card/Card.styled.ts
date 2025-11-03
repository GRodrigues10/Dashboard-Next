import styled from "styled-components";

interface CardContainerProps {
  expanded?: boolean;
  reduced?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: #1e293b;


  width: ${({ reduced }) => (reduced ? "200px" : "100%")};
  min-width: ${({ reduced }) => (reduced ? "200px" : "200px")};
  max-width: ${({ reduced, expanded }) =>
    reduced ? "200px" : expanded ? "400px" : "600px"};

  flex-shrink: 0;


  height: ${({ expanded, reduced }) =>
    expanded ? "240px" : reduced ? "140px" : "160px"};

  border-radius: 5px;
  color: #f8fafc;
  padding: 20px;

  justify-content: ${({ expanded }) =>
    expanded ? "space-between" : "center"};

  gap: 5px;
  transition: height 0.3s ease, width 0.3s ease, font-size 0.3s ease;

  h1 {
    font-size: ${({ reduced }) => (reduced ? "0.9rem" : "1.1rem")};
  }
  h2 {
    font-size: ${({ reduced }) => (reduced ? "1.6rem" : "2.1rem")};
    font-weight: 600;
  }
  p {
    font-size: ${({ reduced }) => (reduced ? "0.85rem" : "1rem")};
    color: #94a3b8;
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
