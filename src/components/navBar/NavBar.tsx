import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContexts";
import { useContext } from "react";

function Navbar() {

  const navigate = useNavigate();
  const { handleLogout} = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert("O Usuário foi desconectado com sucesso!")
    console.log("chegou aqui")
    navigate('/login')
  }

  return (
    <>
      <div className='w-full bg-sky-950 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold uppercase">Blog Pessoal</Link>
          <div className='flex gap-4'>

            <div className='hover:underline'>Postagens</div>
            <div className='hover:underline'>Temas</div>
            {/* <div className='hover:underline'>Cadastrar tema</div> */}
            <div className='hover:underline'>Perfil</div>
           
            <Link to=' ' onClick={logout} className="hover:underline">Sair</Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar


