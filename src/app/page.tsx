import Game from "./Game";

export default function Home() {
  return (
    <>
      <div className="py-8 bg-linear-60 from-sky-500 to-indigo-500">
        <h1 className="text-center text-4xl font-bold imperial text-white">
          Zgadnij kto jest oszustem!
        </h1>
      </div>
      <div className="flex justify-center">
        <Game />
      </div>
    </>
  );
}
