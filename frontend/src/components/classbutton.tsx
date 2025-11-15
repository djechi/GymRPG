import { ClassButtonProps } from "@/types/index";

const Classbutton = ({classData, isSelected, onClick} : ClassButtonProps) => {
 return(
    <button
        onClick={() => onClick(classData)}
        className={`w-[20vh] rounded-2xl text-rpg-white-100 bg-rpg-blue-200 text-2xl text-center transition-all hover:bg-rpg-gold${
        isSelected  
        ? 'bg-rpg-gold border-2 border-rpg-white-100'
        : 'bg-rpg-blue-200'
    }`}
    >
        {classData.name}
    </button>
 );
};

export default Classbutton;