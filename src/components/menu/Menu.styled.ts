import styled from "styled-components";

export const MenuContainer = styled.aside`
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #1e293b;
  z-index: 999999999;

  .mobile-dashboard-icon {
    position: fixed;
    color: white;
    height: 80px;
    left: 15px;
    width: 2rem;
  }

  .menu-icon {
    position: fixed;
    color: white;
    height: 80px;
    right: 15px;
    width: 2rem;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
     color: #8c95a3;
    }
  }

 @media screen and (min-width: 768px) {
  width: 80px;
  min-height: 100vh;
  background-color: #1e293b;
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
  flex-direction: row; /* horizontal em mobile */
  align-items: center;

  svg {
    display: none;
    color: #a0a8b8;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: #8c95a3;
    }
  }

  @media screen and (min-width: 768px) {
    svg {
      display: flex;
    }
    flex-direction: column; /* vertical em desktop */
    padding-top: 50px;
  }
`;

export const MenuLinksMobile = styled.div`
  width: 250px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  right: 0; /* 🔹 lado direito */
  display: flex; /* sempre flex */
  flex-direction: column;
  gap: 40px;
  color: white;
  padding: 20px;
  padding-top: 80px;
  background-color: #192433;
  z-index: 99999;

  /* inicia fora da tela e desliza para dentro */
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  div {
    display: flex;
    gap: 10px;

    svg {
      color: #a0a8b8;
    }

    span {
      color: white;
      cursor: pointer;
      transition: 0.4s ease;
      &:hover {
        color: #a0a8b8;
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
