import StructurePages from "../../components/StructurePages";
import FooterRec from "../../components/FooterRec";
import HeaderRec from "../../components/HeaderRec";
import coach from "../../assets/img/coach.png";
import texas from "/texas.png";
import red from "/red.png";
import sao from "/sao.png";

const ContaRec = () => {
    return(
        <StructurePages>
            <HeaderRec></HeaderRec>

            <img className="w-[150px] h-[150px] object-cover rounded-full mb-8" src={coach}></img>
            <h1 className="font-semibold text-2xl pb-1">Jolly Snow</h1>
            <p className="text-gray-500 text-xs mb-2">Head Coach / Assistente Técnica</p>
            <p className="text-gray-500 text-sm">Texas University</p>

            <div className="w-[85%] flex flex-col justifiy-center items-center mb-10 mt-2">
                <p className="mb-2 text-lg font-semibold text-left w-full">Sobre</p>
                <div className="w-full flex flex-col justify-start p-6 py-8 bg-[#191e24d0] rounded-md">
                    <p className="text-sm text-gray-400">Jolly Snow é uma treinadora dedicada da Texas University, com anos de experiência no desenvolvimento de talentos femininos no esporte universitário. Apaixonada por formação técnica e mental das atletas, Jolly acredita que o sucesso vem da combinação entre disciplina, inteligência tática e espírito de equipe.</p>
                </div>
            </div>

            <section className="w-full px-8 mb-10">
                <h1 className="text-md mb-4">Formações e certificações 🏅</h1>
                <div className="w-full flex flex-row gap-4">
                    <div className="w-[50%] p-4 border border-gray-700 rounded-xl">
                        <h1 className="text-xs mb-2">Licenças de treinador(a)</h1>
                        <p className="text-lg font-semibold">USSF B License</p>
                    </div>
                    <div className="w-[50%] p-4 border border-gray-700 rounded-xl">
                        <h1 className="text-xs mb-1">Graduação e especializações</h1>
                        <p className="text-lg font-semibold">Management</p>
                    </div>
                </div>
            </section>

            <section className="w-full px-8 mb-8">
                <h1 className="text-md mb-4">Histórico profissional 📈</h1>
                <div className="flex flex-row gap-4">
                    <img className="w-[40px] h-[40px] object-cover rounded-full" src={texas}></img>
                    <div>
                        <h2 className="text-[15px]">Head Coach</h2>
                        <p className="text-sm text-gray-500">Texas University (2018 – Presente)</p>
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
            </section>

            <FooterRec estado="conta"></FooterRec>
        </StructurePages>
    )
}

export default ContaRec;