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
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const logIn = async () => {
    if (!email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    const response = await fetch("https://dashboard-api-q91w.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error);
      return;
    }

    router.push("/home");
  };

  return (
    <LogInContainer>
      <h1>Painel de Vendas</h1>

      <LogInDisplay>
        {/* EMAIL */}
        <InputField>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputField>

        {/* SENHA COM OLHO */}
        <InputField>
          <label>Senha</label>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
            {showPassword ? <MdVisibilityOff /> : <MdVisibility /> }
            </span>
          </div>
        </InputField>

        {/* BOTÃO */}
        <SubmitButton onClick={logIn}>Entrar</SubmitButton>

        {/* LINKS */}
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
