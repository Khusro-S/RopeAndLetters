import "./App.css";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="flex flex-col gap-8 justify-center items-center p-5 ">
        <Modal />
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard />
      </div>
    </ContextProvider>
  );
}

export default App;
