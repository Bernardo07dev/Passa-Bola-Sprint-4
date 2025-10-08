import Structure from "../../components/Structure";
import NumFase from "../../components/NumFase/NumFase";
import CampoTexto from "../../components/CampoTexto";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';



const Fase1 = () => {
    const navigate = useNavigate()
    const [Senha, setSenha] = useState("")
    const [Nome, setNome] = useState("")
    const temOitoCaracteres = Senha.length >= 8;
    const temMaiusculaInicial = Senha.length > 0 && Senha[0] === Senha[0].toUpperCase();

    const iconeOitoCaracteres = temOitoCaracteres ? faCheck : faX;
    const iconeMaiusculaInicial = temMaiusculaInicial ? faCheck : faX;

   const aoSubmit = (evento) =>{
        evento.preventDefault();
        if(temOitoCaracteres && temMaiusculaInicial){
            navigate("/Fase2");
        }
        else{
            document.getElementById("erro").classList.remove("hidden")
        }
    }

    return(
        <Structure>
            <div className="w-full grid justify-items-center mt-12 pb-8">
                <NumFase passoAtual={1} Link1="/Fase1" Link2="/Fase2" Link3="/Fase3"/>
                <h1 className="text-lg mb-1 text-center">Etapa 1 de 3</h1>
                <p className="text-gray-300 text-sm mb-6">Olá jogadora, preencha seus dados abaixo</p>
                <form onSubmit={aoSubmit} className="font-light w-full flex gap-2 flex-col text-sm">
                    <CampoTexto label="Nome" valor={Nome} aoAlterado={valor => setNome(valor)} placeholder="Digite seu nome"></CampoTexto>
                    <CampoTexto label="Data de nascimento" placeholder="Ex: 01/01/2000"></CampoTexto>
                    <CampoTexto label="Cidade" placeholder="Ex: São Paulo"></CampoTexto>
                    <CampoTexto label="Estado" placeholder="Ex: São Paulo"></CampoTexto>
                    <CampoTexto label="Email" placeholder="Ex: atleta@gmail.com" type="email"></CampoTexto>
                    <CampoTexto label="Senha" placeholder="Crie sua senha" type="password" valor={Senha} aoAlterado={valor => setSenha(valor)}></CampoTexto>
                    <p id="erro" className="duration-500 ease-in font-extralight text-[13px] text-red-300 hidden">A senha não tem os requisitos necessários</p>
                    <div className="flex flex-row items-center text-xs gap-2 mb-1">
                        <FontAwesomeIcon className={`duration-300 ease-in  py-2 w-3 rounded-full ${temOitoCaracteres ? 'text-green-400' : 'text-red-400'}`} $ icon={iconeOitoCaracteres} />
                        <p>Mais de 8 caracteres</p>
                    </div>
                    <p id="erro" className="my-4 font-extralight text-[13px] text-red-300 text-center hidden">A senha não tem os requisitos necessários</p>
                    <div className="flex flex-row items-center text-xs gap-2 mb-4">   
                        <FontAwesomeIcon className={`duration-500 ease-in w-3 rounded-full ${temMaiusculaInicial ? 'text-green-400' : 'text-red-400'}`} icon={iconeMaiusculaInicial} />
                        <p>Primeira letra maiúscula</p>
                    </div>
                    <button className="w-full py-3 mt-2 bg-blue-500 text-white rounded-md font-medium flex items-center justify-center gap-2">Próxima etapa</button>
                </form>
            </div>
        </Structure>
    )
}

export default Fase1;