"use client";

import { useState, useEffect } from 'react';
import ClassCard from "@/src/components/classcard";
import ClassButton from "@/src/components/classbutton";
import fetchClasses from "@/src/data/api";
import { ClassData } from "@/types";
import { BackendClassData } from "@/types";
const Selectclass = () => {
    const [selectClass, setSelectClass] = useState<ClassData |null>(null);
    const [classes, setClasses] = useState<ClassData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadClasses = async () => {
            try {
                setLoading(true);
                const classData = await fetchClasses();

    const transformedClasses = Object.entries(classData as { [key: string]: BackendClassData }).map(([key, value]) => ({
                        id: key,
                        name: key.charAt(0).toUpperCase() + key.slice(1),
                        strength: value.Strength,
                        stamina: value.Stamina,
                        endurance: value.Endurance,
                        power: value.Power,
                        description: value.Description
                    }));

                    setClasses(transformedClasses);
                    setLoading(false);
            } catch (err) {
                setError((err as Error).message || "Can't load classes");
                setLoading(false);
            }
        };

        loadClasses();
    }, []);

    if (loading) {
        return(
            <div className = "flex flex-col h-[20vh] w-full items-center justify-center mt-[22vh]">
                <p className ="font-rpg-default text-rpg-white-100 text-5xl">
                    Choose your class
                </p>
            <div className="text-rpg-white-100 mt-8 text-xl">Loading classes...</div>
            </div>
        );
    }

    if (error) {
        return(
            <div className = "flex flex-col h-[20vh] w-full items-center justify-center mt-[22vh]">
                <p className ="font-rpg-default text-rpg-white-100 text-5xl">
                    Choose your class
                </p>
            <div className="text-rpg-white-100 mt-8 text-xl">Error occured</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[20vh] w-full items-center justify-center mt-[22vh]">
            <p className="font-rpg-default text-rpg-white-100 text-5xl">
                Choose your class
            </p>

            <div className="grid grid-cols-2 gap-x-[20vh] mt-8">
                {/* Class Buttons Column */}
                <div className="h-[50vh] w-[40vh] mt-5 rounded-2xl p-4 flex flex-col space-y-4">
                    {classes.map((classData) => (
                        <ClassButton
                            key={classData.id}
                            classData={classData}
                            isSelected={selectClass?.id === classData.id}
                            onClick={setSelectClass}
                        />
                    ))}
                </div>

                {/* Class Description Column */}
                <div className="bg-rpg-blue-200 h-[50vh] w-[60vh] mt-5 rounded-2xl p-6">
                    {selectClass ? (
                        <ClassCard
                            name={selectClass.name}
                            strength={selectClass.strength}
                            stamina={selectClass.stamina}
                            endurance={selectClass.endurance}
                            power={selectClass.power}
                            description={selectClass.description}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-rpg-white-100 font-rpg-default text-xl">
                            Select a class to view details
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Selectclass;