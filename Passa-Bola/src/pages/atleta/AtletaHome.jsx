import StructurePages from "../../components/StructurePages";
import Footer from "../../components/footer";
import treinadora from "../../assets/img/treinadora.png";
import ohio from "../../assets/img/ohio.png";
import cor from "../../assets/img/cor.jpg";
import player from "../../assets/img/palyer.png";
import post1 from "../../assets/img/ohio_post.jpg";
import peneira from "../../assets/img/peneira.jpg";
import luiza from "../../assets/img/luiza.png";
import { faBell, faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from "react";

const AtletaHome = () => {
    const [like, setLike] = useState(5);
    const [like2, setLike2] = useState(12);

    function handleLike() {
        if (like == 5) {
            setLike(like + 1);
        } else {
            setLike(like - 1);
        }
    }

    function handleLike2() {
        if (like2 == 12){
            setLike2(like2 + 1);
        } else{
            setLike2(like2 - 1); 
        }
    }

    return(
        <StructurePages>
            <header className="flex flex-row justify-between items-center px-10 pt-12 mb-12">
                <img className="w-[11.5%]" src={treinadora}></img>
                <FontAwesomeIcon icon={faBell} className="text-2xl text-gray-300"></FontAwesomeIcon>
            </header>

            <main className="flex flex-col gap-8 w-full">
                <section className="px-8">
                    <h1 className="text-xl font-semibold mb-4">Eventos</h1>
                    <div className="flex flex-row w-full justify-between gap-4">
                        <div className="cursor-pointer">
                            <img className="w-[190px] h-[120px] rounded-xl mb-2" src={ohio}></img>
                            <p className="text-sm">Entrevista Ohio Unversity</p>
                            <p className="text-gray-500 text-sm">11:10 - 04/08/2025</p>
                        </div>
                        <div className="cursor-pointer">
                            <img className="w-[190px] h-[120px] rounded-xl mb-2" src={cor}></img>
                            <p className="text-sm">Peneira Corinthians</p>
                            <p className="text-gray-500 text-sm">14:45 - 25/09/2025</p>
                        </div>
                    </div>
                </section>

                <section className="px-8">
                    <h1 className="text-xl mb-4">Status Recentes</h1>
                    <div className="w-full flex flex-row gap-4">
                        <div className="w-[50%] p-4 border border-gray-700 rounded-xl">
                            <h1 className="text-sm">Gols</h1>
                            <p className="text-2xl font-semibold">1</p>
                        </div>
                        <div className="w-[50%] p-4 border border-gray-700 rounded-xl">
                            <h1 className="text-sm">Assistencias</h1>
                            <p className="text-2xl font-semibold">2</p>
                        </div>
                    </div>
                    <div className="w-full mt-4 p-4 border border-gray-700 rounded-xl">
                        <h1 className="text-sm">Minutos Jogados</h1>
                        <p className="text-2xl font-semibold">82</p>
                    </div>
                </section>

                <section>
                    <h1 className="text-lg mb-4 px-8">Seu Feed</h1>
                    <div className="flex flex-row gap-4 px-8">
                        <img className="w-[13%] rounded-full" src={player}></img>
                        <div className="flex flex-col">
                            <h1 className="text-base">Sofia Bastos</h1>
                            <p className="text-sm text-gray-500">2d</p>
                        </div>
                    </div>
                    <p className="font-light text-sm mt-4 px-8 mb-4">Mais uma vitória para o time, obrigado #OhioUneversity pela oportunidade!!</p>
                    <img src={post1} className="w-full h-[300px] object-cover"></img>
                    <div className="flex flex-row justify-start gap-4 px-10 py-6">
                        <div className="flex flex-row items-center gap-1">
                            <p className="text-sm text-gray-200">{like}</p>
                            <FontAwesomeIcon onClick={handleLike} icon={faHeart} className={`cursor-pointer text-xl  ${like == 5 ? 'text-gray-600':'text-red-800' }`}></FontAwesomeIcon>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faComment} className="text-xl text-gray-600"></FontAwesomeIcon>
                            <p className="text-sm text-gray-200">3</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faShare} className="text-xl text-gray-600"></FontAwesomeIcon>
                            <p className="text-sm text-gray-200">1</p>
                        </div>
                    </div>
                </section>

                <section className="">
                    <div className="flex flex-row gap-4 px-10">
                        <img className="w-[15%] rounded-full" src={luiza}></img>
                        <div className="flex flex-col">
                            <h1 className="text-base">Luiza Sanches</h1>
                            <p className="text-sm text-gray-500">4d</p>
                        </div>
                    </div>
                    <p className="font-light text-sm mt-4 px-10 mb-4">Hoje fiz uma peneira no Corinthians Sport Clube, muito feliz pela oportunidade, obrigado #passabola</p>
                    <img src={peneira} className="w-full h-[300px] object-cover"></img>
                    <div className="flex flex-row justify-start gap-4 px-10 py-6">
                        <div className="flex flex-row items-center gap-1">
                            <FontAwesomeIcon onClick={handleLike2} icon={faHeart} className={`cursor-pointer text-xl  ${like2 == 12 ? 'text-gray-600':'text-red-800' }`}></FontAwesomeIcon>
                            <p className="text-sm text-gray-200">{like2}</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faComment} className="text-xl text-gray-600"></FontAwesomeIcon>
                            <p className="text-sm text-gray-200">4</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <FontAwesomeIcon icon={faShare} className="text-xl text-gray-600"></FontAwesomeIcon>
                            <p className="text-sm text-gray-200"></p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer estado="home"></Footer>
        </StructurePages>
    )
}

export default AtletaHome;