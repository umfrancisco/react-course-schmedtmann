import { useContext } from "react";
import { PostContext } from "../services/api";
// import Test from "./Test";

function List() {
  const { posts } = useContext(PostContext);

  return (
    <>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {/* <Test /> */}
    </>
  );
}

export default List;