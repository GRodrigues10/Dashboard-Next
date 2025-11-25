import { formatPrice } from "@/utils/formatprice";

describe("formatPrice()", () => {
  test("formata valores pequenos corretamente", () => {
    expect(formatPrice(0)).toBe("R$\u00A00,00");
    expect(formatPrice(5)).toBe("R$\u00A05,00");
  });

  test("formata valores padrão corretamente", () => {
    expect(formatPrice(1200)).toBe("R$\u00A01.200,00");
  });

  test("formata valores grandes corretamente", () => {
    expect(formatPrice(999999)).toBe("R$\u00A0999.999,00");
  });
});
