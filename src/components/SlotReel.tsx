"use client";

import {FC, useEffect, useState} from 'react';
import Image from "next/image";
import styles from '../styles/SlotReel.module.css';

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
    className?: string,
    isSpinning: boolean, // New prop to control spinning state
}

const SlotReel: FC<SlotReelProps> = ({choices, currentSelection, onSelectionChange, className, isSpinning}) => {
    const [randomDelay, setRandomDelay] = useState(0);

    useEffect(() => {
        setRandomDelay(Math.random());
    }, []);

    useEffect(() => {
        if (isSpinning) {
            const spinInterval = setInterval(() => {
                onSelectionChange((currentSelection + 1) % choices.length);
            }, 100);

            return () => clearInterval(spinInterval);
        }
    }, [isSpinning, currentSelection, choices.length, onSelectionChange]);

    const currentChoice = choices[currentSelection];

    return (
        <div className={`flex flex-col items-center ${className}`}>
            <div style={{ animationDelay: `${randomDelay}s` }} className={`flex justify-center items-center w-24 h-24 relative border-neutral-500 border-4 rounded-xl bg-white p-10 ${isSpinning ? styles.spinning : ''}`}>
                <Image
                    fill
                    sizes={"100px"}
                    src={currentChoice.image}
                    alt={currentChoice.name}
                    className="object-contain"
                />
            </div>
            <p className="text-center mt-2">{currentChoice.name}</p>
        </div>
    );
};

export default SlotReel;