import styled from "styled-components";

export const MenuContainer = styled.aside`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  background-color: #1e293b;

  .mobile-dashboard-icon {
    position: absolute;
    color: white;
    height: 80px;
    left: 15px;
    width: 2rem;
  }

  .menu-icon {
    position: absolute;
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
    height: 100vh;
    background-color: #1e293b;
    flex-direction: column;
    align-items: center;
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
  width: 300px;
  height: 100vh;
  display: none;
  flex-direction: column;
  gap: 40px;
  color: white;
  padding: 20px;
  background-color: #192433;
  padding-top: 80px;

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

  /* .x {
    position: absolute;
    right: 10px;
    top: 20px;
    
      color: white;
      cursor: pointer;
      transition: .4s ease;
      &:hover{
        color: #a0a8b8;
      }
  
  } */
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
