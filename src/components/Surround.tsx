interface SurroundProps {
    character: string;
    children: React.ReactNode;
}

export default function Surround({character, children}: SurroundProps) {
    return (
        <div>
            {character}
            {children}
            {character}
        </div>
    );
}