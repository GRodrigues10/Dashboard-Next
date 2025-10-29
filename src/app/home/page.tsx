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
import { TopCardContainer } from "@/components/topcard/TopCard.styled";
import TopCard from "@/components/topcard/TopCard";
import BarGraph from "@/components/bargraph/BarGraph";
import PizzaGraph from "@/components/pizzagraph/PizzaGraph";

export default function Home() {
  return (
    <HomeContainer>
      <Menu/>
      <HomeContent>
        <HomePart1>
          <Cards>
            <Card title="Receita" price="R$ 12,450" percent="3,2%" />
            <Card title="Despesa" price="R$ 4,560" percent="1,4%" />
          </Cards>
          <LineGraph />

          <TopCards>
            <TopCard />
            <PizzaGraph/>
          </TopCards>
        </HomePart1>

        <HomePart2>
          <CircleGraph />
          <BarGraph />
        </HomePart2>
      </HomeContent>
    </HomeContainer>
  );
}
