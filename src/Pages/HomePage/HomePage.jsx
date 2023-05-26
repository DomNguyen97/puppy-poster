import { Center } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react'
import './HomePage.css';

function HomePage() {
  const[ dogs, setDogs ] = useState([])

  

  useEffect(() =>{
    const fetchData = () => {
      fetch("https://dog.ceo/api/breeds/image/random/2").then((res)=> res.json()).then((res) => {
        setDogs(res.message)
        console.log(res)
      })
      .catch((err) => {
         console.log(err) 
      }) 
   
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <h1>Welcome to Puppy Poster!</h1>
      {dogs.map(item => (
       <div className="container">
        <img src={item} alt="dog" className='dog'  />
       </div> 
      ))}
    </div>
  )
}

export default HomePage
