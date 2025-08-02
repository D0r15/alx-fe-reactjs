// src/services/api.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchRecipes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) throw new Error("Failed to fetch recipes");
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const addRecipe = async (recipe) => {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    });
    if (!response.ok) throw new Error("Failed to add recipe");
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};