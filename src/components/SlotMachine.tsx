"use client";

import {useEffect, useState} from 'react';
import SlotReel from "@/components/SlotReel";
import {choices} from "@/constants";

const SlotMachine = () => {
    const [selections, setSelections] = useState(choices.map(() => 0));
    const [isSpinning, setIsSpinning] = useState(false);
    const [spinCount, setSpinCount] = useState(0);

    useEffect(() => {
        if (isSpinning && spinCount < 25) {
            const timer = setTimeout(() => {
                setSelections(choices.map(([, choiceArray]) => Math.floor(Math.random() * choiceArray.length)));
                setSpinCount(prevCount => prevCount + 1);
            }, 100);

            return () => clearTimeout(timer);
        } else if (spinCount >= 10) {
            setIsSpinning(false);
            setSpinCount(0);
        }
    }, [isSpinning, spinCount]);

    const spin = () => {
        setIsSpinning(true);
    };

    const updateSelection = (categoryIndex: number, newSelection: number) => {
        setSelections(prev => {
            const newSelections = [...prev];
            newSelections[categoryIndex] = newSelection;
            return newSelections;
        });
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-3xl">
                {choices.map(([title, choiceArray], index) => (
                    <div key={index} className="flex flex-col items-center flex-grow basis-[calc(33.333%-1rem)] min-w-[120px] max-w-[180px]">
                        <h3 className="text-lg font-bold mb-2 h-14 flex items-center text-center">{title}</h3>
                        <SlotReel
                            className="mb-4 h-40 w-full"
                            choices={choiceArray}
                            currentSelection={selections[index]}
                            onSelectionChange={(newSelection) => updateSelection(index, newSelection)}
                            isSpinning={isSpinning}
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={spin}
                className="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed w-full max-w-xs"
                disabled={isSpinning}
            >
                {isSpinning ? 'Spinning, Please Wait...' : 'Spin'}
            </button>
        </div>
    );
};

export default SlotMachine;