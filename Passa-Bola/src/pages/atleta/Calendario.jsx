import StructurePages from "../../components/StructurePages";
import Footer from "../../components/footer";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import treinadora from "../../assets/img/treinadora.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";

const Calendario = () => {
    const dias = Array.from({ length: 28 }, (_, i) => i + 1);
    const [diaAtivo, setDiaAtivo] = useState(null);
    const [eventoSelecionado, setEventoSelecionado] = useState(null);
    const [peneiras, setPeneiras] = useState([]);

    useEffect(() => {
        axios.get("/calendario.json")
            .then((res) => setPeneiras(res.data))
            .catch((err) => console.error("Erro ao carregar peneiras:", err));
    }, []);

    const handleClick = (dia) => {
        if (diaAtivo === dia) {
            setDiaAtivo(null);
            setEventoSelecionado(null);
        } else {
            setDiaAtivo(dia);
            const evento = peneiras.find((e) => e.dia === dia);
            setEventoSelecionado(evento || null);
        }
    };

    return (
        <StructurePages>
            <header className="flex flex-row justify-between items-center px-10 pt-12 mb-8">
                <img className="w-[11.5%]" src={treinadora} />
                <FontAwesomeIcon icon={faBell} className="text-2xl text-gray-300" />
            </header>

            <main className="flex px-10 flex-col w-full">
                <h1 className="text-xl font-semibold mb-4 mx-2">Calendário</h1>
                <p className="text-sm text-gray-400 font-light mb-2 mx-2">Novembro</p>

                <section className="flex flex-col mx-2">
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
                                    className={`cursor-pointer flex w-10 h-10 justify-center items-center rounded-full transition-all duration-200 
                                        ${
                                            diaAtivo === dia
                                                ? "bg-gray-700 text-white scale-105"
                                                : peneiras.some((p) => p.dia === dia)
                                                ? "text-blue-400 border border-blue-400"
                                                : "text-gray-500"
                                        }`}
                                >
                                    {dia}
                                </p>
                            ))}
                        </div>
                    ))}
                </section>

                <section className="mt-6 text-center">
                    {eventoSelecionado ? (
                        <div className="bg-[#1f293769] text-left text-white p-6 border border-gray-700 rounded-xl">
                            <h2 className="text-md">{eventoSelecionado.evento}</h2>
                            <p className="text-sm text-gray-300 mt-1">
                                Dia {eventoSelecionado.dia} às {eventoSelecionado.horário}
                            </p>
                            <p className="text-gray-400 text-sm mt-2">{eventoSelecionado.descrição}</p>
                        </div>
                    ) : diaAtivo ? (
                        <p className="text-gray-400 mt-6">Nenhum evento neste dia.</p>
                    ) : (
                        <p className="text-gray-500 mt-6">Clique em um dia para ver os detalhes.</p>
                    )}
                </section>
            </main>

            <Footer estado="calendario" />
        </StructurePages>
    );
};

export default Calendario;
