import Structure from "../../components/Structure"; 
import treinadora from "../../assets/img/treinadora.png";
import ohio from "../../assets/img/ohio.png";
import cor from "../../assets/img/cor.jpg";
import { faBell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const AtletaHome = () => {
    return(
        <Structure>
            <header className="flex flex-row justify-between items-center mb-12">
                <img className="w-[10%]" src={treinadora}></img>
                <h1 className="text-[1.1em] font-medium">Home</h1>
                <FontAwesomeIcon icon={faBell} className="text-xl"></FontAwesomeIcon>
            </header>

            <main className="flex flex-col gap-8 w-full">
                <section>
                    <h1 className="text-xl mb-4">Eventos</h1>
                    <div className="flex flex-row w-full justify-between gap-6">
                        <div className="cursor-pointer">
                            <img className="w-[160px] h-[120px] rounded-xl mb-2" src={ohio}></img>
                            <p className="text-sm">Entrevista Ohio Unversity</p>
                            <p className="text-gray-500 text-sm">11:10 - 04/08/2025</p>
                        </div>
                        <div className="cursor-pointer">
                            <img className="w-[160px] h-[120px] rounded-xl mb-2" src={cor}></img>
                            <p className="text-sm">Peneira Corinthians</p>
                            <p className="text-gray-500 text-sm">11:10 - 04/08/2025</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h1 className="text-xl mb-4">Status Recentes</h1>
                    <div className="w-full flex flex-row gap-4">
                        <div className="w-[50%] p-4 border border-gray-700 rounded-xl">
                            <h1 className="text-base">Gols</h1>
                            <p className="text-2xl font-semibold">1</p>
                        </div>
                        <div className="w-[50%] p-4 border border-gray-700 rounded-xl">
                            <h1 className="text-base">Assistencias</h1>
                            <p className="text-2xl font-semibold">2</p>
                        </div>
                    </div>
                    <div className="w-full mt-4 p-4 border border-gray-700 rounded-xl">
                        <h1 className="text-base">Minutos Jogados</h1>
                        <p className="text-2xl font-semibold">82</p>
                    </div>
                </section>

                <section>
                    <h1 className="text-lg mb-4">Seu Feed</h1>
                    <div></div>
                </section>
            </main>
        </Structure>
    )
}

export default AtletaHome;