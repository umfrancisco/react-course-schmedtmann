import { useCallback, useEffect, useMemo, useState } from "react";
import type { Post } from "./types";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import { handleRandomPost } from "./utils";

function App() {
  const [posts, setPosts] = useState(() => handleRandomPost(8));
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  const handleAddPost = useCallback(function handleAddPost(post: Post) {
    setPosts((posts) => [post, ...posts]);
  }, []);

  function handleClearPosts() {
    setPosts([]);
  }

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  const archiveOptions = useMemo(() => {
    return { show: false, title: `Post archive in addition to ${posts.length} posts` };
  }, [posts.length]);

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
      <Archive archiveOptions={archiveOptions} onAddPost={handleAddPost} />
      <Footer />
    </section>
  );
}

export default App;
