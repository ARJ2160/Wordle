import { useEffect, useState } from "react";
import "./App.css";
import { words } from "../data/data";
import Wordle from "./components/Wordle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [word, setWord] = useState<string>("");

  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const randomId = Math.floor(getRandomNumber(1, 100));
    const findWord = words.find((word) => word.id === randomId) || {
      id: 0,
      word: "",
    };
    setWord(findWord.word);
  }, []);

  return (
    <div>
      {word && <Wordle solution={word} />}
      <ToastContainer autoClose={8000} />
    </div>
  );
}

export default App;
