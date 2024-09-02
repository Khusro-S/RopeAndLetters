import "./App.css";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <div className="flex flex-col gap-8 justify-center items-center max-h-screen">
          <Modal />
          <HangmanDrawing />
          <HangmanWord />
          <Keyboard />
        </div>
      </ContextProvider>
    </>
  );
}

export default App;
