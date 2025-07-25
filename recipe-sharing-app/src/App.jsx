import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4 text-center">Recipe Book</h1>
        
        {/* Add Recipe Form */}
        <AddRecipeForm />

        {/* Recipe List */}
        <RecipeList />
      </div>
    </div>
  );
};

export default App;