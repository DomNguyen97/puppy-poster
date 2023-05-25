import { useState } from "react";
import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, FormLabel, FormControl, Image, Input, Heading, Button, ButtonGroup, Divider, Textarea } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { createPost } from "../../utilities/posts-api";



export default function PostForm() {
  const [post, setPost] = useState({
    user: "",
    content: "",
    location: "",
    imageUrl: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      console.log("POST FORM HERE")
      await createPost(post);
      // navigate( "/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setPost({ ...post, [name]: value });
  };


  return (
    <div className="create-post">
      <Heading size='xl' mb={6} pl={4}>Add a Post</Heading>
      <FormControl pl={6}>
        <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="User">User:</FormLabel>
          <Input
            mb={6} mr={6}
            type="text"
            placeholder=''
            id="user"
            name="user"
            value={post.user}
            onChange={handleChange}
          />
          <FormLabel htmlFor="Content">Content:</FormLabel>
          <Input
            mb={6} mr={6}
            type="text"
            placeholder=''
            id="content"
            name="content"
            value={post.content}
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
          <Button mb={6} mr={6} mt={4} colorScheme='red' type="submit">Add Post</Button>
        </form>
      </FormControl>
    </div>
  );
}