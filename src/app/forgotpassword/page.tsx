"use client";

import { useState } from "react";
import { InputField, SubmitButton } from "./ForgotPassword.styled";
import Link from "next/link";
import { ForgotContainer, ForgotDisplay } from "./ForgotPassword.styled";

export default function Page() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleReset = async () => {
    if (!email || !newPassword || !confirmPassword) {
      setError("Preencha todos os campos!");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/forgotpassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          newPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao atualizar senha.");
        return;
      }

      alert("Senha atualizada com sucesso!");
      window.location.href = "/"; 
    } catch {
      setError("Erro no servidor.");
    }
  };

  return (
    <ForgotContainer>
      <h1>Esqueceu a Senha?</h1>
      <ForgotDisplay>
        <p>Digite seu email e defina uma nova senha.</p>

        <InputField>
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu email cadastrado"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputField>

        <InputField>
          <label>Nova Senha</label>
          <input
            type="password"
            placeholder="Digite sua nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </InputField>

        <InputField>
          <label>Confirmar Nova Senha</label>
          <input
            type="password"
            placeholder="Confirme sua nova senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </InputField>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <SubmitButton onClick={handleReset}>
          Atualizar Senha
        </SubmitButton>

      </ForgotDisplay>
    </ForgotContainer>
  );
}
