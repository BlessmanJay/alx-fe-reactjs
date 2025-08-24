import { useQuery, useQueryClient } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
    dataUpdatedAt,
  } = useQuery("posts", fetchPosts, {
    // Caching behavior
    staleTime: 60 * 1000, // data stays "fresh" for 60s
    cacheTime: 5 * 60 * 1000, // cached for 5 minutes after unmount
    refetchOnWindowFocus: false, // keep it simple for the demo
  });

  const formattedUpdatedAt = dataUpdatedAt
    ? new Date(dataUpdatedAt).toLocaleTimeString()
    : "—";

  if (isLoading) return <p>Loading posts…</p>;
  if (isError)
    return <p style={{ color: "crimson" }}>Error: {error.message}</p>;

  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <button onClick={() => refetch()}>Refetch now</button>
        <button onClick={() => queryClient.invalidateQueries("posts")}>
          Invalidate cache (next view refetches)
        </button>
        <button
          onClick={() => queryClient.removeQueries("posts", { exact: true })}
        >
          Remove from cache
        </button>
        <span style={{ marginLeft: "auto", fontSize: 13 }}>
          {isFetching ? "Background updating…" : "Idle"}
          {" • "}Last updated: {formattedUpdatedAt}
        </span>
      </div>

      <ul style={{ display: "grid", gap: 8, listStyle: "none", padding: 0 }}>
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}
          >
            <h3 style={{ margin: "0 0 6px" }}>
              #{post.id} — {post.title}
            </h3>
            <p style={{ margin: 0 }}>{post.body}</p>
          </li>
        ))}
      </ul>
      <p style={{ marginTop: 10, fontSize: 12, opacity: 0.7 }}>
        Showing first 10 posts for brevity.
      </p>
    </div>
  );
}
