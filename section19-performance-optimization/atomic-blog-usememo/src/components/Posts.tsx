import type { Post } from "../types";
import List from "./List";

type Props = {
  posts: Post[];
}

function Posts({ posts }: Props) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;