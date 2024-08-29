type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="flex gap-1 text-8xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter: string, index: number) => (
        <span
          className={`border-b-[0.3rem] border-greyBg ${
            !guessedLetters.includes(letter) && reveal && "border-red-500"
          }`}
          key={index}
        >
          <span
            className={`${
              guessedLetters.includes(letter) || reveal
                ? "visible"
                : "invisible"
            } ${!guessedLetters.includes(letter) && reveal && "text-red-500"}`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
