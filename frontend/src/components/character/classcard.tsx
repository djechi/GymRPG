import { ClassDescriptionProps } from "@/types";

const ClassCard = ({name, strength, stamina, endurance, power, description} : ClassDescriptionProps) => {
    return(
        <>
            <div className="text-center">
                <p className="text-2xl text-rpg-grey-200 mt-[2vh]">
                    {name}
                </p> 

                <p className="text-2xl text-rpg-grey-200 mt-[2vh]">
                    STATS
                </p>

                <p className="text-xl text-rpg-white-100 mt-[2vh]">
                    {strength}
                </p>

                <p className="text-xl text-rpg-white-100 mt-[2vh]">
                    {stamina}
                </p>


                <p className="text-xl text-rpg-white-100 mt-[2vh]">
                    {endurance}
                </p>


                <p className="text-xl text-rpg-white-100 mt-[2vh]">
                    {power}
                </p>

                <p className="text-2xl text-rpg-grey-200 mt-[2vh]">
                    DESCRIPTION
                </p>

                <p className="w-[30vh]text-xl text-rpg-white-100 mt-[2vh]">
                    {description}
                </p>
            </div>
        </>
    )
}

export default ClassCard;