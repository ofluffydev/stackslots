import React, {useEffect, useState} from 'react';
import Image from "next/image";

export class Choice {
    name: string;
    image: string;
    description: string;

    constructor(name: string, image: string, description: string) {
        this.name = name;
        this.image = image;
        this.description = description;
    }
}

interface SlotReelProps {
    choices: Choice[],
    currentSelection: number,
    onSelectionChange: (newSelection: number) => void,
    className?: string
}

const SlotReel: React.FC<SlotReelProps> = ({choices, currentSelection, onSelectionChange, className}) => {
    const [isSpinning, setIsSpinning] = useState(false);

    useEffect(() => {
        if (isSpinning) {
            const spinInterval = setInterval(() => {
                onSelectionChange((currentSelection + 1) % choices.length);
            }, 100);

            setTimeout(() => {
                clearInterval(spinInterval);
                setIsSpinning(false);
            }, 2000);

            return () => clearInterval(spinInterval);
        }
    }, [isSpinning, currentSelection, choices.length, onSelectionChange]);

    const handleClick = () => {
        setIsSpinning(true);
    };

    const currentChoice = choices[currentSelection];

    return (
        <div onClick={handleClick} className={`cursor-pointer ${className}`}>
            <Image fill src={currentChoice.image} alt={currentChoice.name} className="w-24 h-24 object-contain"/>
            <p className="text-center mt-2">{currentChoice.name}</p>
        </div>
    );
};

export default SlotReel;