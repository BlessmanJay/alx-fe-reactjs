import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <nav className="mb-4">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
      </nav>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
