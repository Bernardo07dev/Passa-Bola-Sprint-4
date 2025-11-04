import coach from "../assets/img/coach.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"

const HeaderRec = () => {
    const navigate = useNavigate();

    return (
        <header className="w-full flex flex-row justify-between items-center px-10 pt-12 mb-8">
            <img className="w-[50px] cursor-pointer" src={coach} onClick={() => navigate('/ContaRec')}></img>
            <FontAwesomeIcon icon={faBell} className="text-2xl text-gray-300" />
        </header>
    )
}

export default HeaderRec;