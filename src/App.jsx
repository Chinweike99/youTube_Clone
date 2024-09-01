import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'

function App() {

  const [showName, setShowName] = useState(true);

  return (
    <div>
      <NavBar showName={showName} setShowName={setShowName}/>
      <Home showName={showName} setShowName={setShowName}/>
    </div>
  )
}

export default App
