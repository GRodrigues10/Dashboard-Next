"use client";

import { useState } from "react";
import { InputField, SubmitButton } from "./Register.styled";
import Link from "next/link";
import {
  RegisterContainer,
  RegisterDisplay,
  RegisterUser,
  NameRow,
} from "./Register.styled";

export default function Page() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!name || !lastname || !email || !password || !confirmPassword) {
      setError("Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    const fullName = `${name} ${lastname}`;

    try {
      const res = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao cadastrar.");
        return;
      }

      alert("Usuário cadastrado com sucesso!");
      window.location.href = "/"; // redireciona para login
    } catch (error) {
      setError("Erro no servidor.");
    }
  };

  return (
    <RegisterContainer>
      <h1>Cadastrar</h1>
      <RegisterDisplay>
        <NameRow>
          <InputField>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputField>

          <InputField>
            <label>Sobrenome</label>
            <input
              type="text"
              placeholder="Digite seu sobrenome"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </InputField>
        </NameRow>

        <InputField>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
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

        <InputField>
          <label>Confirmar Senha</label>
          <input
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputField>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <SubmitButton onClick={handleRegister}>
          Cadastrar
        </SubmitButton>

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
