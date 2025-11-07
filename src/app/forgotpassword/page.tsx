"use client";
import { InputField, SubmitButton } from "./ForgotPassword.styled";
import Link from "next/link";
import { ForgotContainer, ForgotDisplay } from "./ForgotPassword.styled";

export default function Page() {
  return (
    <ForgotContainer>
      <h1>Esqueceu a Senha?</h1>
      <ForgotDisplay>
        <p>Digite e confirme sua nova senha abaixo.</p>

        <InputField>
          <label>Nova Senha</label>
          <input type="password" placeholder="Digite sua nova senha" />
        </InputField>

        <InputField>
          <label>Confirmar Senha</label>
          <input type="password" placeholder="Confirme sua nova senha" />
        </InputField>

        <Link href="/">
          <SubmitButton>Atualizar Senha</SubmitButton>
        </Link>
      </ForgotDisplay>
    </ForgotContainer>
  );
}
