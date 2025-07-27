import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = recipeStore(state =>
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorite recipes yet.</p>
      ) : (
        favorites.map(recipe => (
          recipe && (
            <div key={recipe.id} className="border p-4 rounded mb-4 shadow">
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
              <p className="text-gray-700">{recipe.description}</p>
              <Link to={`/recipes/${recipe.id}`} className="text-blue-500 underline">View</Link>
            </div>
          )
        ))
      )}
    </div>
  );
};

export default FavoritesList;