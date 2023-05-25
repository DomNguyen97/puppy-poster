import PostForm from "../../components/PostForm/PostForm";
import { Container, Text } from "@chakra-ui/react";

export default function NewPostPage({ user }) {
  return (
    <div>
      <PostForm user={user} />

    </div>
  );
};