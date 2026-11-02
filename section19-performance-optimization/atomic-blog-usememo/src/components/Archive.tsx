import { memo, useState } from "react";
import type { ArchiveOptions, Post } from "../types";
import { handleRandomPost } from "../utils";

type Props = {
  archiveOptions: ArchiveOptions;
  onAddPost: (val: Post) => void;
}

const Archive = memo(function Archive({ archiveOptions, onAddPost }: Props) {
  const [posts] = useState(() => handleRandomPost(10000));
  const [showArchive, setShowArchive] = useState(archiveOptions.show);

  return (
    <aside>
      <h2>{archiveOptions.title}</h2>
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
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
});

export default Archive;