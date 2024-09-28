import { useState } from "react";

export default function Pokedex() {
  // Sample data for illustration
  const pokemonData = new Array(12).fill({
    id: 25,
    name: "Pikachu",
    type: "Eléctrico",
    imageUrl:
      "data:image/jpeg;base64,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",
  });
  return (
    <div className="container mx-auto">
      <div className="mt-10  w-full rounded-lg bg-black/70 p-8">
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Pokedex</h1>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search pokemon"
              className="rounded-md px-4 py-2 text-black"
            />
            <button className="rounded-md bg-gray-800 px-4 py-2 text-white">
              <i className="fas fa-filter"></i> Type
            </button>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white">
              <i className="fas fa-plus"></i> Create New
            </button>
          </div>
        </div>

        {/* Pokemon Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pokemonData.map((pokemon, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-gray-800 p-4 text-white"
            >
              <img
                src={pokemon.imageUrl}
                alt={pokemon.name}
                className="mb-4 h-24 w-24"
              />
              <h2 className="text-lg font-bold">N° {pokemon.id}</h2>
              <h3 className="text-xl font-semibold">{pokemon.name}</h3>
              <p className="text-sm text-yellow-300">{pokemon.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
