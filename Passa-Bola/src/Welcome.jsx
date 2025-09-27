import Structure from "./components/Structure"
import logo from "./assets/img/logo.svg"
import { useNavigate } from "react-router-dom"


const Welcome = () => {
  const navigate = useNavigate()


  return (
    <Structure>
      <div className="grid justify-items-center text-center gap-2">
        <img className="w-20" src={logo} alt="" />
        <h1 className="text-xl font-semibold text-white">Bem-vindo ao Passa Bola</h1>
        <p className="text-gray-400 font-light text-sm">
          Se conecte, conheça jogadoras ou recrutadores conosco. Você quer criar uma conta de recrutador ou atleta?
        </p>
        <div className="grid gap-4 w-full mt-4 text-sm">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-lg transition-colors">Sou uma Jogadora</button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-4 rounded-lg transition-colors">Sou um Recrutador</button>
        </div>
        <p className="text-gray-400 mt-4 text-sm">
          Já tem uma conta? <u className='cursor-pointer text-blue-400 hover:text-blue-500' onClick={() => navigate('/login')}>Clique aqui e faça login</u>
        </p>
      </div>
    </Structure>
  )
}

export default Welcome
