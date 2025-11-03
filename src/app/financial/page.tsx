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
 

function Page() {

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
              title="Saldo atual"
              price="R$ 82.300"
              percent="4,2%"
              reduced
            />
            <Card
              title="Entrada do mês"
              price="R$ 8.920"
              percent="3,2%"
              reduced
            />
            <Card
              title="Despesa do mês"
              price="R$ 6.920"
              percent="2,2%"
              reduced
            />
            <Card
              title="Saldo Líquido"
              price="R$ 6.920"
              percent="2,2%"
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
      
<DataSalesCard transactions={transactions} />
        </FinancialContentContainer3>
      </FinancialContent>
    </FinancialContainer>
  );
}

export default Page;
