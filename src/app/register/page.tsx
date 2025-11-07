"use client";
import { InputField, SubmitButton } from "./Register.styled";
import Link from "next/link";
import {
  RegisterContainer,
  RegisterDisplay,
  RegisterUser,
  NameRow,
} from "./Register.styled";

export default function Page() {
  return (
    <RegisterContainer>
      <h1>Cadastrar</h1>
      <RegisterDisplay>
        <NameRow>
          <InputField>
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" />
          </InputField>

          <InputField>
            <label>Sobrenome</label>
            <input type="text" placeholder="Digite seu sobrenome" />
          </InputField>
        </NameRow>

        <InputField>
          <label>Email</label>
          <input type="email" placeholder="Digite seu e-mail" />
        </InputField>

        <InputField>
          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />
        </InputField>

        <InputField>
          <label>Confirmar Senha</label>
          <input type="password" placeholder="Confirme sua senha" />
        </InputField>

        <Link href="/">
          <SubmitButton>Cadastrar</SubmitButton>
        </Link>

        <RegisterUser>
          <span>Já tem uma conta?</span>
          <Link href="/">
            <span className="enter">Entrar</span>
          </Link>
        </RegisterUser>
      </RegisterDisplay>
    </RegisterContainer>
  );
}
