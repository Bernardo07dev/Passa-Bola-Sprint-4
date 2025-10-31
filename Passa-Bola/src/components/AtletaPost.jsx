import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from "react";


const AtletaPost = (props) => {

    const [like, setLike] = useState(props.like);

    const handleLike = () => {
        if (like == props.like) {
            setLike(like + 1);
        } else {
            setLike(like - 1);
        }
    }

    return(
        <section>
            <div className="flex flex-row gap-4 px-10">
                <img className="w-[13%] rounded-full" src={props.perfil}></img>
                <div className="flex flex-col">
                    <h1 className="text-base">Sofia Bastos</h1>
                    <p className="text-sm text-gray-500">2d</p>
                </div>
            </div>
            <p className="font-light text-sm mt-4 px-10 mb-4">{props.descricao}</p>
            <img src={props.post} className="w-full h-[300px] object-cover"></img>
            <div className="flex flex-row justify-start gap-4 px-10 py-6">
                <div className="flex flex-row items-center gap-1">
                    <p className="text-sm text-gray-200">{like}</p>
                    <FontAwesomeIcon onClick={handleLike} icon={faHeart} className={`cursor-pointer text-xl  ${like == props.like ? 'text-gray-600':'text-red-800' }`}></FontAwesomeIcon>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon icon={faComment} className="text-xl text-gray-600"></FontAwesomeIcon>
                    <p className="text-sm text-gray-200">3</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon icon={faShare} className="text-xl text-gray-600"></FontAwesomeIcon>
                    <p className="text-sm text-gray-200">1</p>
                </div>
            </div>
            </section>
        )
}

export default AtletaPost;