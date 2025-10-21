const Structure = ({children}) => {
    return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[#1D2228]">
        <div className='min-h-screen w-[450px] bg-[#111418] rounded-[20px] px-10 text-white flex flex-col justify-center items-center'>
            {children}
        </div>
    </div>
    )
}

export default Structure;