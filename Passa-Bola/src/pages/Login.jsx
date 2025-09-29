import CampoTexto from "../components/CampoTexto";
import Structure from "../components/Structure";

const Login = () => {  
    return(
        <Structure>
            {
                <div className="w-full grid justify-items-center mt-8">
                    <h1 className="text-xl mb-2">Faça seu login</h1>
                    <form className="w-full" action="">
                        <CampoTexto label="E-mail" placeholder="Digite seu E-mail" InputId="email"></CampoTexto>
                        <CampoTexto label="Senha" placeholder="Digite sua Senha" InputId="senha" type="password"></CampoTexto>
                        <button className="w-full py-2.5 mt-2 bg-blue-500 text-white rounded-lg font-semibold">Entrar</button>
                        <p className="mt-4 text-sm text-gray-300 text-center">Não tem uma conta? <a href="/" className="text-blue-500">Cadastre-se</a></p>
                    </form>
                </div>
            }
        </Structure>
    )
}

export default Login;