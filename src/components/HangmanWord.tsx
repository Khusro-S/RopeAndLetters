export default function HangmanWord() {
  const word = "test";
  const guesssedLetter = ["t", "g", "e"];
  return (
    <div className="flex gap-1 text-8xl font-bold uppercase font-mono">
      {word.split("").map((letter, index) => (
        <span className="border-b-[0.3rem] border-greyBg" key={index}>
          <span
            className={`${
              guesssedLetter.includes(letter) ? "visible" : "invisible"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
