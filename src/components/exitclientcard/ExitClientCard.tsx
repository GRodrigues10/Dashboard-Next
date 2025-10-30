import React from "react";
import { ChevronDown, User } from "lucide-react";
import { ExitClientContainer } from "./ExitClientCard.styled";

function ExitClientCard() {
  return (
    <ExitClientContainer>
      <h1>Clientes Perdidos</h1>
      <h2>19</h2>
      <p>
        <ChevronDown/>
        1,4%
      </p>
    </ExitClientContainer>
  );
}

export default  ExitClientCard;
