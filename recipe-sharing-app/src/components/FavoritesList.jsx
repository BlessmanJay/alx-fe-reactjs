import React from "react";
import { useRecipeStore } from "../store/recipeStore"; // adjust path if needed

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean)
  );

  return (
    <div className="p-4 border rounded-lg bg-white shadow mt-4">
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id} className="mb-3">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
