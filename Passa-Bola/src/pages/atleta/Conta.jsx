import StructurePages from "../../components/StructurePages";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import treinadora from "../../assets/img/treinadora.png";
import palme from "/palme.jpg";
import red from "/red.png";
import sao from "/sao.png";

const Conta = () => {
    return(
        <StructurePages>
            <Header></Header>
            <img className="w-[150px] h-[150px] object-cover rounded-full mb-8" src={treinadora}></img>
            <h1 className="font-semibold text-2xl pb-1">Lauren James</h1>
            <p className="text-gray-500 text-sm">Meia / Atacante</p>
            <p className="text-gray-500 text-sm">Idade: 21</p>

            <div className="w-[85%] flex flex-col justifiy-center items-center mb-10 mt-6">
                <p className="mb-2 text-lg font-semibold text-left w-full px-2">Sobre</p>
                <div className="w-full flex flex-col justify-start">
                    <div className="w-full h-[1px] bg-gray-700"></div>
                    <div className="w-[60%] text-sm flex flex-row justify-between items-center px-2 py-4">
                        <p className="text-gray-500">Altura</p>
                        <p>1.68</p>
                    </div>
                    <div className="w-full h-[0.7px] bg-gray-700"></div>
                    <div className="w-[60%]  text-sm flex flex-row justify-between items-center px-2 py-4">
                        <p className="text-gray-500">Peso</p>
                        <p>57kg</p>
                    </div>

                    <div className="w-full h-[0.7px] bg-gray-700"></div>
                    <div className="w-[68%] text-sm flex flex-row justify-between items-center px-2 py-4">
                        <p className="text-gray-500">Nacionalidade</p>
                        <p>Brasileira</p>
                    </div>
                </div>
            </div>

            <section className="w-full px-8 mb-10">
                <h1 className="text-lg mb-4">Status Recentes</h1>
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

            <section className="w-full px-8 mb-8">
                <h1 className="text-lg mb-4">Eventos</h1>
                <div className="flex flex-row gap-4">
                    <img className="w-[40px] h-[40px] object-cover rounded-full" src={palme}></img>
                    <div>
                        <h2 className="text-[15px]">Observação Técnica Palmeiras</h2>
                        <p className="text-sm text-gray-500">18/11/2025</p>
                    </div>
                </div>
                <div className="w-[1.5px] h-[40px] bg-gray-600 ml-[18px] mt-[-2px]"></div>
                <div className="flex flex-row gap-4">
                    <img className="w-[40px] h-[40px] object-cover rounded-full" src={sao}></img>
                    <div>
                        <h2 className="text-[15px]">Avaliação São Paulo FC Sub-20</h2>
                        <p className="text-sm text-gray-500">10/11/2025</p>
                    </div>
                </div>
                <div className="w-[1.5px] h-[40px] bg-gray-600 ml-[18px] mt-[-2px]"></div>
                <div className="flex flex-row gap-4">
                    <img className="w-[40px] h-[40px] object-cover rounded-full" src={red}></img>
                    <div>
                        <h2 className="text-[15px]">Seletiva Red Bull Bragantino</h2>
                        <p className="text-sm text-gray-500">02/12/2025</p>
                    </div>
                </div>
            </section>

            <Footer estado="conta"></Footer>
        </StructurePages>
    )
}

export default Conta;