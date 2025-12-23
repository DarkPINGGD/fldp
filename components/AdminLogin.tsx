"use client";

import { useState } from "react";

export default function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password === "admin123") {
      onLogin();
    } else {
      alert("Wrong password!");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter admin password"
        style={{ padding: "10px", fontSize: "18px" }}
      />
      <button type="submit" style={{ padding: "10px 20px", marginLeft: "10px", fontSize: "18px" }}>Login</button>
    </form>
  );
}
