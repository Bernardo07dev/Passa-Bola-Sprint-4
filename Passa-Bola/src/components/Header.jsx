import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img//logo.svg"
import treinadora from "../assets/img/treinadora.png";

const Header = () => {
    return(
        <header className="flex flex-row justify-between items-center px-10 pt-12 mb-8">
            <img className="w-[11.5%]" src={treinadora} />
            <FontAwesomeIcon icon={faBell} className="text-2xl text-gray-300" />
        </header>
    )
}

export default Header;