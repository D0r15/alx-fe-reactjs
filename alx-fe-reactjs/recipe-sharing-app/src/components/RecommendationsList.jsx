import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = recipeStore((state) => state.recommendations);
  const generateRecommendations = recipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations(); // trigger once when component mounts
  }, [generateRecommendations]);

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p className="text-gray-600">No recommendations yet. Try favoriting some recipes!</p>
      ) : (
        <div className="grid gap-4">
          {recommendations.map((recipe) => (
            <div key={recipe.id} className="border rounded p-4 shadow">
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
              <p className="text-gray-700">{recipe.description}</p>
              <Link to={`/recipes/${recipe.id}`} className="text-blue-500 underline mt-2 block">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;