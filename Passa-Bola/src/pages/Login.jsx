import CampoTexto from "../components/CampoTexto";
import Structure from "../components/Structure";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import logo from "./../assets/img/logo.svg"
import { use } from "react";


const Login = () => {  
    const [Email, setEmail] = useState("")
    const [Senha, setSenha] = useState("")

    const navigate = useNavigate()

    const [Login, setLogin] = useState(false)


    const aoSubmit = async (evento) =>{
        evento.preventDefault()
        try{
            evento.preventDefault();
            const res = await fetch("/users.json");
            const users = await res.json();
            const user = users.find(u => u.email === Email && u.password === Senha);
            if (user){
                navigate(`/${user.conta}Home`)
            } else{
                setLogin(true)
            }
        } catch(error){
            alert("Erro ao fazer login")
        }

    }

    return(
        <Structure>
            {
                <div className="w-full grid justify-items-center mt-8">
                    <img className="w-16" src={logo} alt="" />
                    <h1 className="text-2xl font-semibold mb-1">Faça seu login!!</h1>
                            <p className="text-gray-200 font-light text-sm mx-4 mb-4 text-center"> Adicione seu e-mail e senha para o login</p>
                    <form onSubmit={aoSubmit} className="w-full" action="">
                        <CampoTexto label="E-mail" placeholder="Digite seu E-mail" valor={Email} aoAlterado={valor => setEmail(valor)}></CampoTexto>
                        <CampoTexto label="Senha" placeholder="Digite sua Senha" type="password" valor={Senha} aoAlterado={valor => setSenha(valor)}></CampoTexto>
                        <p id="erro" className={`my-4 font-extralight text-[13px] text-red-300 text-center transition-opacity duration-300 ease-in ${Login ? 'opacity-100 block' : 'opacity-0 hidden'}`}>Email ou Senha incorretos (Logins disponíveis no READ.ME do projeto)</p>
                        <button className="w-full py-2.5 mt-2 bg-blue-500 text-white rounded-lg font-semibold">Entrar</button>
                        <p className="mt-4 text-sm text-gray-300 text-center">Não tem uma conta? <a href="/" className="text-blue-500">Cadastre-se</a></p>
                    </form>
                </div>
            }
        </Structure>
    )
}

export default Login;