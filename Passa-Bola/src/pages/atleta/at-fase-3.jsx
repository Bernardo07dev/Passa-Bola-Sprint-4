import Structure from "../../components/Structure";
import NumFase from "../../components/NumFase/NumFase";
import CampoTexto from "../../components/CampoTexto";
import CampoFile from "../../components/CampoFile";


const Fase3 = () => {
    return(
        <Structure>
            <div className="w-full grid justify-items-center mt-12 pb-8">
                <NumFase passoAtual={3} Link1="/Fase1" Link2="/Fase2" Link3="/Fase3"></NumFase>
                <h1 className="text-lg mb-1 text-center">Etapa 3 de 3</h1>
                <p className="text-gray-300 text-sm mb-6 text-center">Vamos finalizar seu perfil</p>
                <CampoFile label="Vídeo de Highlights"></CampoFile>
                <p className="text-gray-500 text-xs mb-6">Mantenha o vídeo entre 2-5 minutos e comece com suas jogadas mais impressionantes.</p>
                <CampoFile label="Adicione suas melhores fotos de jogos ou treinos"></CampoFile>
                <h2 className="w-full text-left mt-6 mb-2">Histórico Acadêmico</h2>
                <CampoTexto label="Nome da sua escola/colégio atual" placeholder="Ex: Senai"></CampoTexto>
                <CampoTexto label="Em que ano você se forma no Ensino Médio?" placeholder="Ex: 2025"></CampoTexto>
                <CampoTexto label="Qual área você gostaria de estudar na faculdade?" placeholder="Ex: Educação Física, Engenharia, Fisioterapia"></CampoTexto>
                <button className="w-full py-3 mt-8 bg-blue-500 text-white rounded-md font-medium flex items-center justify-center gap-2">Ir Para Home</button>
            </div>
        </Structure>
    )
}

export default Fase3;