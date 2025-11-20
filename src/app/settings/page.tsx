"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
import '@/i18n';

export default function SettingsPage() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const [feedback, setFeedback] = useState("");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const sendFeedback = () => {
    if (!feedback.trim()) {
      alert("Escreva uma mensagem antes de enviar.");
      return;
    }

    emailjs
      .send(
        "service_256rbgi",     // coloque o que veio no EmailJS
        "template_uiff3jg",    // coloque o ID do template "Feedback"
        {
          message: feedback,  // variável usada no template
        },
        "YUwRXf0TSw3I7_wyr"      // coloque sua public key
      )
      .then(() => {
        alert("Feedback enviado com sucesso!");
        setFeedback("");
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        alert("Erro ao enviar o feedback.");
      });
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

          <textarea
            placeholder={t("tellUsWhatYouThinkAboutTheApp")}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <button onClick={sendFeedback}>
            {t("sendFeedback")}
          </button>
        </FeedbackBlock>
      </SettingsContent>
    </SettingsContainer>
  );
}
