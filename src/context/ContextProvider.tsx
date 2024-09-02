import React, {
  useCallback,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import words from "../wordList.json";

type ContextDataTypeProps = {
  wordToGuess: string;
  guessedLetters: string[];
  activeLetters: string[];
  inactiveLetters: string[];
  isLoser: boolean;
  isWinner: boolean;
  keyPressed: string | null;
  disabled: boolean;
  numberOfGuesses: number;
  reveal: boolean;
  isPopUp: boolean;
};

type UpdateContextDataTypeProps = {
  addGuessedLetter: (letter: string) => void;
  togglePopUp: () => void;
};

const ContextData = React.createContext<ContextDataTypeProps | undefined>(
  undefined
);
const UpdateContextData = React.createContext<
  UpdateContextDataTypeProps | undefined
>(undefined);

export function useContextData() {
  const context = useContext(ContextData);
  if (!context) {
    throw new Error("useContextData must be used within a ContextProvider");
  }
  return context;
}

export function useUpdateContextData() {
  const context = useContext(UpdateContextData);
  if (!context) {
    throw new Error(
      "useUpdateContextData must be used within a ContextProvider"
    );
  }
  return context;
}

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [wordToGuess, setWordToGuess] = useState(getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const activeLetters = useMemo(() => {
    return guessedLetters.filter((letter) => wordToGuess.includes(letter));
  }, [guessedLetters, wordToGuess]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const inactiveLetters = incorrectLetters;
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (letter.toLowerCase() === "enter") {
        setGuessedLetters([]);
        setWordToGuess(getWord());
      } else if (!guessedLetters.includes(letter) && !isLoser && !isWinner) {
        setGuessedLetters((currentLetters) => [...currentLetters, letter]);
      }
    },
    [guessedLetters, isWinner, isLoser]
  );

  const [keyPressed, setKeyPressed] = useState<string | null>(null);
  const [isPopUp, setIsPopUp] = useState<boolean>(false);

  const togglePopUp = useCallback(() => {
    setIsPopUp(false);
    setGuessedLetters([]);
    setWordToGuess(getWord());
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/) && key !== "Enter") return;
      // console.log(key);
      e.preventDefault();
      addGuessedLetter(key);
      setKeyPressed(key);

      if (key == "Enter") {
        e.preventDefault();
        setGuessedLetters([]);
        setWordToGuess(getWord());
        togglePopUp();
        setKeyPressed("Enter");
      }
    };

    const handleKeyUp = () => {
      setKeyPressed(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [guessedLetters, addGuessedLetter, keyPressed, togglePopUp]);

  useEffect(() => {
    if (isLoser || isWinner) {
      setIsPopUp(true);
    }
  }, [isLoser, isWinner]);
  const disabled = isWinner || isLoser;

  const numberOfGuesses = incorrectLetters.length;
  const reveal = isLoser;

  const contextValue: ContextDataTypeProps = {
    wordToGuess,
    guessedLetters,
    activeLetters,
    isLoser,
    isWinner,
    keyPressed,
    inactiveLetters,
    disabled,
    numberOfGuesses,
    reveal,
    isPopUp,
  };

  const updateContextValue: UpdateContextDataTypeProps = {
    addGuessedLetter,
    togglePopUp,
  };

  return (
    <ContextData.Provider value={contextValue}>
      <UpdateContextData.Provider value={updateContextValue}>
        {children}
      </UpdateContextData.Provider>
    </ContextData.Provider>
  );
}

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}
