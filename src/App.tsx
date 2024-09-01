import { useCallback, useEffect, useState } from "react";
import "./App.css";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord());
  // console.log(wordToGuess);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      // console.log(key);
      e.preventDefault();

      addGuessedLetter(key);
      setKeyPressed(key);
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
  }, [guessedLetters, addGuessedLetter, keyPressed]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
      setKeyPressed("Enter");
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
  }, []);

  return (
    <div className="flex flex-col gap-8 justify-center items-center p-5">
      <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
        {isWinner && "Winner! - Press Enter to try again"}{" "}
        {isLoser && "Nice try! - Press Enter to try again"}
      </h1>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      {/* <div className="self-stretch"> */}
      <Keyboard
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        disabled={isLoser || isWinner}
        letter=""
        isPressed
        pressedKey={keyPressed}
      />
      {/* </div> */}
    </div>
  );
}

export default App;
