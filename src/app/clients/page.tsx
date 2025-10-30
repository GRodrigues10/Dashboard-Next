"use client";
import Menu from "@/components/menu/Menu";
import {
  ClientCardContainer,
  ClientCardContainer2,
  ClientCardContainerMain,
  ClientContent,
  ClientsContainer,
} from "./Clients.styled";
import ClientCard from "@/components/clientcard/ClientCard";
import NewClientCard from "@/components/newclientcard/NewClientCard";
import VipCard from "@/components/vipcard/VipCard";
import { StatusClientCard } from "@/components/statusclientcard/statusclientcard";
import ExitClientCard from "@/components/exitclientcard/ExitClientCard";
import ClientCardData from "@/components/clientcarddata/ClientCardData";

function page() {
  return (
    <ClientsContainer>
      <Menu />
      <ClientContent>
        <ClientCardContainerMain>
          <ClientCardContainer>
            <ClientCard />
            <NewClientCard />
          </ClientCardContainer>
          <StatusClientCard />
          <ClientCardContainer2>
            <ExitClientCard />
            <VipCard />
          </ClientCardContainer2>
        </ClientCardContainerMain>
            <ClientCardData/>
      </ClientContent>
  
    </ClientsContainer>
  );
}

export default page;
