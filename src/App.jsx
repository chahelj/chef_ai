import { useState } from 'react'
import Header from './components/header'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
