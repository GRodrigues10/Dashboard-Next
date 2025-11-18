import React from "react";
import { ClientContainer } from "./ClientCard.styled";
import { User } from "lucide-react";
import "@/i18n";
import { useTranslation } from "react-i18next";
 
function ClientCard() {
   const { t } = useTranslation();
  return (
    <ClientContainer>
      <h1>{t('totalCustomers')}</h1>
      <h2>2.456</h2>
      <p>
        <User />
        1946
      </p>
    </ClientContainer>
  );
}

export default ClientCard;
