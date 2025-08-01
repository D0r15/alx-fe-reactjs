import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  selectedIngredient: '',
  maxCookingTime: 0,
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Setters
  setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedIngredient: (ingredient) => set({ selectedIngredient: ingredient }),
  setMaxCookingTime: (time) => set({ maxCookingTime: time }),

  // Add new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Update existing recipe by ID
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Delete recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Filtering logic
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) => {
        const matchesTitle = recipe.title
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase());

        const matchesIngredient = state.selectedIngredient
          ? recipe.ingredients.includes(state.selectedIngredient)
          : true;

        const matchesTime =
          state.maxCookingTime > 0 ? recipe.cookingTime <= state.maxCookingTime : true;

        return matchesTitle && matchesIngredient && matchesTime;
      }),
    })),

  // Favorites logic
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations logic
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;