const CampoSelect = (props) => {
    return(
        <div className="w-full">
            <h1 className="text-gray-400 text-sm font-ligth mb-2">{props.label}</h1>
            <select className="bg-[#1e2836] w-full text-white p-3.5 text-sm rounded-lg border border-gray-600">
                <option value="Técnico">Técnico</option>
                <option value="Assistente">Assistente</option>
                <option value="Auxiliar">Auxiliar</option>
                <option value="Scouting">Scouting</option>
            </select>
        </div>
    )
}

export default CampoSelect;