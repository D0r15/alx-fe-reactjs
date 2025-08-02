import create from 'zustand';
import { fetchRecipes, addRecipe as apiAddRecipe } from '../services/api';

const useRecipeStore = create((set) => ({
  recipes: [],
  loading: false,
  error: null,

  // Fetch recipes from API
  loadRecipes: async () => {
    set({ loading: true });
    try {
      const data = await fetchRecipes();
      set({ recipes: data, error: null });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  // Add recipe via API
  addRecipe: async (newRecipe) => {
    set({ loading: true });
    try {
      const savedRecipe = await apiAddRecipe(newRecipe);
      set((state) => ({ recipes: [...state.recipes, savedRecipe], error: null }));
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useRecipeStore;