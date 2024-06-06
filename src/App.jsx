// App.jsx
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import NavBar from './Components/NavBar'
import LogIn from './Components/LogIn'
import CardProd from './Components/CardProd'
import Profile from './Components/Profile'
import Sign_Up from './Sign_Up'
import Contents from './Components/Contents'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<LogIn />} />
        <Route path="/submit" element={<Contents />} />
        <Route path="/Sign_Up" element={<Sign_Up />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Logout" element={<LogIn />} />
        <Route path="/Products" element={<CardProd />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
