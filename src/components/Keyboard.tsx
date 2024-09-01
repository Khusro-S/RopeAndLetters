const KEYS_ROW_FIRST = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const KEYS_ROW_SECOND = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const KEYS_ROW_THIRD = ["z", "x", "c", "v", "b", "n", "m"];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
  letter: string;
  isPressed: boolean;
  pressedKey: string | null;
};

function renderKeyButton({
  letter,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled,
  isPressed,
}: KeyboardProps) {
  const isActive = activeLetters.includes(letter);
  const isInactive = inactiveLetters.includes(letter);

  return (
    <button
      key={letter}
      onClick={() => addGuessedLetter(letter)}
      className={`${isActive ? "active" : ""} ${isInactive ? "inactive" : ""} ${
        isPressed ? "bg-greyBg text-black" : ""
      } ${
        letter === "Enter"
          ? "max-sm:w-[45px] flex justify-center items-center"
          : ""
      } rounded-lg border border-solid border-greyBg lg:py-[0.6rem] lg:px-[1.2rem] md:py-[0.5rem] md:px-[1rem] sm:py-[0.4rem] sm:px-[0.9rem] py-[0.2rem] px-[0.7rem] lg:text-lg md:text-base sm:text-sm text-[0.5rem] font-bold bg-[#1a1a1a] cursor-pointer sm:aspect-square text-center uppercase transition-colors duration-200`}
      disabled={isActive || isInactive || disabled}
    >
      {letter}
    </button>
  );
}

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
  pressedKey,
}: KeyboardProps) {
  return (
    <div className="flex flex-col items-center justify-center max-sm:gap-1 gap-2 relative">
      <div className="flex gap-2 max-sm:gap-1">
        {KEYS_ROW_FIRST.map((letter) =>
          renderKeyButton({
            letter,
            activeLetters,
            inactiveLetters,
            addGuessedLetter,
            disabled,
            isPressed: pressedKey === letter,
            pressedKey,
          })
        )}
      </div>

      <div className="flex gap-2 max-sm:gap-1">
        {KEYS_ROW_SECOND.map((letter) =>
          renderKeyButton({
            letter,
            activeLetters,
            inactiveLetters,
            addGuessedLetter,
            disabled,
            isPressed: pressedKey === letter,
            pressedKey,
          })
        )}
      </div>

      <div className="flex gap-2 max-sm:gap-1">
        {KEYS_ROW_THIRD.map((letter) =>
          renderKeyButton({
            letter,
            activeLetters,
            inactiveLetters,
            addGuessedLetter,
            disabled,
            isPressed: pressedKey === letter,
            pressedKey,
          })
        )}
      </div>

      <div className="absolute sm:-right-[18%] md:-right-[20%] max-sm:top-[3.7rem] max-sm:right-[0.08rem] top-1/2  -translate-y-1/2">
        {renderKeyButton({
          letter: "Enter",
          activeLetters,
          inactiveLetters,
          addGuessedLetter,
          disabled: false,
          isPressed: pressedKey === "Enter",
          pressedKey,
        })}
      </div>
    </div>
  );
}
