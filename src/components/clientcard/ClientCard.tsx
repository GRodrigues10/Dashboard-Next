import React from "react";
import { ClientContainer } from "./ClientCard.styled";
import { User } from "lucide-react";

function ClientCard() {
  return (
    <ClientContainer>
      <h1>Total de Clientes</h1>
      <h2>2.456</h2>
      <p>
        <User />
        1946
      </p>
    </ClientContainer>
  );
}

export default ClientCard;
