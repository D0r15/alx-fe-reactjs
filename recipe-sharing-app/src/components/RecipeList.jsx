 import useRecipeStore from './recipeStore';
 import { Link } from 'react-router-dom';


const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Recipes</h2>
      {recipes.length === 0 && <p>No recipes yet.</p>}
      {recipes.map(recipe => (
        <div key={recipe.id} className="mb-3 p-2 border rounded shadow">
          <Link to={`/recipes/${recipe.id}`} className="text-blue-500 font-semibold hover:underline">
            {recipe.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;