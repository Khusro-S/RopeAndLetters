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
      }`}
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
    <div className="flex flex-col items-center justify-center w-full gap-2 relative">
      <div className="flex gap-2">
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

      <div className="flex gap-2">
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

      <div className="flex gap-2">
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

      <div className="absolute -right-4 top-1/2 -translate-y-1/2">
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
