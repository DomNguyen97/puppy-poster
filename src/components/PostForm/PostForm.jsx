import { useState } from "react";
import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, FormLabel, FormControl, Image, Input, Heading, Button, ButtonGroup, Divider, Textarea } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { createPost } from "../../utilities/posts-api";

export default function PostForm({ user }) {
  const userId = user._id;
  const [post, setPost] = useState({
    content: "",
    location: "",
    imageUrl: "",
    user: userId,
  });

  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await createPost({ ...post, user: user._id });
      navigate("/posts");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="create-post">
      <Heading size="xl" mb={6} pl={4}>
        Add a Post
      </Heading>
      <FormControl pl={6}>
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="content">Content:</FormLabel>
          <Input
            mb={6}
            mr={6}
            type="text"
            placeholder=""
            id="content"
            name="content"
            value={post.content}
            onChange={handleChange}
          />
          <FormLabel htmlFor="location">Location:</FormLabel>
          <Input
            mb={6}
            mr={6}
            type="text"
            placeholder=""
            id="location"
            name="location"
            value={post.location}
            onChange={handleChange}
          />
          <FormLabel htmlFor="imageUrl">Image URL:</FormLabel>
          <Input
            mb={6}
            mr={6}
            type="text"
            placeholder="Ex: https://image...jpg"
            id="imageUrl"
            name="imageUrl"
            value={post.imageUrl}
            onChange={handleChange}
          />
          <Button mb={6} mr={6} mt={4} colorScheme="red" type="submit">
            Add Post
          </Button>

        </form>
      </FormControl>
    </div>
  );
}