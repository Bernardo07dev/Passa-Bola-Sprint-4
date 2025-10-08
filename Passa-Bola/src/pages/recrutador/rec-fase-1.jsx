import Structure from "../../components/Structure"; 
import NumFase from "../../components/NumFase/NumFase";
import CampoTexto from "../../components/CampoTexto";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';



const RFase1 = () =>{
    const navigate = useNavigate()
    const [nome, setNome] = useState("")
    const [cidade, setCidade] = useState("")
    const [email, setEmail] = useState("")
    const [senha, SetSenha] = useState("")
    const [Csenha, SetCsenha] = useState("")
    
    const temOitoCaracteres = senha.length >= 8;
    const temMaiusculaInicial = senha.length > 0 && senha[0] === senha[0].toUpperCase();
    const senhasSaoDiferentes = senha !== Csenha;

    const iconeOitoCaracteres = temOitoCaracteres ? faCheck : faX;
    const iconeMaiusculaInicial = temMaiusculaInicial ? faCheck : faX;
    
    const [erro, setErro] = useState("");

    const AoSubmit = (evento) =>{
        evento.preventDefault();
        if (!temOitoCaracteres || !temMaiusculaInicial) {
            setErro("A senha não cumpre os requisitos necessários.");
        } else if (senhasSaoDiferentes) {
            setErro("As senhas não são iguais.");
        } else if (temOitoCaracteres && temMaiusculaInicial && !senhasSaoDiferentes) {
            setErro("");
            navigate("/RFase2");
        }
    }

    return(
        <Structure>
            <div className="w-full grid justify-items-center mt-12 pb-8">
                <NumFase passoAtual={1} Link1="/Fase1" Link2="/Fase2" Link3="/Fase3"/>
                <h1 className="text-lg mb-1 text-center">Etapa 1 de 3</h1>
                <p className="text-gray-300 text-sm mb-6">Olá recrutador(a), preencha seus dados abaixo</p>
                <form className="w-full" onSubmit={AoSubmit}>
                    <CampoTexto label="Nome" placeholder="Insira seu nome completo" valor={nome} aoAlterado={valor => setNome(valor)}></CampoTexto>
                    <CampoTexto label="De qual cidade você é?" placeholder="Ex: São Paulo" valor={cidade} aoAlterado={valor => setCidade(valor)}></CampoTexto>
                    <CampoTexto type="email" label="Email" placeholder="Ex: recrutador@gmail.com" valor={email} aoAlterado={valor => setEmail(valor)}></CampoTexto>
                    <CampoTexto type="password" valor={senha} aoAlterado={valor => SetSenha(valor)} label="Senha" placeholder="Crie sua senha"></CampoTexto>
                    {/* VERIFICAÇÕES DE SENHA */}
                    <div className="w-full flex flex-row items-center text-xs gap-2 mb-1 mt-2">
                        <FontAwesomeIcon className={`duration-300 ease-in  py-2 w-3 rounded-full ${temOitoCaracteres ? 'text-green-400' : 'text-red-400'}`} $ icon={iconeOitoCaracteres} />
                        <p>Mais de 8 caracteres</p>
                    </div>
                    <div className="w-full flex flex-row items-center text-xs gap-2 mb-4">   
                        <FontAwesomeIcon className={`duration-500 ease-in w-3 rounded-full ${temMaiusculaInicial ? 'text-green-400' : 'text-red-400'}`} icon={iconeMaiusculaInicial} />
                        <p>Primeira letra maiúscula</p>
                    </div>
                    <CampoTexto type="password" valor={Csenha} aoAlterado = {valor => SetCsenha(valor)} label="Confirme sua senha" placeholder="Digite sua senha novamente"></CampoTexto>
                    <p className={`transition-opacity duration-500 ease-in text-left font-extralight text-[13px] text-red-300 ${erro ? 'opacity-100' : 'opacity-0'}`}>{erro}</p>
                    <button className="w-full py-3 mt-6 bg-blue-500 text-white rounded-md font-medium flex items-center justify-center gap-2">Próxima etapa</button>
                </form>     
            </div>
        </Structure>
    )
}

export default RFase1;