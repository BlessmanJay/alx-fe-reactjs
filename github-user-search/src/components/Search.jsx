import React, { useState } from "react";
import { fetchUserData } from "../services/github";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {userData && (
          <div className="flex items-center gap-4 mt-4">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">
                {userData.name || userData.login}
              </h2>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
