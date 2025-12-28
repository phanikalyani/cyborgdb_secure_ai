import React, { useState, useEffect } from "react";
import "./app.css";

type Role = "healthcare" | "fintech";

interface User {
  email: string;
  role: Role;
  token: string;
}

const API_BASE = "http://localhost:8000"; // backend API

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("healthcare");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  /* ---------------- AUTH ---------------- */

  const login = async () => {
    // demo auth (replace with real auth later)
    const fakeToken = "demo-jwt-token";
    setUser({ email, role, token: fakeToken });
  };

  const logout = () => {
    setUser(null);
    setResults([]);
  };

  /* ---------------- SEARCH API ---------------- */

  const secureSearch = async () => {
    if (!query) return;

    const res = await fetch(`${API_BASE}/search?q=${query}`, {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    });

    const data = await res.json();
    setResults(data?.results || []);
  };

  /* ---------------- UI ---------------- */

  if (!user) {
    return (
      <div className="auth-container">
        <h1>Secure AI Platform</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value as Role)}>
          <option value="healthcare">Healthcare</option>
          <option value="fintech">Fintech</option>
        </select>

        <button onClick={login}>Login / Signup</button>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header>
        <h2>{role === "healthcare" ? "Healthcare Dashboard" : "Fintech Dashboard"}</h2>
        <button onClick={logout}>Logout</button>
      </header>

      <section className="search-section">
        <input
          placeholder={
            role === "healthcare"
              ? "Search patient records..."
              : "Search transactions / fraud signals..."
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={secureSearch}>Secure Search</button>
      </section>

      <section className="results">
        {results.length === 0 && <p>No results yet</p>}

        {results.map((r, idx) => (
          <div key={idx} className="card">
            <pre>{JSON.stringify(r, null, 2)}</pre>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;





import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./app.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root container missing in index.html");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
