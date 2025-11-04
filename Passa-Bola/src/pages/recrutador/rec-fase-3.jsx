import Strucuture from "../../components/Structure";
import NumFase from "../../components/NumFase/NumFase";
import CampoFile from "../../components/CampoFile";
import { useNavigate } from "react-router-dom";



const RFase3 = () => {
    const navigate = useNavigate()

    const aoSubmit = () => {
        navigate("/RecrutadorHome")
    }

    return(
        <Strucuture>
            <div className="w-full grid justify-items-center mt-12 pb-8">
                <NumFase passoAtual={3} Link1="/RFase1" Link2="/RFase2" Link3="/RFase3"/>
                <h1 className="text-lg mb-1 text-center">Etapa 3 de 3</h1>
                <p className="text-gray-300 text-sm mb-6">Verificação de Vínculo Profissional</p>
                <form onSubmit={aoSubmit}>
                    <CampoFile label="Envie um comprovante de vínculo profissional"></CampoFile>
                    <p className="text-gray-500 text-xs mb-6">Pode ser uma foto do seu crachá funcional, uma carta timbrada da instituição ou outro documento que mostre seu nome e o logo da organização.</p>
                    <CampoFile label="Link de Verificação"></CampoFile>
                    <p className="text-gray-500 text-xs mb-6">Cole aqui o link da página 'Nossa Equipe' ou 'Corpo Técnico' no site oficial da sua instituição, onde seu nome aparece.</p>
                    <button className="w-full py-3 bg-blue-500 text-white rounded-md font-medium flex items-center justify-center gap-2 cursor-pointer">Finalizar Processo</button>
                </form>
                </div>
        </Strucuture>
    )
}

export default RFase3;