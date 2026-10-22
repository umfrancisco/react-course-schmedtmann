import FormAddPost from "./FormAddPost";
import Posts from "./Posts";

type Props = {
  posts: Post[];
  onAddPost: (val: Post) => void;
}

function Main({ posts, onAddPost }: Props) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

export default Main;