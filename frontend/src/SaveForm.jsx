import React, { useState } from "react";

export default function SaveForm() {
  const [item, setItem] = useState("");
  const [location, setLocation] = useState("");

  const handleSave = () => {
    if (item && location) {
      localStorage.setItem(item.toLowerCase(), location);
      alert(`Saved: ${item} → ${location}`);
      setItem("");
      setLocation("");
    }
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Item Name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
      <button
        onClick={handleSave}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  );
}
