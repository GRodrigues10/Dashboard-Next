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
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const router = useRouter();

  const logIn = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) newErrors.email = "erro";
    if (!password.trim()) newErrors.password = "erro";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    router.push("/home");
  };

  return (
    <LogInContainer>
      <h1>Painel de Vendas</h1>
      <LogInDisplay>
        <InputField $error={!!errors.email}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputField>

        <InputField $error={!!errors.password}>
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
