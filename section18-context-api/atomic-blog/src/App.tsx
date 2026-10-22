import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import { createRandomPost } from "./services/api";

function App() {
  const [posts, setPosts] = useState<Post[]>(() => Array.from({ length: 30 }, () => createRandomPost()));
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);
  
  const searchPosts = (posts: Post[]) => {
    return posts.filter(post => `${post.title} ${post.body}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    );
  }

  const searchedPosts = searchQuery.length > 0 ? searchPosts(posts) : posts;
  
  const handleAddPost = (post: Post) => {
    setPosts((posts) => [post, ...posts]);
  }

  const handleClearPosts = () => {
    setPosts([]);
  }

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [isFakeDark]);

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <Header
        posts={searchedPosts}
        onClearPosts={handleClearPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Main posts={searchedPosts} onAddPost={handleAddPost} />
      <Archive onAddPost={handleAddPost} />
      <Footer />
    </section>
  );
}

export default App;
