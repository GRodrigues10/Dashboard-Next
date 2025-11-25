import { render, screen } from "@testing-library/react";
import Card from "../src/components/card/Card";
import { formatPrice } from "@/utils/formatprice";

test("renderiza o Card de Receita Total", () => {
  render(
    <Card title="Receita Total" price={formatPrice(126900)} percent="3,4" />
  );
  expect(screen.getByText("Receita Total")).toBeInTheDocument();
});

test("Renderiza o Card de Despesa Total", () => {
  render(
    <Card title="Despesa Total" price={formatPrice(50200)} percent="1,4" />
  );
  expect(screen.getByText("Despesa Total")).toBeInTheDocument();
});

test("Renderiza o Card de Saldo Atual", () => {
  render(<Card title="Saldo Atual" price={formatPrice(76700)} percent="4,2" />);
  expect(screen.getByText("Saldo Atual")).toBeInTheDocument();
});

test("Renderiza o Card de Entrada do mês", () => {
  render(
    <Card title="Entrada do mês" price={formatPrice(8700)} percent="11,1" />
  );
  expect(screen.getByText("Entrada do mês")).toBeInTheDocument();
});

test("Renderiza o Card de Despesa do mês", () => {
  render(
    <Card title="Despesa do mês" price={formatPrice(4300)} percent="5,5" />
  );
  expect(screen.getByText("Despesa do mês")).toBeInTheDocument();
});
test("Renderiza o Card de Saldo líquido", () => {
  render(
    <Card title="Saldo Líquido" price={formatPrice(4400)} percent="5,6" />
  );
  expect(screen.getByText("Saldo Líquido")).toBeInTheDocument();
});
