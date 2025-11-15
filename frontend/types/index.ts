export interface BackendClassData {
    Strength: number;
    Stamina: number;
    Endurance: number;
    Power: number;
    Description: string;
}

export interface ClassData{
    id: string;
    name: string;
    strength: number;
    stamina: number;
    endurance: number;
    power: number;
    description: string;
}

export interface ClassButtonProps{
    classData: ClassData;
    isSelected: boolean;
    onClick: (classData: ClassData) => void;
}

export interface ClassDescriptionProps {
    name: string;
    strength: number;
    stamina: number;
    endurance: number;
    power: number;
    description: string;
}
