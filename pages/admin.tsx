"use client";

import { useState } from "react";
import AdminLogin from "../components/AdminLogin";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <main style={{ maxWidth: "800px", margin: "50px auto", textAlign: "center" }}>
      {loggedIn ? (
        <div>
          <h1>Admin Panel</h1>
          <p>You can now manage levels.</p>
        </div>
      ) : (
        <AdminLogin onLogin={() => setLoggedIn(true)} />
      )}
    </main>
  );
}
