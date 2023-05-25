import PostList from '../../components/PostList/PostList';
import { useState, useEffect } from 'react';
import { useGetUserID } from '../../hooks/useGetUserID';
import * as postsAPI from '../../utilities/posts-api';
import { Box, Container, Text } from '@chakra-ui/react';

export default function PostIndexPage({ user }) {
  const [posts, setPosts] = useState([]);
  const userID = useGetUserID();

  const fetchPosts = async () => {
    try {
      const response = await postsAPI.getAllPosts();
      const data = response.data;
      // const sortedPosts = data.sort((a, b) => a.name.localeCompare(b.name));
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!posts || posts.length === 0) {
      fetchPosts();
    }
  }, [posts, fetchPosts]);

  // const handleDelete = async (postId) => {
  //   try {
  //     await postsAPI.deletePost(postId);
  //     setPosts(posts.filter((post) => post._id !== postId));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <PostList setPosts={setPosts} posts={posts} />
    </div>
  );
}

        
