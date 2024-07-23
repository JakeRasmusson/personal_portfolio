import { useState } from 'react'
import Header from './components/header'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  )
}

export default App
