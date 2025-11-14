import { useEffect, useState } from "react";
import {
  TopCardContainer,
  TopCardContent,
  TopCardText,
} from "./TopCard.styled";
import { fetchSales } from "@/api/api";
import { formatPrice } from "@/utils/formatprice";
import { SalesTypes } from "@/utils/types";

function TopCard() {
  const [products, setProducts] = useState<SalesTypes[]>([]);
  const fetchData = async () => {
    const data: SalesTypes[] = await fetchSales();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const topProducts = products.filter((p) => p.rate > 8).slice(0, 4);

  return (
    <TopCardContainer>
      <h2>Produtos em Alta</h2>
      <TopCardContent>
        <TopCardText>
          {topProducts.map((p) => (
            <p key={p.id}>{p.product}</p>
          ))}
        </TopCardText>

        <TopCardText>
          {topProducts.map((p) => (
            <p key={p.id}>{formatPrice(p.price)}</p>
          ))}
        </TopCardText>
      </TopCardContent>
    </TopCardContainer>
  );
}

export default TopCard;
