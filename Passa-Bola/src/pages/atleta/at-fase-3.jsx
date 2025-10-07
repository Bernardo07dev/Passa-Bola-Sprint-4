import Structure from "../../components/Structure";
import NumFase from "../../components/NumFase/NumFase";
import CampoTexto from "../../components/CampoTexto";
import CampoFile from "../../components/CampoFile";


const Fase3 = () => {
    return(
        <Structure>
            {
            <div className="w-full">
                <NumFase passoAtual={3} Link1="/Fase1" Link2="/Fase2" Link3="/Fase3"></NumFase>
                <h1 className="text-lg mb-1 text-center">Etapa 3 de 3</h1>
                <p className="text-gray-300 text-sm mb-6 text-center">Vamos finalizar seu perfil</p>
                <CampoFile label="Vídeo de Highlights"></CampoFile>
                <p className="text-gray-500 text-xs mb-6">Mantenha o vídeo entre 2-5 minutos e comece com suas jogadas mais impressionantes.</p>
            </div>
            }
        </Structure>
    )
}

export default Fase3;