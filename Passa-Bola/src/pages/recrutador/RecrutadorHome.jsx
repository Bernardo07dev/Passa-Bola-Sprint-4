import StructurePages from "../../components/StructurePages";
import HeaderRec from "../../components/HeaderRec";
import CampoSearch from "../../components/CampoSearch";
import SliderAtletas from "../../components/SliderAtletas";
import { useState } from "react";

const RecrutadorHome = () => {

    const [Search, SetSearch] = useState();
    
    return(
        <StructurePages>
            <HeaderRec></HeaderRec>
            <section className="w-full px-8">
                <h1 className="text-lg px-2 mb-2 text-gray-200">Ache Sua Atleta Aqui:</h1>
                <CampoSearch type="text" placeholder="Digite o Nome da Atleta:" valor={Search} aoAlterado={(valor) => SetSearch(valor)}></CampoSearch>
                <p className="text-sm text-gray-400 mx-2">Vistas Recentemente:</p>
                <SliderAtletas></SliderAtletas>
            </section>

            <section>
                <h1 className="text-lg px-2 mb-2 text-gray-200">Atletas Favoritadas:</h1>
            </section>

            
            
        </StructurePages>
    )
}

export default RecrutadorHome;