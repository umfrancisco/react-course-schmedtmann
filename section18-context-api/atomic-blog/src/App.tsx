import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import { createRandomPost, PostContext } from "./services/api";

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

  const handleAddPost = (post: Post) => {
    let updated = [post, ...posts];
    setPosts(updated);
  }

  const handleClearPosts = () => {
    setPosts([]);
  }

  const searchedPosts = searchQuery.length > 0 ? searchPosts(posts) : posts;

  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [isFakeDark]);

  return (
    <PostContext.Provider value={{ 
      posts: searchedPosts,
      onAddPost: handleAddPost, 
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    }}>
      <section>
        <button onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)} className="btn-fake-dark-mode">
          {isFakeDark ? "☀️" : "🌙"}
        </button>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostContext.Provider>
  );
}

export default App;
