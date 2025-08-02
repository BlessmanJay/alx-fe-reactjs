import axios from "axios";

export const fetchUsersByQuery = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`
  );

  // GitHub search API returns only basic user data — fetch full details for each user
  const detailedUsers = await Promise.all(
    response.data.items.slice(0, 10).map(async (user) => {
      const userDetails = await axios.get(user.url);
      return userDetails.data;
    })
  );

  return detailedUsers;
};
