import DeleteRecipeButton from './DeleteRecipeButton';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
          <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    );
  };
  export default RecipeDetails;