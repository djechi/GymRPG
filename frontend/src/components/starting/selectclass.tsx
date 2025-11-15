const selectclass = () => {
    return(
        <div className="flex flex-col h-[20vh] w-full items-center justify-center mt-[14vh]">
            <p className="font-rpg-default text-rpg-white-100 text-5xl">
            Choose your class
            </p>

            <div className ="grid grid-cols-2 gap-x-[20vh]">
                <div className= "bg-rpg-blue-200 h-[40vh] w-[40vh] mt-5 rounded-2xl col-">
        
                </div>

                <div className= "bg-rpg-blue-200 h-[40vh] w-[40vh] mt-5 rounded-2xl col-">
        
                </div>
            </div>    
        </div>
    );
};

export default selectclass;