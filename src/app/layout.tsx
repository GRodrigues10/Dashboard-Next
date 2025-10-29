// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Painel de vendas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          {children} 
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
