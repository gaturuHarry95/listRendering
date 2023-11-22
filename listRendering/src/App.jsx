import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>List Rendring</h1>
    <Post/>
    </>
  )
}

export default App
