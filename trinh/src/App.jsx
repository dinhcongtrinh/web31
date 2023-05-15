import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from './react'
import Postcard from './components/postcard'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Postcard/>
  )
}

export default App
