const CampoCheckBox = (props) => {

    const aoClicado = (evento) => {
        props.aoClicado(evento.target.value)
    }


    return(
        <div className="w-full flex flex-col text-left justify-start items-start gap-2 mb-4">
            <p className="text-gray-400 text-[15px]">{props.label}</p>
            <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio"
                    name="experiencia"
                    value= "sim"
                    onChange={aoClicado}
                    className="peer w-5 h-5 accent-[#4000ff84] cursor-pointer"
                />
                <span className="text-gray-400 text-[15px]">
                    {props.label1}
                </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="radio"
                    name="experiencia"
                    value="não"
                    onChange={aoClicado}
                    className="peer w-5 h-5 accent-[#4000ff84] cursor-pointer"
                />
                <span className="text-gray-400 text-[15px]">
                    {props.label2}
                </span>
            </label>
        </div>
    )
}

export default CampoCheckBox;