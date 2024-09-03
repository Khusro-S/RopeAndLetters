import { useEffect, useState } from "react";
import { BODY_PARTS } from "./HangmanDrawing";

const Letters = ["L", "O", "A", "D", "I", "N", "G"];
export default function LoadingPage() {
  const [visibleParts, setVisibleParts] = useState(0);
  const BODY_PART = BODY_PARTS;
  useEffect(() => {
    if (visibleParts <= BODY_PART.length) {
      const timer = setTimeout(() => {
        setVisibleParts((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    } else setVisibleParts(0);
  }, [visibleParts, BODY_PART.length]);

  return (
    <div className="flex flex-col justify-center items-center backdrop-blur-lg w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-10 lg:gap-14 md:gap-12 sm:gap-10 gap-8 animate-popdown delay-1300ms">
      <div className="relative lg:mt-3">
        {BODY_PART.slice(0, visibleParts)}
        <div className="absolute w-[5px] h-[40px] max-sm:w-[3px] max-sm:h-[27px] max-md:w-[4px] max-md:h-[34px] bg-greyBg top-0 right-0" />
        <div className="h-[5px] w-[150px] max-sm:w-[100px] max-sm:h-[3px] max-md:w-[125px] max-md:h-[4px] bg-greyBg ml-[82.5px] max-sm:ml-[53.5px] max-md:ml-[66.5px]" />
        <div className="h-[300px] w-[5px] max-sm:w-[3px] max-sm:h-[200px] max-md:w-[4px] max-md:h-[250px] bg-greyBg ml-[82.5px] max-sm:ml-[53.5px] max-md:ml-[66.5px]" />
        <div className="h-[5px] w-[170px] max-sm:w-[113px] max-sm:h-[3px] max-md:w-[141px] max-md:h-[4px] bg-greyBg" />
      </div>

      <div className="text-greyBg flex gap-5 lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold uppercase font-mono">
        {Letters.map((letter, index) => (
          <div
            className="border-b-[0.3rem] border-greyBg lg:pb-4 md:pb-3 sm:pb-2 pb-1"
            key={index}
          >
            <p
              className={`animate-bounce ${
                index != 0 ? `delay-${index}00ms` : ""
              }`}
            >
              {letter}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
