import Structure from "../../components/Structure";
import NumFase from "../../components/NumFase/NumFase";
import CampoTexto from "../../components/CampoTexto";


const Fase1 = () => {
    return(
        <Structure>
            <div className="w-full grid justify-items-center mt-12 pb-8">
                <NumFase passoAtual={1} Link1="/Fase1" Link2="/atleta/fase-2" Link3="/atleta/fase-3" />
                <h1 className="text-xl mb-2">Etapa 1 de 3</h1>
                <p className="text-gray-400 text-sm mb-4">Olá jogadora, preencha seus dados</p>
                <form className="font-light w-full flex gap-2 flex-col">
                    <CampoTexto label="Nome" placeholder="Digite seu nome"></CampoTexto>
                    <CampoTexto label="Data de nascimento" placeholder="Ex: 01/01/2000"></CampoTexto>
                    <CampoTexto label="Cidade" placeholder="Ex: São Paulo"></CampoTexto>
                    <CampoTexto label="Cidade" placeholder="Ex: São Paulo"></CampoTexto>
                    <CampoTexto label="Email" placeholder="Ex: atleta@gmail.com"></CampoTexto>
                    <CampoTexto label="Senha" placeholder="Crie sua senha"></CampoTexto>
                    <button className="w-full py-3 mt-2 bg-blue-500 text-white rounded-md font-medium">Próxima etapa</button>
                </form>
            </div>
        </Structure>
    )
}

export default Fase1;