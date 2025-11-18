"use client";

import { useState } from "react";
import {
  InputField,
  LogInContainer,
  LogInDisplay,
  LogInUser,
  SubmitButton,
} from "./LogIn.styled";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const logIn = async () => {
    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error);
      return;
    }

    // Login OK → redireciona para home
    router.push("/home");
  };

  return (
    <LogInContainer>
      <h1>Painel de Vendas</h1>

      <LogInDisplay>
        <InputField>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputField>

        <InputField>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputField>

        <SubmitButton onClick={logIn}>Entrar</SubmitButton>

        <LogInUser>
          <Link href="/register">
            <span>Criar conta</span>
          </Link>

          <Link href="/forgotpassword">
            <span>Esqueceu a senha?</span>
          </Link>
        </LogInUser>
      </LogInDisplay>
    </LogInContainer>
  );
}
