import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import treinadora from "../assets/img/treinadora.png";

const Header = () => {
    return(
        <header className="w-full flex flex-row justify-between items-center px-10 pt-12 mb-8">
            <img className="w-[50px] h-[50px] object-cover rounded-full" src={treinadora} />
            <FontAwesomeIcon icon={faBell} className="text-2xl text-gray-300" />
        </header>
    )
}

export default Header;