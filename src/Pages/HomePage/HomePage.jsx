import React, {useState, useEffect} from 'react'

function HomePage() {
  const[ dogs, setDogs ] = useState([])

  

  useEffect(() =>{
    const fetchData = () => {
      fetch("https://dog.ceo/api/breeds/image/random/1").then((res)=> res.json()).then((res) => {
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
      {dogs.map(item => (
       <div className="container">
        <img src={item} alt="" />
       </div> 
      ))}
    </div>
  )
}

export default HomePage
