import { useState, ChangeEvent } from 'react';

const Name = () => {
    const [inputVal, setVal] = useState("Adventure Name");
    const click = () => {
        alert(inputVal)
    }

    const change = (event: ChangeEvent<HTMLInputElement>) => {
        setVal(event.target.value)
    }
    return(
        <div className="flex flex-col h-[30vh] w-full items-center justify-center">
          <p className="font-rpg-default text-rpg-white-100 text-5xl">
            Character Name
          </p>

            <input 
            value = {inputVal}
            onChange={change}
            className="bg-rpg-blue-200 text-center h-[8vh] w-[50vh] mt-5 rounded-2xl text-rpg-grey-200"
            />

            <button onClick = {click} className="bg-rpg-blue-200 h-[5vh] w-[10vh] mt-5 rounded-2xl text-rpg-grey-200" >Submit</button>
        </div>
    );
};

export default Name;