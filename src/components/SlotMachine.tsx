"use client";

import {useEffect, useState} from 'react';
import SlotReel, {Choice} from "@/components/SlotReel";

const React = new Choice("React", "/react.png", "A JavaScript library for building user interfaces");
const BoilerplateHTML = new Choice("Boilerplate HTML", "/html.png", "A simple HTML template");
const Svelte = new Choice("Svelte", "/svelte.png", "A JavaScript framework for building user interfaces");
const FrontEndChoices = [React, BoilerplateHTML, Svelte];

const NodeJS = new Choice("Node.js", "/nodejs.png", "A JavaScript runtime built on Chrome's V8 JavaScript engine");
const Express = new Choice("Express", "/express.png", "A minimal and flexible Node.js web application framework");
const Django = new Choice("Django", "/django.png", "A high-level Python web framework");
const BackEndChoices = [NodeJS, Express, Django];

const PostgreSQL = new Choice("PostgreSQL", "/postgresql.png", "A powerful, open source object-relational database system");
const MongoDB = new Choice("MongoDB", "/mongodb.png", "A general purpose, document-based, distributed database");
const SQLite = new Choice("SQLite", "/sqlite.png", "A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine");
const DatabaseChoices = [PostgreSQL, MongoDB, SQLite];

const Docker = new Choice("Docker", "/docker.png", "A platform for building, sharing, and running applications");
const Kubernetes = new Choice("Kubernetes", "/kubernetes.png", "An open-source platform designed to automate deploying, scaling, and operating application containers");
const GitHubActions = new Choice("GitHub Actions", "/github.png", "Automate, customize, and execute your software development workflows right in your repository");
const DevOpsChoices = [Docker, Kubernetes, GitHubActions];

type ChoiceCategory = [string, Choice[]];

const choices: ChoiceCategory[] = [["Front-end", FrontEndChoices], ["Back-end", BackEndChoices], ["Database", DatabaseChoices], ["DevOps", DevOpsChoices]];

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

    return (<div className="flex flex-col items-center gap-4">
            <div className="flex flex-row justify-center gap-10">
                {choices.map(([title, choiceArray], index) => (<div key={index} className="flex flex-col items-center">
                        <h3 className="text-lg font-bold mb-2">{title}</h3>
                        <SlotReel
                            className="mb-4"
                            choices={choiceArray}
                            currentSelection={selections[index]}
                            onSelectionChange={(newSelection) => updateSelection(index, newSelection)}
                        />
                    </div>))}
            </div>
            <button
                onClick={spin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={isSpinning}
            >
                {isSpinning ? 'Spinning...' : 'Spin'}
            </button>
        </div>);
};

export default SlotMachine;