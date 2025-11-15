import { useState, ChangeEvent } from 'react';

const Routineai = () => {
    const [inputVal, setVal] = useState("Type your ideal gym routine: desired amount of reps, sets, workout length, days of week, etc.");
    const click = () => {
        alert(inputVal)
    }

    const change = (event: ChangeEvent<HTMLInputElement>) => {
        setVal(event.target.value)
    }

    return(
        <div className="flex flex-col h-[15vh] w-full items-center justify-center mt-[20vh] mb-[20vh]">
          <div className= "h-[50vh] w-[100vh] mt-5 rounded-2xl">
            <input 
            value = {inputVal}
            onChange={change}
            className="bg-rpg-blue-200 text-center h-[10vh] w-[100vh] mt-5 rounded-2xl text-rpg-grey-200"
            />
            <button onClick = {click} className="bg-rpg-blue-200 h-[5vh] w-[10vh] mt-5 rounded-2xl text-rpg-grey-200" >Submit</button>
          </div>
        </div>
    );
};

export default Routineai;