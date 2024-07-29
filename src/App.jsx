import { useState } from 'react'
import Header from './components/header'
import { Outlet } from 'react-router'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div >
      <Header />
      <Outlet />
      <Footer />

    </div>
    </>
  )
}

export default App
