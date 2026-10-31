import { useState, type ReactNode } from "react";
import { createRandomPost, PostContext } from "../services/api";
import type { Post } from "../types";

type Props = {
  children: ReactNode;
}

function PostProvider({ children }: Props) {
  const [posts, setPosts] = useState<Post[]>(() => Array.from({ length: 30 }, () => createRandomPost()));
  const [searchQuery, setSearchQuery] = useState("");
  
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

  return (
    <PostContext.Provider value={{
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;