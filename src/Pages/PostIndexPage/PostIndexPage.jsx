import PostList from '../../components/PostList/PostList';
import { useState, useEffect } from 'react';
import { useGetUserID } from '../../hooks/useGetUserID';
import * as postsAPI from '../../utilities/posts-api';
import { Box, Container, Text } from '@chakra-ui/react';
import { getAllPosts } from '../../utilities/posts-api';

export default function PostIndexPage({ user }) {
  const [posts, setPosts] = useState();
  const userID = useGetUserID();

  const fetchPosts = async () => {
    try {
      const response = await getAllPosts();
      // const data = response.json();
      console.log(response);
      // const sortedPosts = data.sort((a, b) => a.name.localeCompare(b.name));
      setPosts(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!posts || posts.length === 0) {
      fetchPosts();
    }
  }, []);

  // const handleDelete = async (postId) => {
  //   try {
  //     await postsAPI.deletePost(postId);
  //     setPosts(posts.filter((post) => post._id !== postId));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  console.log(posts);

  return (
    <div>
       {posts?.map(item => (
                <div>
                    <h1> {item.content} </h1>
                    <h1> {item.location} </h1>
                    <img src={item.imageUrl} alt="" />
                </div>
            ) )}
      {/* <PostList setPosts={setPosts} posts={posts} /> */}
    </div>
  );
}

        
