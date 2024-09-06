import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom';
// import PlayVideo from './Components/PlayVideo/PlayVideo';
import Videos from './Components/Videos/Videos';

function App() {

  const [showName, setShowName] = useState(true);

  return (
    <div>
      <NavBar showName={showName} setShowName={setShowName}/>
      <Routes>
        <Route path='/' element={<Home showName={showName} setShowName={setShowName}/>}/>
        {/* <Route path='/video/:videoId/:otherId' element={<PlayVideo />}/> */}
        <Route path='/video/:categoryId/:videoId' element={<Videos />} component={Videos}/>
      </Routes>
      
    </div>
  )
}

export default App
