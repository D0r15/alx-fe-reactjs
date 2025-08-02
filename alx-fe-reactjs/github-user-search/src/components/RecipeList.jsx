import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const { recipes, loading, error, loadRecipes } = useRecipeStore();

  useEffect(() => {
    loadRecipes();
  }, []);

  if (loading) return <div>Loading recipes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;