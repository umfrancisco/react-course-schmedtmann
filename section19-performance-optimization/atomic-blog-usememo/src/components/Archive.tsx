import { memo, useState } from "react";
import { createRandomPost } from "../utils";

type Props = {
  show: boolean;
}

const handleRandomPost = () => {
  return Array.from({ length: 10000 }, () => createRandomPost());
}

const Archive = memo(function Archive({ show }: Props) {
  const [posts] = useState(handleRandomPost);
  const [showArchive, setShowArchive] = useState(show);

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              {/* <button onClick={() => onAddPost(post)}>Add as new post</button> */}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
});

export default Archive;