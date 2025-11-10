import styled from "styled-components";

export const MenuContainer = styled.aside`
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.cardBackground};
  z-index: 999999999;

  .mobile-dashboard-icon {
    position: fixed;
    color: ${({ theme }) => theme.text};
    height: 80px;
    left: 15px;
    width: 2rem;
  }

  .menu-icon {
    position: fixed;
    color: ${({ theme }) => theme.text};
    height: 80px;
    right: 15px;
    width: 2rem;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }

  @media screen and (min-width: 768px) {
    width: 80px;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;

    .mobile-dashboard-icon {
      display: none;
    }

    .menu-icon {
      display: none;
    }
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    display: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }

  @media screen and (min-width: 768px) {
    svg {
      display: flex;
    }
    flex-direction: column;
    padding-top: 50px;
  }
`;

export const MenuLinksMobile = styled.div`
  width: 250px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: ${({ theme }) => theme.text};
  padding: 20px;
  padding-top: 80px;
  background-color: ${({ theme }) => theme.cardBackground};
  z-index: 99999;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  div {
    display: flex;
    gap: 10px;

    svg {
      color: ${({ theme }) => theme.text};
    }

    span {
      color: ${({ theme }) => theme.text};
      cursor: pointer;
      transition: 0.4s ease;
      &:hover {
        color: ${({ theme }) => theme.secondary};
      }
    }
  }

  .exit {
    display: flex;
    height: 100%;
    margin-top: auto;

    svg {
      margin-top: auto;
    }

    span {
      margin-top: auto;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuExit = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: auto;
    padding: 20px;

    svg {
      color: red;
      &:hover {
        color: darkred;
      }
    }
  }
`;
