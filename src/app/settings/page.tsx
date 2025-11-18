"use client";

import React from "react";
import Menu from "@/components/menu/Menu";
import { Sun, Globe, MessageSquare } from "lucide-react";
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
import { useTranslation } from "react-i18next";
import '@/i18n'; // importa i18n no client

export default function SettingsPage() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <SettingsContainer>
      <Menu />
      <SettingsContent>
        <h1>{t("settings")}</h1>

        <TopRow>
          <ThemeBlock>
            <h2>
              <Sun size={18} style={{ marginRight: 6 }} /> {t("theme")}
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
                {t("light")}
              </label>
              <label>
                <input
                  type="radio"
                  name="theme"
                  value="dark"
                  checked={theme === "dark"}
                  onChange={() => toggleTheme("dark")}
                />
                {t("dark")}
              </label>
            </Options>
          </ThemeBlock>

          <LanguageBlock>
            <h2>
              <Globe size={18} style={{ marginRight: 6 }} /> {t("language")}
            </h2>
            <select value={i18n.language} onChange={handleLanguageChange}>
              <option value="pt">{t("portugues")}</option>
              <option value="en">{t("english")}</option>
              <option value="es">{t("spanish")}</option>
            </select>
          </LanguageBlock>
        </TopRow>

        <FeedbackBlock>
          <h2>
            <MessageSquare size={18} style={{ marginRight: 6 }} /> {t("feedback")}
          </h2>
          <textarea placeholder={t("tellUsWhatYouThinkAboutTheApp")} />
          <button>{t("sendFeedback")}</button>
        </FeedbackBlock>
      </SettingsContent>
    </SettingsContainer>
  );
}
