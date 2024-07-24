interface SlotMachineProps {
    reels: Element[];
}

function SlotMachine({reels}: SlotMachineProps) {
    return (<div>
        {reels.map((reel, index) => (<div key={index}>
            {reel}
        </div>))}
    </div>)
}

export default SlotMachine;