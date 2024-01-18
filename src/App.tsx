
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './pages/footer/Footer'
import Home from './pages/home/Home'
import NavBar from './pages/navBar/NavBar'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
