import { TopCardContainer, TopCardContent, TopCardText } from "./TopCard.styled";

function TopCard() {
  return (
    <TopCardContainer>
      <h2>Produtos em Alta</h2>
      <TopCardContent>
        <TopCardText>
          <p>Produto A</p>
          <p>Produto B</p>
          <p>Produto C</p>
          <p>Produto D</p>
        </TopCardText>

        <TopCardText>
          <p>$5,400</p>
          <p>$3,100</p>
          <p>$2,200</p>
          <p>$1,750</p>
        </TopCardText>
      </TopCardContent>
    </TopCardContainer>
  );
}

export default TopCard;
