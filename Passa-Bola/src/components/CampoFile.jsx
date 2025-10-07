import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';


const CampoFile = (props) => {
    const [arquivo, setArquivo] = useState(null);

    return(

        <div className="flex flex-col mb-2 w-full">
            <label className="text-gray-400 text-sm font-ligth mb-1">{props.label}</label>
            <input
                id="file"
                type="file"
                className="hidden"
                onChange={(e) => setArquivo(e.target.files[0])}
            />

                <div className="flex flex-row gap-2 w-full cursor-pointer text-sm bg-[#1F2937] text-white py-4 px-4 rounded-md align-middle">
                    <FontAwesomeIcon className=" w-6 h-6 flex align-center text-justify text-gray-400 pr-1" icon={faFile}></FontAwesomeIcon>
                    <div className="">
                        <label htmlFor="file" className="w-full">
                            {arquivo ? arquivo.name : "Escolher Arquivo"}
                        </label>
                        <p id="file-name" className=" text-xs text-gray-400">
                            {arquivo ? "" : "Nenhum arquivo escolhido"}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default CampoFile;