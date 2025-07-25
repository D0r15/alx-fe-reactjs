import useState from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleUpdate} className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block mb-2 border p-1 w-full"
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block mb-2 border p-1 w-full"
        placeholder="Description"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;