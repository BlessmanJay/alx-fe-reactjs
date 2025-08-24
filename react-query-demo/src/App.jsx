import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ maxWidth: 900, margin: '2rem auto', padding: '1rem' }}>
        <h1>React Query Demo (JSONPlaceholder Posts)</h1>

        <div style={{ marginBottom: '1rem' }}>
          <button onClick={() => setShowPosts((s) => !s)}>
            {showPosts ? 'Hide' : 'Show'} PostsComponent
          </button>
          <p style={{ marginTop: 8, fontSize: 14, opacity: 0.8 }}>
            Tip: Hide this component, then show it again to see cached data render instantly
            (while a background refresh may occur).
          </p>
        </div>

        {showPosts && <PostsComponent />}
      </div>
    </QueryClientProvider>
  );
}

