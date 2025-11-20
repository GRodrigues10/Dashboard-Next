"use client";
import Menu from "@/components/menu/Menu";
import {
  Balance,
  FinancialContainer,
  FinancialContent,
  FinancialContentContainer,
  FinancialContentContainer2,
  FinancialContentContainer3,
} from "./Financial.styled";
import Card from "@/components/card/Card";
import FinancialCategory from "@/components/financialcategory/FinancialCategory";
import CashFlowCard from "@/components/cashflowcard/CashFlowCard";
import ClientCardData from "@/components/clientcarddata/ClientCardData";
import DataSalesCard from "@/components/datasales/DataSalesCard";
 import "@/i18n";
import { useTranslation } from "react-i18next";


function Page() {
  const { t } = useTranslation();
  const transactions = [
  { date: "03/11/2025", product: "Xbox Series X", category: "Eletrônicos", amount: "R$ 4.500" },
  { date: "02/11/2025", product: "PS5", category: "Eletrônicos", amount: "R$ 4.200" },
  { date: "01/11/2025", product: "Cadeira Gamer", category: "Móveis", amount: "R$ 1.200" },
];
  return (
    <FinancialContainer>
      <Menu />
      <FinancialContent>
        <FinancialContentContainer>
          <Balance>
            <Card
              title={t('currentBalance')}
              price="R$ 78.200"
              percent="4,2%"
              reduced
            />
            <Card
              title={t('monthlyIncome')}
              price="R$ 8.700"
              percent="11,1%"
              reduced
            />
            <Card
              title={t('monthlyExpenses')}
              price="R$ 4.300"
              percent="5,5%"
              reduced
            />
            <Card
              title={t('netBalance')}
              price="R$ 4.400"
              percent="5,6%"
              reduced
            />
          </Balance>
         
        </FinancialContentContainer>

        <FinancialContentContainer2>
           <CashFlowCard />
          <FinancialCategory />
          {/* <FinancialCategory /> */}
        </FinancialContentContainer2>

        <FinancialContentContainer3>
      
<DataSalesCard />
        </FinancialContentContainer3>
      </FinancialContent>
    </FinancialContainer>
  );
}

export default Page;
