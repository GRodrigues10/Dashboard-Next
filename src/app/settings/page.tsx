"use client";
import React from "react";
import Menu from "@/components/menu/Menu";
import { Sun, Moon, Globe, MessageSquare } from "lucide-react";
import {
  SettingsContainer,
  TopRow,
  ThemeBlock,
  Options,
  LanguageBlock,
  FeedbackBlock,
  SettingsContent,
} from "./Settings.styled";
import { useTheme } from "@/context/Context";


export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <SettingsContainer>
      <Menu />
      <SettingsContent>
        <h1>Configurações</h1>

        <TopRow>
          <ThemeBlock>
            <h2>
              <Sun size={18} style={{ marginRight: 6 }} /> Tema
            </h2>
            <Options>
              <label>
                <input
                  type="radio"
                  name="theme"
                  value="light"
                  checked={theme === "light"}
                  onChange={() => toggleTheme("light")}
                />
                Claro
              </label>
              <label>
                <input
                  type="radio"
                  name="theme"
                  value="dark"
                  checked={theme === "dark"}
                  onChange={() => toggleTheme("dark")}
                />
                Escuro
              </label>
            </Options>
          </ThemeBlock>

          <LanguageBlock>
            <h2>
              <Globe size={18} style={{ marginRight: 6 }} /> Idioma
            </h2>
            <select>
              <option>Português</option>
              <option>Inglês</option>
              <option>Espanhol</option>
            </select>
          </LanguageBlock>
        </TopRow>

        <FeedbackBlock>
          <h2>
            <MessageSquare size={18} style={{ marginRight: 6 }} /> Feedback
          </h2>
          <textarea placeholder="Conte-nos o que achou da aplicação..." />
          <button>Enviar Feedback</button>
        </FeedbackBlock>
      </SettingsContent>
    </SettingsContainer>
  );
}
