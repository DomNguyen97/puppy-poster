import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, Image, Heading, Button, ButtonGroup, Divider } from '@chakra-ui/react';
import { useState } from 'react';

export default function PostList({ user, setPosts, post, postID, posts, userID, handleDelete }) {

    
    return (

        // <div w={'80vw'}>
        //         <Card
        //             direction={{ base: 'column', sm: 'row' }}
        //             overflow='hidden'
        //             variant='outline'
        //             w={"80%"}
        //             ml={4}
        //         >

        //             <Image
        //                 objectFit='cover'
        //                 maxW={{ base: '100%', sm: '200px' }}
        //                 src={post.imageUrl}
        //                 alt='post'

        //             />
        //             <Stack mt='6' ml='6' spacing='3'>
        //                 <CardBody w={'100%'}>
        //                     <Heading fontSize='2xl' >{post.name}</Heading>
        //                     <Text>
        //                         <strong>Ingredients:</strong> {post.ingredients}
        //                     </Text>
        //                     <Text color='blue.500' size='md'>
        //                         <strong>Instructions:</strong> {post.instructions}
        //                     </Text>
        //                     <Text>
        //                     <strong>You can find it here:</strong>{post.location}
        //                     </Text>
        //                 </CardBody>
        //                 <CardFooter>

        //                     <ButtonGroup spacing='2'>
        //                         <Button
        //                             ml={6} mt={6} mb={6}
        //                             bgColor='purple.500'
        //                             color='white'
        //                             borderRadius={20}
        //                             onClick={() => handleDelete(post._id)}>Delete your post!
        //                         </Button>
        //                     </ButtonGroup>
        //                 </CardFooter>
        //             </Stack>

        //         </Card> 
        <div>
                <h1>Hello!</h1>
        </div>
    )

};