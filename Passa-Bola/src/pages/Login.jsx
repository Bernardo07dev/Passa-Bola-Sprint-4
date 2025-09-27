import CampoTexto from "../components/CampoTexto";
import Structure from "../components/Structure";

const Login = () => {  
    return(
        <Structure>
            {
                <div className="w-full grid justify-items-center gap-2 mx-4">
                    <h1 className="text-xl mb-2">Faça seu login</h1>
                    <form className="w-full" action="">
                        <CampoTexto label="E-mail" placeholder="Digite seu E-mail" InputId="email"></CampoTexto>
                        <CampoTexto label="Senha" placeholder="Digite sua Senha" InputId="senha" type="password"></CampoTexto>
                        <button></button>
                    </form>
                </div>
            }
        </Structure>
    )
}

export default Login;