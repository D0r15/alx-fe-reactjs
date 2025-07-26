import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  selectedIngredient: '',
  maxCookingTime: 0,
  filteredRecipes: [],

  setRecipes: (recipes) => set({ recipes }),

  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedIngredient: (ingredient) => set({ selectedIngredient: ingredient }),
  setMaxCookingTime: (time) => set({ maxCookingTime: time }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) => {
        const matchesTitle = recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase());
        const matchesIngredient = state.selectedIngredient
          ? recipe.ingredients.includes(state.selectedIngredient)
          : true;
        const matchesTime =
          state.maxCookingTime > 0 ? recipe.cookingTime <= state.maxCookingTime : true;

        return matchesTitle && matchesIngredient && matchesTime;
      }),
    })),
}));

export default useRecipeStore;