import confetti from "canvas-confetti";
import {
  useContextData,
  useUpdateContextData,
} from "../context/ContextProvider";
import HangmanWord from "./HangmanWord";

export default function Modal() {
  const { isWinner, isLoser } = useContextData();
  const { togglePopUp } = useUpdateContextData();

  const isPopUpVisible = isWinner || isLoser;

  const scalar: number = 3;
  const color = "#FFFFFFDE";
  const a = confetti.shapeFromText({
    text: "A",
    scalar,
    color,
  });
  const b = confetti.shapeFromText({
    text: "B",
    scalar,
    color,
  });
  const c = confetti.shapeFromText({
    text: "C",
    scalar,
    color,
  });
  const d = confetti.shapeFromText({
    text: "D",
    scalar,
    color,
  });
  const e = confetti.shapeFromText({
    text: "E",
    scalar,
    color,
  });
  const f = confetti.shapeFromText({
    text: "F",
    scalar,
    color,
  });

  return (
    <div
      className={`${
        isPopUpVisible
          ? "flex justify-center items-center backdrop-blur-sm w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-10 lg:text-5xl md:text-4xl sm:text-3xl text-2xl animate-popup"
          : "hidden"
      }`}
    >
      {isWinner &&
        (setTimeout(() => {
          confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 360,
            origin: {
              x: Math.random(),

              y: Math.random() - 0.2,
              // y: 0.4,
            },
            shapes: [a, b, c, d, e, f],
            scalar,
          });
        }, 500),
        (setTimeout(() => {
          confetti.reset();
        }, 7000),
        (
          <div className="bg-green-400 p-10 rounded-lg flex flex-col lg:gap-8 md:gap-6 sm:gap-4 gap-2 relative">
            <h2>CONGRATS YOU WON</h2>
            <h2>The word was:</h2>
            <HangmanWord />
            <button
              onClick={togglePopUp}
              className="font-bold px-3 py-2 text-green-400 bg-greyBg rounded-lg w-2/3 hover:ring ring-green-500 lg:text-4xl md:text-3xl sm:text-xl text-lg transition-all duration-200"
            >
              Play Again
            </button>
            <h2 className="lg:text-2xl md:text-xl sm:text-lg text-base underline">
              Or press Enter
            </h2>
            <button
              className="text-green-400 absolute top-2 right-2 lg:text-2xl md:text-xl sm:text-lg text-base rounded-full bg-greyBg lg:w-[30px] lg:h-[30px] sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] flex justify-center items-center shadow hover:ring-2 ring-green-500 transition-all duration-200"
              onClick={togglePopUp}
            >
              X
            </button>
          </div>
        )))}
      {isLoser && (
        <div className="bg-red-300 p-10 rounded-lg flex flex-col lg:gap-8 md:gap-6 sm:gap-4 gap-2 relative">
          {/* <div className="flex flex-col gap-5"> */}
          <h2>Sorry, You LOST</h2>
          <h2>The word was: </h2>
          <HangmanWord />
          <button
            onClick={togglePopUp}
            className="font-bold px-3 py-2 text-red-500 bg-greyBg rounded-lg w-2/3 hover:ring ring-red-500 lg:text-4xl md:text-3xl sm:text-xl text-lg"
          >
            Try Again
          </button>
          <h2 className="lg:text-2xl md:text-xl sm:text-lg text-base underline">
            Or press Enter
          </h2>
          <button
            className="text-red-500 absolute top-2 right-2 lg:text-2xl md:text-xl sm:text-lg text-base rounded-full bg-greyBg lg:w-[30px] lg:h-[30px] sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] flex justify-center items-center shadow hover:ring-2 ring-red-500 transition-all duration-200"
            onClick={togglePopUp}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}
