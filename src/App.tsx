import { useState } from "react";
import "./App.css";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-8 justify-center items-center w-[800px] p-5">
      <h1>Win or lose</h1>
      <HangmanDrawing />
      <HangmanWord />
      <div className="self-stretch">
        <Keyboard />
      </div>
      {/* <h1 >{wordToGuess}</h1> */}
    </div>
  );
}

export default App;
