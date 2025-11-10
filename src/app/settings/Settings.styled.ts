import styled from "styled-components";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

export const SettingsContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px 60px;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
    margin-top: 100px;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.3rem;
      margin-top: 0px;
    }
    padding-inline-start: 100px !important;
  }

  @media (max-width: 900px) {
    padding: 20px;
    gap: 30px;
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 3rem;
    }
    padding-inline-start: 140px !important;
  }
`;

export const TopRow = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
`;

export const ThemeBlock = styled.div`
  flex: 1;
  min-width: 280px;
  background: ${({ theme }) => theme.cardBackground};
  padding: 24px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};

  h2 {
    font-size: 1.3rem;
    margin-bottom: 14px;
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 24px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 1rem;
    color: ${({ theme }) => theme.text};

    input[type="radio"] {
      transform: scale(1.2);
      accent-color: ${({ theme }) => theme.primary};
      cursor: pointer;
    }

    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;

export const LanguageBlock = styled(ThemeBlock)`
  select {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};
    outline: none;
    cursor: pointer;

    &:hover {
      border-color: ${({ theme }) => theme.primary};
    }
  }
`;

export const FeedbackBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.cardBackground};
  padding: 30px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};

  h2 {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
  }

  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    padding: 12px;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &::placeholder {
      color: ${({ theme }) =>
        theme.mode === "dark" ? "#cbd5e1" : "#64748b"};
      opacity: 0.9;
      transition: color 0.3s ease;
    }
  }

  button {
    background: ${({ theme }) => theme.primary};
    border: none;
    color: ${({ theme }) => theme.buttonText};
    padding: 10px 22px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: ${({ theme }) => theme.secondary};
      transform: scale(1.03);
    }
  }
`;
