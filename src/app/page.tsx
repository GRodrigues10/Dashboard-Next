'use client'
import { InputField, LogInContainer, LogInDisplay, LogInUser, SubmitButton } from "./LogIn.styled";
import Link from "next/link";

export default function Page() {
  return (
    <LogInContainer>
      <h1>Painel de Vendas</h1>
      <LogInDisplay>
        <InputField>
          <label>Email</label>
          <input type="email" placeholder="Digite seu email" />
        </InputField>
        <InputField>
          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />
        </InputField>
        <Link href="/home">
          <SubmitButton>Entrar</SubmitButton>
        </Link>
        <LogInUser>
          <span>Criar conta</span>
          <span>Esqueceu a senha?</span>
        </LogInUser>
      </LogInDisplay>
    </LogInContainer>
  );
}
