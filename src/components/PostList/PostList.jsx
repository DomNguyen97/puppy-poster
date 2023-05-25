import { Box, Stack, Text, Card, CardHeader, CardBody, CardFooter, Image, Heading, Button, ButtonGroup, Divider } from '@chakra-ui/react';
import { useState } from 'react';

export default function PostList({ posts, setPosts }) {

    
    return (

        <div>
            {posts.map((item) => (
                <div>
                    <h1> {item.content} </h1>
                </div>
            ) )}
        </div>
    )

};