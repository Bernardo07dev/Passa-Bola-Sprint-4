const CampoTexto = ({ label, placeholder, type = "text", inputId }) => {

    return (
        <div className="w-full mb-4">
            <label htmlFor={inputId} className="block text-gray-400 text-sm font-medium mb-2">
                {label}
            </label>
        
            <input 
                id={inputId}
                type={type} 
                placeholder={placeholder}
                className="w-full text-sm bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg p-4 transition-shadow"
            />
        </div>
    );
};

export default CampoTexto;