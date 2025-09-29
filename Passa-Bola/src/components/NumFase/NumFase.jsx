import './NumFase.css'
import { useNavigate } from "react-router-dom";

const NumFase = ({passoAtual, Link1, Link2, Link3}) => {
    const navigate = useNavigate()

    return (
        <div className="w-full flex justify-between items-center p-4 gap-2 mb-4 cursor-pointer">
            <div onClick={() => navigate(Link1)} className={`bg-gray-100 px-4 py-2 rounded-full border-[#53535300] ${passoAtual >= 1 ? "ativo" : ""}`}>
                <p>1</p>
            </div>

            <div className="flex-grow h-1 bg-gray-100"></div>

            <div onClick={() => navigate(Link2)} className={`cursor-pointer bg-gray-100 px-4 py-2 rounded-full border-[#53535300] ${passoAtual >= 2 ? "ativo" : ""}`}>
                <p>2</p>
            </div>

            <div className="flex-grow h-1 bg-gray-100"></div>

            <div onClick={() => navigate(Link3)} className={`bg-gray-100 px-4 py-2 cursor-pointer rounded-full border-[#53535300] ${passoAtual >= 3 ? "ativo" : ""}`}>
                <p>3</p>
            </div>
        </div>
  );
};

export default NumFase; 