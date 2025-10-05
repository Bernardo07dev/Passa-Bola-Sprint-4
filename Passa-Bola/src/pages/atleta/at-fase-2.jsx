import Structure from "../../components/Structure";
import NumFase from "../../components/NumFase/NumFase";
import CampoTexto from "../../components/CampoTexto";

const Fase2 = () => {
    return(
        <Structure>
            <div className="w-full grid justify-items-center mt-12 pb-8">
                <NumFase passoAtual={2} Link1="/Fase1" Link2="/Fase-2" Link3="/Fase-3" />
                <h1 className="text-lg mb-1 text-center">Etapa 2 de 3</h1>
                <p className="text-gray-300 text-sm mb-6">Agora fale sobre você como jogadora</p>
                <CampoTexto label="Qual posição você joga?" placeholder="Ex: Atacante"></CampoTexto>

                
            </div>
        </Structure>
    )
}

export default Fase2;