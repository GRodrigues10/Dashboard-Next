'use client'
import { InputField, RegisterContainer, RegisterDisplay, RegisterUser, SubmitButton } from "./Register.styled";
import Link from "next/link";

export default function Page() {
  return (
    <RegisterContainer>
      <h1>Painel de Vendas</h1>
      <RegisterDisplay>
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
        <RegisterUser>
          <span>Criar conta</span>
          <span>Esqueceu a senha?</span>
        </RegisterUser>
      </RegisterDisplay>
    </RegisterContainer>
  );
}
