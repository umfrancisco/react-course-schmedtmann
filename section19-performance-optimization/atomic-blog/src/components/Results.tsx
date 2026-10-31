import { useContext } from "react";
import { PostContext } from "../services/api";

function Results() {
  const { posts } = useContext(PostContext);

  return (
    <p>🚀 {posts.length} atomic posts found</p>
  );
}

export default Results;