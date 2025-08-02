import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import RecipeList from './components/RecipeList';
import useRecipeStore from './components/recipeStore';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Recipe Sharing App</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/recipes">Recipes</Link></li>
        
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/recipestore" element={<useRecipeStore />} />
    
            {/* Optional: 404 Page */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </main>

        <footer>
          <p>© 2023 Recipe Sharing App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;