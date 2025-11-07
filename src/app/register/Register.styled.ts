import styled from "styled-components";

export const RegisterContainer = styled.div`
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  /* background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    color: white;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
  height: 100vh;

    h1 {
      font-size: 2.8rem;
    }
  }
`;

export const RegisterDisplay = styled.div`
  width: 100%;
  max-width: 520px;
  background-color: #1e293b;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 36px;
  gap: 16px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  min-height: 480px; 
`;

export const NameRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    > div {
      width: 100%;
    }
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: #f8fafc;
    margin-bottom: 6px;
    font-size: 0.95rem;
  }

  input {
    background-color: #2e3a50;
    color: #f8fafc;
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #273449;
    font-size: 1rem;
    transition: 0.3s;

    &:focus {
      outline: none;
      border-color: #38bdf8;
      background-color: #334155;
    }

    &::placeholder {
      color: #94a3b8;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 16px;
  background-color: #38bdf8;
  color: #0f172a;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s, transform 0.15s;

  &:hover {
    background-color: #0ea5e9;
    transform: scale(1.03);
  }

  &:active {
    background-color: #0284c7;
  }
`;

export const RegisterUser = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
span{
     color: #e2e8f0;
}
  .enter {
    font-size: 0.9rem;
    color: #e2e8f0;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #60a5fa;
    }
  }

  @media screen and (min-width: 768px) {
    span {
      font-size: 1rem;
    }
  }
`;
