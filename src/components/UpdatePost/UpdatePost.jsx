import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPost, updatePost } from "../../utilities/posts-api";
import * as postsAPI from '../../utilities/posts-api';
import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, FormLabel, FormControl, Image, Input, Heading, Button, ButtonGroup, Divider, Textarea } from '@chakra-ui/react'
import { confirmAlert } from "react-confirm-alert";
import { useGetUserID } from "../../hooks/useGetUserID";


export default function updatePost({ postOne, posts, setPosts, handleDelete, handleUpdate }) {
  const { userId } = useGetUserID();
  const { postId } = useParams();
  const navigate = useNavigate();

  // console.log(drinkOne)
  const [post, setPost] = useState({ ...postOne })

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  return (
    <div className="update-drink">
      <Heading as='h2' size='md'>Edit Your Post:</Heading>
      <form onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleUpdate(postId, { ...post, user: userId });
      }}
      >
        <FormLabel htmlFor="User">User:</FormLabel>
          <Input
            mb={6} mr={6}
            type="text"
            placeholder=''
            id="user"
            name="content"
            value={post.name}
            onChange={handleChange}
          />
          <FormLabel htmlFor="Content">Content:</FormLabel>
          <Input
            mb={6} mr={6}
            type="text"
            placeholder=''
            id="name"
            name="content"
            value={post.name}
            onChange={handleChange}
          />
         <FormLabel htmlFor="location">Location:</FormLabel>
            <Input
              mb={6} mr={6}
              type="text"
              placeholder=""
              id="location"
              name="location"
              value={post.location}
              onChange={handleChange}
            />
          <FormLabel htmlFor="imageUrl">Image URL:</FormLabel>
          <Input
            mb={6} mr={6}
            type="text"
            placeholder='Ex: https://image...jpg'
            id="imageUrl"
            name="imageUrl"
            value={post.imageUrl}
            onChange={handleChange}
          />
        <Button type="submit" >Submit Changes</Button>
      </form>
      <br />
      <Button onClick={() => handleDelete(drink._id)}>This delete is working!</Button>
    </div>
  );
}
