"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import styled, {
  ThemeProvider as StyledProvider,
  createGlobalStyle,
  DefaultTheme,
} from "styled-components";

// 🔹 1. Define os temas
export const lightTheme = {
  mode:'light',
  background: "#f8fafc",      
  text: "#0f172a",            
  primary: "#0284c7",        
  secondary: "#0369a1",      
  cardBackground: "white",   
  inputBackground: "#ffffff",   
  border: "#cbd5e1",          
  buttonText: "#ffffff",       
  shadow: "0 0 12px rgba(0, 0, 0, 0.1)",
};

export const darkTheme = {
  mode:'dark',
  background: "#0f172a",     
  text: "#e2e8f0",           
  primary: "#38bdf8",      
  secondary: "#60a5fa",     
  cardBackground: "#1e293b", 
  inputBackground: "#1e293b",
  border: "#334155",         
  buttonText: "#0f172a",
  shadow: "0 0 10px rgba(0, 0, 0, 0.25)",
};


// 🔹 2. Tipagem do tema
declare module "styled-components" {
  export interface DefaultTheme {
    mode: string,
    background: string;
    text: string;
    primary: string;
    secondary: string;
    cardBackground: string;
    inputBackground: string;
    border: string;
    buttonText: string;
    shadow: string;
  }
}

// 🔹 3. Tipagem do contexto
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: (newTheme: "light" | "dark") => void;
};

// 🔹 4. Cria o contexto
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// 🔹 5. Estilo global com transição suave
const GlobalStyle = createGlobalStyle`
  * {
    transition: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.4s ease, color 0.4s ease;
  }
`;

// 🔹 6. Tipagem das props
interface ThemeProviderProps {
  children: ReactNode;
}

// 🔹 7. Provider do tema
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = (newTheme: "light" | "dark") => setTheme(newTheme);

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledProvider theme={themeMode}>
        <GlobalStyle />
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
}

// 🔹 8. Hook customizado pra usar o tema
export const useTheme = () => useContext(ThemeContext);

// 🔹 9. Exemplo de componente com tema aplicado
export const Card = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.border};
  transition: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease;
`;
