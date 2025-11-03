import StructurePages from "../../components/StructurePages";
import HeaderRec from "../../components/HeaderRec";
import CampoSearch from "../../components/CampoSearch";
import SliderAtletas from "../../components/SliderAtletas";
import { useState, useEffect } from "react";
import FooterRec from "../../components/FooterRec"
import axios from "axios";

const RecrutadorHome = () => {
    const [Atletas, SetAtletas] = useState([]);

    const AtletasFav = Atletas.filter((atleta) => atleta.favoritada === "true");

    useEffect(() => {
        const CatchAtleta = async () => {
            const getatletas = await axios.get("/atletas.json")
            SetAtletas(getatletas.data)
        }
        CatchAtleta();
    }, [])

    
    return(
        <StructurePages>
            <HeaderRec></HeaderRec>
            <section className="w-full px-8">
                <p className="text-sm text-gray-400 mx-2">Vistas Recentemente:</p>
                <SliderAtletas></SliderAtletas>
            </section>

            <section className="w-full px-8">
                <h1 className="text-md text-gray-400 mb-4">Atletas Favoritadas:</h1>
                {AtletasFav.map((atleta, i) => (
                    <div key={i} className="px-4 py-4 bg-[#191B22] rounded-lg mb-4 flex flex-row gap-4 items-center ">
                        <div className="w-[25%]">
                            <img className="rounded-lg border-[0.2px] border-gray-800" src={atleta.img}></img>
                        </div>
                        <div className="w-[75%] flex flex-col">
                            <h3 className="text-md text-gray-300">{atleta.nome}</h3>
                            <p className="text-gray-400 text-xs mb-2">{atleta.time}</p>
                            <p className="text-gray-400  text-sm">{atleta.idade} anos</p>
                        </div>
                    </div>
                ))}
            </section>

            <FooterRec estado="home"></FooterRec>
            
        </StructurePages>
    )
}

export default RecrutadorHome;