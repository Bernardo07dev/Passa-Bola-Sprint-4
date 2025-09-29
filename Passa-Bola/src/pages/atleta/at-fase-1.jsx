import Structure from "../../components/Structure";
import NumFase from "../../components/NumFase/NumFase";

const Fase1 = () => {
    return(
        <Structure>
            <div className="w-full grid justify-items-center mx-4">
                <NumFase passoAtual={1} Link1="/atleta/fase-1" Link2="/atleta/fase-2" Link3="/atleta/fase-3" />
                <h1 className="text-xl mb-2">Etapa 1 de 3</h1>
                <p className="text-gray-400 text-sm mb-4">Adicione suas informações básicas.</p>
                {/* Adicione os campos do formulário para a fase 1 aqui */}
            </div>
        </Structure>
    )
}

export default Fase1;