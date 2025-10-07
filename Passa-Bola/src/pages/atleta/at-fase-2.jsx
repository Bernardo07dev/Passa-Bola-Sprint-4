import Structure from "../../components/Structure";
import NumFase from "../../components/NumFase/NumFase";
import CampoTexto from "../../components/CampoTexto";
import CampoCheckBox from "../../components/CampoCheckBox";
import CampoTextArea from "../../components/CampoTextArea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Fase2 = () => {
    const [experiencia, setExperiencia] = useState('');
    const navigate = useNavigate();


    const JogaOuNao = experiencia === 'sim' ? false : true;

    return (
        <Structure>
            <div className="w-full grid justify-items-center mt-12 pb-8">
                <NumFase passoAtual={2} Link1="/Fase1" Link2="/Fase2" Link3="/Fase3" />
                <h1 className="text-lg mb-1 text-center">Etapa 2 de 3</h1>
                <p className="text-gray-300 text-sm mb-6">Agora fale sobre você como jogadora</p>
                <form className="text-sm" onSubmit={(e) => {e.defaultPrevented; navigate("/Fase3"); }}>
                    <CampoTexto label="Qual posição você joga?" placeholder="Ex: Atacante"></CampoTexto>
                    <CampoTexto label="Posição Secundária (Opicional)?" placeholder="Ex: Atacante"></CampoTexto>
                    <CampoCheckBox label="Já jogou em algum local?" label1="Sim" label2="Não" aoClicado={valor => setExperiencia(valor)}></CampoCheckBox>
                    <CampoTexto label="Se sim onde?" placeholder="Ex: São Paulo" disabled={JogaOuNao}></CampoTexto>
                    <campoTexto label="Escreva seus números da ultima temporada" placeholder="Ex: Gols na temporada: 15, Assistências: 8."></campoTexto>
                    <CampoTextArea placeholder="Max: 150 palavras" label="De uma descrição rápida sobre sua carreira e sobre você como jogadora:"></CampoTextArea>
                    <h2 className="w-full text-left mb-2">Medidas Corporais</h2>
                    <CampoTexto label="Altura" placeholder="Ex: 1.80"></CampoTexto>
                    <CampoTexto label="Peso" placeholder="Ex: 60 kg"></CampoTexto>
                    <CampoTexto label="Envergadura (opicional)" placeholder="Ex: 1.70"></CampoTexto>
                    <button className="w-full py-3 mt-10 bg-blue-500 text-white rounded-md font-medium flex items-center justify-center gap-2" > Próxima etapa </button>
                </form>
            </div>
        </Structure>
    )
}

export default Fase2;