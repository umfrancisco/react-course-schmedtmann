
declare type Post = {
  title: string;
  body: string;
}

declare type PostContextAPI = {
  posts: Post[];
  onAddPost: (post: Post) => void;
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}