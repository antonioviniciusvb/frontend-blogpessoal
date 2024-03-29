import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem"

function Home() {
  return (
    <>
      <div id="container" className="flex justify-center bg-sky-700">
        <div id="subcontainer" className="container grid grid-cols-2 text-white">
          <div id="texto" className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui os seus pensamentos e opiniões.</p>

            <div className="flex justify-around gap-4">
              <div className="rounded px-4 py-2">
                <ModalPostagem/>
                
                </div>
            </div>
          </div>
          <div id="imagem" className="flex justify-center">
            <img
              src="https://ik.imagekit.io/mgz6clat5/Code%20typing-bro.svg?updatedAt=1705520017160"
              alt="Imagem da Página Home"
              className="w-2/3"></img>
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  )
}

export default Home
