const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }


    return (
        <div className="w-full mb-4">
            <label className="block text-gray-400 text-sm font-ligth mb-1">
                {props.label}
            </label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                type={props.type}
                placeholder={props.placeholder}
                disabled={props.disabled}
                className="w-full text-sm bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg p-3.5 transition-shadow"
            />
        </div>
    );
};

export default CampoTexto;