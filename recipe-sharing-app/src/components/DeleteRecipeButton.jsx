import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;