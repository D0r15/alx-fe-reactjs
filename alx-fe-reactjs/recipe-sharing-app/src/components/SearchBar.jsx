import React, { useEffect } from 'react';
import recipeStore from './recipeStore';

const SearchBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedIngredient,
    setSelectedIngredient,
    maxCookingTime,
    setMaxCookingTime,
    filterRecipes,
    favourites,
  } = recipeStore();

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, selectedIngredient, maxCookingTime]);

  return (
    <div className="space-y-4 mb-6">
      <input
        type="text"
        placeholder="Search recipes..."
        className="p-3 border border-gray-300 rounded-md w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        className="p-2 border border-gray-300 rounded-md w-full"
        value={selectedIngredient}
        onChange={(e) => setSelectedIngredient(e.target.value)}
      >
        <option value="">All Ingredients</option>
        <option value="chicken">Chicken</option>
        <option value="beef">Beef</option>
        <option value="vegetarian">Vegetarian</option>
      </select>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Max Cooking Time (mins)</label>
        <input
          type="range"
          min="0"
          max="120"
          step="5"
          value={maxCookingTime}
          onChange={(e) => setMaxCookingTime(Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm text-gray-500">{maxCookingTime || 'Any'} min</span>
      </div>
    </div>
  );
};

export default SearchBar;