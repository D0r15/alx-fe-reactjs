import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'; 
import RecipeStore from './components/recipeStore';
import SearchBar from './components/SearchBar';

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Dummy data for example purposes
    setRecipes([
      { id: 1, title: 'Chicken Curry', cookingTime: 45, ingredients: ['chicken', 'spices'] },
      { id: 2, title: 'Beef Stew', cookingTime: 60, ingredients: ['beef', 'onion'] },
      { id: 3, title: 'Veggie Stir Fry', cookingTime: 20, ingredients: ['vegetarian', 'soy'] },
    ]);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Recipe Finder</h1>
      <SearchBar/>
      <RecipeList />
      <AddRecipeForm/>
      <RecipeStore/>
      <RecipeDetails/>
    

    </div>
  );
};

export default App;