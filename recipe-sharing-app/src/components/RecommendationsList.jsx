import React, { useEffect } from "react";
import { useRecipeStore } from "../store/recipeStore"; // adjust path if needed

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Generate recommendations when component mounts
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="p-4 border rounded-lg bg-white shadow mt-4">
      <h2 className="text-xl font-bold mb-2">Recommended For You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add some favorites to see suggestions!</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="mb-3">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
