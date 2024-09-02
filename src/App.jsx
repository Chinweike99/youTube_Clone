import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom';

function App() {

  const [showName, setShowName] = useState(true);

  return (
    <div>
      <NavBar showName={showName} setShowName={setShowName}/>
      <Routes>
        <Route path='/' element={<Home showName={showName} setShowName={setShowName}/>}/>
        <Route />
      </Routes>
      
    </div>
  )
}

export default App
