import React, { useState } from "react";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = localStorage.getItem(query.toLowerCase());
    setResult(found || "Not found");
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Search Item"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
      <button
        onClick={handleSearch}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Search
      </button>
      {result && (
        <div className="text-sm text-gray-700">Location: {result}</div>
      )}
    </div>
  );
}
