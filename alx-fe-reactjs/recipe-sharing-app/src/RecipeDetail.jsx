import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((r) => r.id.toString() === id);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
      <p className="text-gray-600">Cooking Time: {recipe.cookingTime} mins</p>
      <p className="text-gray-700 mt-2">Ingredients: {recipe.ingredients.join(', ')}</p>
    </div>
  );
};

export default RecipeDetail;