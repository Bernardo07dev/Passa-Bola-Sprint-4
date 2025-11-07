import Strucuture from "../../components/Structure";
import NumFase from "../../components/NumFase/NumFase";
import CampoTexto from "../../components/CampoTexto";
import CampoSelect from "../../components/CampoSelect";
import {useNavigate} from "react-router-dom"


const RFase2 = () => {
    const navigate = useNavigate()

    const aoSubmit = () => {
        navigate("/RFase3")
    }


    return(
        <Strucuture>
            <div className="w-full grid justify-items-center mt-12 pb-8">
                <NumFase passoAtual={2} Link1="/RFase1" Link2="/RFase2" Link3="/RFase3"/>
                <h1 className="text-lg mb-1 text-center">Etapa 2 de 3</h1>
                <p className="text-gray-300 text-sm mb-6">Conte-nos sobre você e sua organização</p>
                <form onSubmit={aoSubmit} className="flex flex-col w-full gap-4">
                    <CampoSelect label="Cargo"></CampoSelect>
                    <CampoTexto label="Nome do Clube, Universidade ou Agência" placeholder="Ex: São Paulo"></CampoTexto>
                    <CampoTexto label="Site oficial da sua instituição" placeholder="Ex: www.nomedoclube.com.br"></CampoTexto>
                    <CampoTexto label="Localização da Instituição" placeholder="Ex: Brasil, São Paulo - SP"></CampoTexto>
                    <button className="w-full py-3 bg-blue-500 text-white rounded-md font-medium flex items-center justify-center gap-2">Próxima etapa</button>
                </form>

            </div>
        </Strucuture>
    )
}

export default RFase2;