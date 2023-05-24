import PostForm from "../../components/PostForm/PostForm";

export default function NewPostPage({ user }) {
  return (
    <div>
      <PostForm user={user} />
    </div>
  );
};