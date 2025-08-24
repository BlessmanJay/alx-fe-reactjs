import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p4">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        GitHub User Search
      </h1>
      <p className="text-center text-gray-700 mt-2">
        Search for GitHub profiles using the GitHub API
      </p>
    </div>
  );
}

export default App;
