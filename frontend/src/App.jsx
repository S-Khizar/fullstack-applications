import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [joke, setjokes] = useState([]);

  useEffect(() => {
    axios.get("https://fullstack-applications.vercel.app/api/jokes")
      .then((response) => {
        setjokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1> chai and full stack </h1>
      <p>Jokes : {joke.length}</p>
      {
        joke.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }


    </>
  )
}

export default App
