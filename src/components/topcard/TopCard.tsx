import {
  TopCardContainer,
  TopCardContent,
  TopCardText,
} from "./TopCard.styled";
import { formatPrice } from "@/utils/formatprice";
import { SalesTypes } from "@/utils/types";
import "@/i18n";
import { useTranslation } from "react-i18next";

function TopCard() {
  const { t } = useTranslation();
  const sales: SalesTypes[] = [
    {
      id: 1,
      date: "05/01/2025",
      product: "Perfume Dior Sauvage",
      price: 3500,
      rate: 7,
      month: "Jan",
      category: "Beleza",
      sold: 100,
    },
    {
      id: 2,
      date: "12/01/2025",
      product: "Base MAC Studio Fix",
      price: 4200,
      rate: 6.8,
      month: "Jan",
      category: "Beleza",
      sold: 100,
    },
    {
      id: 3,
      date: "08/02/2025",
      product: "Camiseta Nike Dry-Fit",
      price: 2800,
      rate: 7.2,
      month: "Fev",
      category: "Roupas",
      sold: 150,
    },
    {
      id: 4,
      date: "15/02/2025",
      product: "Tênis Adidas Ultraboost",
      price: 3000,
      rate: 7.6,
      month: "Fev",
      category: "Roupas",
      sold: 150,
    },
    {
      id: 5,
      date: "03/03/2025",
      product: "Apple Watch",
      price: 7200,
      rate: 9.7,
      month: "Mar",
      category: "Eletrônicos",
      sold: 50,
    },
    {
      id: 6,
      date: "20/03/2025",
      product: "iPhone 15 Pro",
      price: 6800,
      rate: 8.9,
      month: "Mar",
      category: "Eletrônicos",
      sold: 50,
    },
    {
      id: 7,
      date: "07/04/2025",
      product: "PlayStation 5",
      price: 9000,
      rate: 9.4,
      month: "Abr",
      category: "Eletrônicos",
      sold: 100,
    },
    {
      id: 8,
      date: "18/04/2025",
      product: "Xbox Series X",
      price: 8500,
      rate: 9.5,
      month: "Abr",
      category: "Eletrônicos",
      sold: 100,
    },
    {
      id: 9,
      date: "10/05/2025",
      product: "Bicicleta Caloi Elite",
      price: 3500,
      rate: 6.1,
      month: "Mai",
      category: "Esportes",
      sold: 150,
    },
    {
      id: 10,
      date: "22/05/2025",
      product: "Bola de Futebol Adidas",
      price: 500,
      rate: 7.4,
      month: "Mai",
      category: "Esportes",
      sold: 150,
    },
    {
      id: 11,
      date: "05/06/2025",
      product: "Sofá Retrátil 4 Lugares",
      price: 4000,
      rate: 7.3,
      month: "Jun",
      category: "Móveis",
      sold: 50,
    },
    {
      id: 12,
      date: "17/06/2025",
      product: "Mesa de Escritório Moderna",
      price: 1500,
      rate: 6.0,
      month: "Jun",
      category: "Móveis",
      sold: 50,
    },
    {
      id: 13,
      date: "08/07/2025",
      product: 'TV Samsung 65"',
      price: 6500,
      rate: 7.8,
      month: "Jul",
      category: "Eletrônicos",
      sold: 50,
    },
    {
      id: 14,
      date: "20/07/2025",
      product: "Notebook Dell XPS 13",
      price: 7500,
      rate: 6.7,
      month: "Jul",
      category: "Eletrônicos",
      sold: 50,
    },
  ];

  const topProducts = sales.filter((p) => p.rate > 8).slice(0, 4);

  return (
    <TopCardContainer>
      <h2>{t("topProducts")}</h2>
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
