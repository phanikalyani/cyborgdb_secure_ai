"use client";

import { useState } from "react";
import { searchSecure } from "../services/api";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await searchSecure(query);
      setResults(data);
    } catch (err) {
      alert("Search failed");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Secure Encrypted Search</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter sensitive query"
        style={{ width: "300px", padding: "8px" }}
      />

      <button onClick={handleSearch} style={{ marginLeft: 10 }}>
        {loading ? "Searching..." : "Search"}
      </button>

      {results && (
        <pre style={{ marginTop: 20 }}>
          {JSON.stringify(results, null, 2)}
        </pre>
      )}
    </div>
  );
}
