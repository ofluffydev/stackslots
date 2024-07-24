import Surround from "@/components/Surround";
import SlotMachine from "@/components/SlotMachine";

export default function Home() {
  return (
      <main className="w-screen h-screen flex flex-col justify-center text-center">
        <h1 className="font-extrabold text-4xl">Programming stack slot machine</h1>
        <h2>Like gambling, but with your sanity instead of money</h2>
          <Surround character="💜">Made by <span className="font-bold">fluffy</span> :p</Surround>
          <SlotMachine/>
      </main>
  );
}
