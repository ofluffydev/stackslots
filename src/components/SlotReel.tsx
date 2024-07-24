import Image from "next/image";

export class Choice {
    title: string;
    image: string;
    description: string;

    constructor(title: string, image: string, description: string) {
        this.title = title;
        this.image = image;
        this.description = description;
    }
}


interface SlotReelProps {
    // Array of choices
    choices: Choice[];
}

function SlotReel({choices}: SlotReelProps) {
    return (
        <div>
            {choices.map((choice) => (
                <div key={choice.title}>
                    <h2>{choice.title}</h2>
                    <Image src={choice.image} alt={choice.title} />
                    <p>{choice.description}</p>
                </div>
            ))}
        </div>
    );
}
export default SlotReel;