"use client";
import Card from "@/components/card/Card";
import Menu from "@/components/menu/Menu";
import {
  Cards,
  HomeContainer,
  HomeContent,
  HomePart1,
  HomePart2,
  TopCards,
} from "./Home.styled";
import CircleGraph from "@/components/circlegraph/CircleGraph";
import LineGraph from "@/components/linegraph/LineGraph";
import TopCard from "@/components/topcard/TopCard";
import BarGraph from "@/components/bargraph/BarGraph";
import PizzaGraph from "@/components/pizzagraph/PizzaGraph";
import { SalesTypes, ExpensesTypes } from "@/utils/types";
import { useEffect, useState } from "react";
import { fetchSales, fetchExpenses } from "@/api/api";
import { formatPrice } from "@/utils/formatprice";
import { useTranslation } from "react-i18next";


export default function Home() {
const { t } = useTranslation();


  return (
    <HomeContainer>
      <Menu />
      <HomeContent>
        <HomePart1>
          {/* <Cards>
         <Cards> */}
<Cards>
  <Card
    title={t('totalRevenue')}
    price={formatPrice(114900)}
    percent="3,2%" 
  />
   <Card
    title={t('totalExpense')}
    price={formatPrice(47300)}
    percent="1,4%" 
  />
</Cards>

{/* </Cards>
          </Cards> */}

          <LineGraph />

          <TopCards>
            <TopCard />
            <PizzaGraph />
          </TopCards>
        </HomePart1>

        <HomePart2>
          <CircleGraph percent={58.8}/>
          <BarGraph />
        </HomePart2>
      </HomeContent>
    </HomeContainer>
  );
}
