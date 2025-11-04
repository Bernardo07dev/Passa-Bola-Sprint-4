import { faHouse, faUser, faComment, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

const FooterRec = (props) => {
    const navigate = useNavigate();

    return(
        <footer className="w-[450px] flex flex-row justify-center items-center gap-14 py-4 pt-5 fixed bottom-0 bg-[#323740]">
            <div className='text-center' onClick={() => {navigate("../RecrutadorHome")}}>
                <FontAwesomeIcon  icon={faHouse} className={`text-2xl cursor-pointer ${props.estado === 'home' ? 'text-white' : 'text-gray-500'}`}></FontAwesomeIcon>
                <p className={`text-xs font-ligh cursor-pointer ${props.estado === 'home' ? 'text-white' : 'text-gray-500'}`}>Home</p>
            </div>

            <div className='text-center' onClick={() => {navigate("../rede")}}>
                <FontAwesomeIcon icon={faEye} className={`text-2xl cursor-pointer ${props.estado === 'rede' ? 'text-white' : 'text-gray-500'}`}></FontAwesomeIcon>
                <p className={`text-xs font-ligh cursor-pointer ${props.estado === 'rede' ? 'text-white' : 'text-gray-500'}`}>Rede</p>
            </div>

            <div className='text-center' onClick={() => {navigate("../Mensagens")}}>
                <FontAwesomeIcon icon={faComment} className={`text-2xl cursor-pointer  ${props.estado === 'mensagens' ? 'text-white' : 'text-gray-500'}`}></FontAwesomeIcon>
                <p className={`text-xs font-ligh cursor-pointer ${props.estado === 'mensagens' ? 'text-white' : 'text-gray-500'}`}>Mensagens</p>
            </div>

            <div className='text-center' onClick={() => {navigate("../ContaRec")}}>
                <FontAwesomeIcon icon={faUser} className={`text-2xl cursor-pointer ${props.estado === 'conta' ? 'text-white' : 'text-gray-500'}`}></FontAwesomeIcon>
                <p className={`text-xs font-ligh cursor-pointer ${props.estado === 'conta' ? 'text-white' : 'text-gray-500'}`}>Conta</p>
            </div>
        </footer>
    )
}

export default FooterRec;