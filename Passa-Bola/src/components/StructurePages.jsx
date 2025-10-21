const StructurePages = ({children}) => {
    return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[#1D2228]">
        <div className='min-h-screen w-[450px] bg-[#111418] rounded-[20px] text-white flex flex-col justify-center items-center'>
            {children}
        </div>
    </div>
    )
}

export default StructurePages;