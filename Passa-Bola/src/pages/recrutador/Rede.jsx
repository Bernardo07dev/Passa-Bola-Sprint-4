import StructurePages from "../../components/StructurePages";
import HeaderRec from "../../components/HeaderRec";
import CampoSearch from "../../components/CampoSearch";
import SliderAtletas from "../../components/SliderAtletas";
import { useState, useEffect } from "react";
import FooterRec from "../../components/FooterRec";
import axios from "axios";

const Rede = () => {
    const [Search, SetSearch] = useState("");
    const [Atletas, SetAtletas] = useState([]);

    useEffect(() => {
        const CatchAtleta = async () => {
            const getatletas = await axios.get("/atletas.json")
            SetAtletas(getatletas.data)
        }
        CatchAtleta();
    }, [])

    const AtletasSearch = Atletas.filter((atleta) =>
        atleta.nome.toLowerCase().includes(Search.toLowerCase())
    );

    const AtletaDouble = []

    for(let i = 0; i < AtletasSearch.length; i += 2){
        AtletaDouble.push(AtletasSearch.slice(i, i+2))
    }


    return(
        <StructurePages>
            <HeaderRec></HeaderRec>
            <section className="w-full px-8">
                <h1 className="text-lg px-2 mb-2 text-gray-200">Ache Sua Atleta Aqui:</h1>
                <CampoSearch type="text" placeholder="Digite o Nome da Atleta:" valor={Search} aoAlterado={(valor) => SetSearch(valor)}></CampoSearch>
                {AtletaDouble.map((dupla, index) => (
                <div key={index} className="flex flex-row gap-4 mb-4">
                    {dupla.map((atleta, i) => (
                    <div key={i} className="bg-[#191B22] rounded-lg flex flex-col gap-4 items-center">
                        <div className="w-full">
                            <img className="rounded-lg" src={atleta.img}/>
                        </div>
                        <div className="w-[80%] flex flex-col pb-4">
                            <h3 className="text-sm text-gray-300">{atleta.nome}</h3>
                            <p className="text-gray-400 text-xs mb-2">{atleta.time}</p>
                            <p className="text-gray-400 text-sm">{atleta.idade} anos</p>
                            <p className="text-gray-400 text-xs">{atleta.sub}</p>
                        </div>
                    </div>
                    ))}
                </div>
))}
            </section>
            <FooterRec estado="rede"></FooterRec>
        </StructurePages>
    )
}

export default Rede;