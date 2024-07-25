import Surround from "@/components/Surround";
import SlotMachine from "@/components/SlotMachine";

export default function Home() {
  return (
      <main className="w-screen min-h-screen flex flex-col justify-center text-center bg-neutral-900">
        <h1 className="font-extrabold text-4xl mt-10 sm:mt-0">Programming stack slot machine</h1>
        <h2>Like gambling, but with your sanity instead of money</h2>
          <Surround character="💜">Made by <span className="font-bold">fluffy</span> :p</Surround>
          <SlotMachine/>
      </main>
  );
}
