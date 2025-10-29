import styled from "styled-components";

export const RegisterContainer = styled.div`
padding: 20px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2.3rem;
    color: white;
    font-weight: bold;
    position: relative;
    bottom: 40px;
    text-align: center;
  }

  @media screen and (min-width: 768px){
     h1 {
    font-size: 2.8rem;

     }
  }
`;

export const RegisterDisplay = styled.div`
  width: 100%;
  max-width: 420px;
  height: 420px;
  background-color: #1e293b;
  border-radius: 10px;
  display: flex;
  flex-direction: column; /* empilha os inputs */
  align-items: stretch; /* faz os filhos ocuparem toda a largura */
  justify-content: center;
  padding: 40px;
  gap: 20px; /* espaço entre inputs e botão */

  h2 {
    font-size: 2.3rem;
    color: white;
    /* position: relative;
    bottom: 30px; */
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 10px;
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: #f8fafc;
    margin-bottom: 8px;
    font-size: 1rem;
  }

  input {
    background-color: #2e3a50;
    color: #f8fafc;
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    border: 1px solid #273449;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #38bdf8;
    }

    &::placeholder {
      color: #94a3b8;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  background-color: #38bdf8;
  color: #0f172a;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #60a5fa;
  }

  &:active {
    background-color: #0284c7;
  }
`;

export const RegisterUser = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 20px;

  span {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;

    color: white;
    cursor: pointer;
    text-align: center;
    transition: 0.4s ease;
    &:hover {
      color: #60a5fa;
    }
  }
  @media screen and (min-width: 768px) {
   span{
font-size: 1rem;
   } 
    
  }
`;
