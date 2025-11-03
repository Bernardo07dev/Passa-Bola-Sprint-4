import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



const CampoSearch = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="w-full mb-4">
            <input
                value={props.valor}
                onChange={aoDigitado}
                type={props.type}
                placeholder={props.placeholder}
                className="w-full text-sm bg-[#9586c110] text-gray-400 placeholder-gray-400 rounded-lg p-4 transition-shadow"
            />
        </div>
    );
};

export default CampoSearch;