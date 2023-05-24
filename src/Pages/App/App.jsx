import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import PostHistoryPage from '../PostHistoryPage/PostHistoryPage';
import NewPostPage from '../NewPostPage/NewPostPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPost] = useState([])


  return (
    <ChakraProvider className="App">
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostHistoryPage user={user} />} />
            <Route path="/posts/new" element={<NewPostPage user={user} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
    </ChakraProvider>

  );
}

