import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection';
import Login from './components/Login';
import About from './components/About';
import Men from './components/Men';

function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/men' element={<Men/>}/>
      </Routes>
    </BrowserRouter>


  )
}

export default App;  
