import React from "react";
import { ChevronDown, User } from "lucide-react";
import { ExitClientCardContainer } from "./ExitClientCard.styled";
import "@/i18n";
import { useTranslation } from "react-i18next";

function ExitClientCard() {

 const { t } = useTranslation();
  return (
    <ExitClientCardContainer>
      <h1>{t('lostCustomers')}</h1>
      <h2>210</h2>
      <p style={{color:'red'}}>
        <ChevronDown/>
        8,55%
      </p>
    </ExitClientCardContainer>
  );
}

export default  ExitClientCard;
