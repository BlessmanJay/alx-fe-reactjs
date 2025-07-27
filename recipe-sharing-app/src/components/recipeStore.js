import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [], // All recipes
  searchTerm: "", // What user types in search bar
  filteredRecipes: [], // Matching results

  // Set the search term
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),

  // Optional: if you want to manually trigger filtering (useful for button-based search)
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
