 import React from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p className="text-gray-500">No matching recipes found.</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className="p-4 border rounded-md shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold mb-1">{recipe.title}</h3>
          <p className="text-sm text-gray-600 mb-1">Time: {recipe.cookingTime} mins</p>
          <p className="text-sm text-gray-600">Ingredients: {recipe.ingredients.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;