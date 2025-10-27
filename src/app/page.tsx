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
} from "./page.styled";
import CircleGraph from "@/components/circlegraph/CircleGraph";
import LineGraph from "@/components/linegraph/LineGraph";
import { TopCardContainer } from "@/components/topcard/TopCard.styled";
import TopCard from "@/components/topcard/TopCard";
import BarGraph from "@/components/bargraph/BarGraph";

export default function Home() {
  return (
    <HomeContainer>
      <Menu />
      <HomeContent>
        <HomePart1>
          <Cards>
            <Card title="Receita" price="$12,450" percent="3,2%" />
            <Card title="Despesa" price="$4,560" percent="1,4%" />
          </Cards>
          <LineGraph />

          <TopCards>
            <TopCard />
            <TopCard />
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
