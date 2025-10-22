import { faHouse, faCalendar, faUsersViewfinder, faUser, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";


const Footer = (props) => {

    const navigate = useNavigate();


    return(
        <footer className="w-[450px] flex flex-row justify-between items-center px-10 py-3 fixed bottom-0 bg-[#323740]">
            <div className='text-center'>
                <FontAwesomeIcon icon={faHouse} className={`text-2xl cursor-pointer ${props.estado === 'home' ? 'text-white' : 'text-gray-300'}`}></FontAwesomeIcon>
                <p className={`text-xs font-ligh ${props.estado === 'home' ? 'text-white' : 'text-gray-300'}`}>Home</p>
            </div>

            <div className='text-center'>
                <FontAwesomeIcon icon={faCalendar} className={`text-2xl cursor-pointer  ${props.estado === 'calendario' ? 'text-white' : 'text-gray-500'}`}></FontAwesomeIcon>
                <p className="text-xs font-light text-gray-400 ">Calendário</p>
            </div>
            
            <div onClick={() => {navigate("../LolaAi")}} className='bg-blue-600 p-4 rounded-full text-center cursor-pointer'>
                <FontAwesomeIcon icon={faCertificate} className="text-2xl text-white"></FontAwesomeIcon>
            </div>

            <div className='text-center'>
                <FontAwesomeIcon icon={faUsersViewfinder} className={`text-2xl cursor-pointer  ${props.estado === 'comunidade' ? 'text-white' : 'text-gray-500'}`}></FontAwesomeIcon>
                <p className="text-xs font-light text-gray-400 ">Comunidade</p>
            </div>

            <div className='text-center'>
                <FontAwesomeIcon icon={faUser} className={`text-2xl cursor-pointer ${props.estado === 'usuario' ? 'text-white' : 'text-gray-500'}`}></FontAwesomeIcon>
                <p className="text-xs font-light text-gray-400 ">Conta</p>
            </div>
        </footer>
    )

}

export default Footer;
