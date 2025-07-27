import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'; 
import useRecipeStore from './components/recipeStore';
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';
import RecommendationsList from './components/RecommendationsList';
import FavoritesList from './components/FavoritesList';

const App = () => {
  return (
    <Router>
      <div className="max-w-4xl mx-auto p-4">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Recipe Finder</h1>
          <nav className="space-x-4">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <Link to="/favorites" className="text-blue-600 hover:underline">Favorites</Link>
          </nav>
        </header>

        <SearchBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <RecipeList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;