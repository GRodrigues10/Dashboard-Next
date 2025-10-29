import { TopCardContainer, TopCardContent, TopCardText } from "./TopCard.styled";

function TopCard() {
  return (
    <TopCardContainer>
      <h2>Produtos em Alta</h2>
      <TopCardContent>
        <TopCardText>
          <p>Xbox Series X</p>
          <p>PlayStation 5</p>
          <p>Bicicleta Trek</p>
          <p>Apple Watch</p>
        </TopCardText>

        <TopCardText>
          <p>R$ 5,400</p>
          <p>R$ 5,100</p>
          <p>R$ 3,200</p>
          <p>R$ 1,750</p>
        </TopCardText>
      </TopCardContent>
    </TopCardContainer>
  );
}

export default TopCard;
