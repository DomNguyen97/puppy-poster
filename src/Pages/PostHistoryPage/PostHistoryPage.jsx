import { checkToken } from '../../utilities/users-service';
import PostItem from '../../components/PostItem/PostItem';

export default function PostsHistoryPage({ posts }) {
  let postItem;
  if (posts.length > 0) {
    postItem = posts.map((post, idx) => (
      <PostItem post={post} key={idx} />
    ));
  } else postItem = <h1>No Posts Yet!</h1>
  
  return (
    <>
      <h2>{postItem}</h2>
    </>
  );
}