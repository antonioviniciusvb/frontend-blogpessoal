
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import NavBar from './components/navBar/NavBar'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import FormularioTema from './components/temas/formularioTema/FormularioTema'

import { AuthProvider } from './contexts/AuthContexts'
import DeletarTema from './components/temas/deletarTema/DeletarTema'


function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/temas" element={<ListaTemas /> }/>
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
