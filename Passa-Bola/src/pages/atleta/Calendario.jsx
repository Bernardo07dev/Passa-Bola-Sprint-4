import StructurePages from "../../components/StructurePages";
import Footer from "../../components/footer";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import treinadora from "../../assets/img/treinadora.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Calendario = () => {
    const dias = Array.from({ length: 28 }, (_, i) => i + 1);
    const [diaAtivo, setDiaAtivo] = useState(null);

    const handleClick = (dia) => {
        if (diaAtivo === dia) {
            setDiaAtivo(null);
        } else {
            setDiaAtivo(dia);
        }
    };

    return (
        <StructurePages>
            <header className="flex flex-row justify-between items-center px-10 pt-12 mb-12">
                <img className="w-[11.5%]" src={treinadora} />
                <FontAwesomeIcon icon={faBell} className="text-2xl text-gray-300" />
            </header>

            <main className="flex px-10 flex-col w-full">
                <h1 className="text-xl font-semibold mb-8 mx-6">Calendário</h1>
                <p className="text-sm text-gray-400 font-light mb-2 mx-6">Novembro</p>

                <section className="flex flex-col mx-6">
                    {Array.from({ length: 4 }).map((_, semana) => (
                        <div
                            key={semana}
                            className={`flex flex-row justify-between py-3 ${
                                semana !== 0 ? "border-t border-gray-700" : ""
                            }`}
                        >
                            {dias.slice(semana * 7, semana * 7 + 7).map((dia) => (
                                <p
                                    key={dia}
                                    onClick={() => handleClick(dia)}
                                    className={`cursor-pointer flex w-10 h-10 justify-center items-center  rounded-full transition-all duration-200 ${
                                        diaAtivo === dia
                                            ? "bg-gray-700 text-white scale-105"
                                            : "bg-[#fff0] text-gray-500"
                                    }`}
                                >
                                    {dia}
                                </p>
                            ))}
                        </div>
                    ))}
                </section>
            </main>

            <Footer estado="calendario" />
        </StructurePages>
    );
};

export default Calendario;
