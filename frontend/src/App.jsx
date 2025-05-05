import React from "react";
import SaveForm from "./SaveForm";
import SearchForm from "./SearchForm";

export default function App() {
  return (
    <div className="min-h-screen bg-white p-4 font-sans">
      <header className="border-b pb-4 mb-4 text-center">
        <h1 className="text-xl font-bold text-gray-800">Smurph's Tool App 🧰</h1>
        <p className="text-sm text-gray-500">Powered by IronSpark</p>
      </header>

      <main className="max-w-md mx-auto grid gap-6">
        <div className="p-4 border rounded shadow-sm">
          <h2 className="text-md font-semibold mb-2">Save Item Location</h2>
          <SaveForm />
        </div>

        <div className="p-4 border rounded shadow-sm">
          <h2 className="text-md font-semibold mb-2">Find Item Location</h2>
          <SearchForm />
        </div>
      </main>
    </div>
  );
}
