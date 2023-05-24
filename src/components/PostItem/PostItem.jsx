export default function PostItem({ post }) {
  const date = new Date(post.createdAt).toLocaleDateString();
  return(
    <div className="PostItem">
      <div>Post Created: {date}</div>
      <div>{post.text}</div>
    </div>
  );
}

