import StructurePages from "../../components/StructurePages";
import FooterRec from "../../components/FooterRec";
import HeaderRec from "../../components/HeaderRec";
import CampoSearch from "../../components/CampoSearch";
import { useState, useEffect } from 'react';
import axios from "axios";

const Mensagens = () => {
    const [Search, SetSearch] = useState("");
    const [Atletas, SetAtletas] = useState([]);

    useEffect(() => {
        const CatchAtleta = async () => {
            const getatletas = await axios.get("/atletas.json")
            SetAtletas(getatletas.data)
        }
        CatchAtleta();
    }, [])

    const AtletasSearch = Atletas.filter((Atleta) =>
        Atleta.nome.toLowerCase().includes(Search.toLowerCase())
    );

    return(
        <StructurePages>
            <HeaderRec></HeaderRec>
            <section className='w-full px-8'>
                <CampoSearch placeholder="Digete o nome da jogadora:" valor={Search} aoAlterado={(valor) => SetSearch(valor)}></CampoSearch>
                <div className='flex flex-col gap-6 mt-8'>
                    {AtletasSearch.map((atleta, i) => (
                        <div key={i} className='flex flex-row gap-4 items-center'>
                            <img className='w-[15%] rounded-full' src={atleta.img}></img>
                            <div className='w-[80%]'>
                                <h3 className="text-gray-300">{atleta.nome}</h3>
                                <p className='text-xs text-gray-500'>Olá {atleta.nome}, queria falar com você</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <FooterRec estado="mensagens"></FooterRec>
        </StructurePages>
    )
}

export default Mensagens;