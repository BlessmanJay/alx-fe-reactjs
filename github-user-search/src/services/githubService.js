const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

export async function fetchGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("GitHub user not found");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
}

import axios from "axios";

export const fetchUserData = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }
  );

  // GitHub search API returns only basic user data — fetch full details for each user
  const detailedUsers = await Promise.all(
    response.data.items.slice(0, 10).map(async (user) => {
      const userDetails = await axios.get(user.url, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
      return userDetails.data;
    })
  );

  return detailedUsers;
};
