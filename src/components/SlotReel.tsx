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
    return <div key={choices[0].title} className="relative">
        <h2 className="text-xl font-bold mb-4">{choices[0].title}</h2>
        <div className="relative w-full h-64 mb-4">
            <Image
                src={choices[0].image}
                alt={choices[0].title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
        </div>
        <p>{choices[0].description}</p>
    </div>

}

export default SlotReel;