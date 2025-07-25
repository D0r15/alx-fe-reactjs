import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'; 

const App = () => {
  return (
    <Router>
      <div className="max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Recipe App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          <Route path="/recipes/:id" element={<RecipeDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;