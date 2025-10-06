const CampoTextArea = (props) =>{
    return(
        <div className="w-full mb-4">
            <p className="text-gray-400 text-sm font-ligth mb-1">{props.label}</p>
            <textarea rows="4" className="w-full text-sm bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg p-3.5 transition-shadow" placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTextArea;