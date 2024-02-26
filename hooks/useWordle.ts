import { toastifyConfig } from "./../constants/constants";
import { useState } from "react";
import { toast } from "react-toastify";

export const useWordle = (solution: string) => {
  const [turn, setTurn] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [guesses, setGuessses] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const formatGuess = () => {};

  const handleKeyUp = ({ key }: { key: string }) => {
    if (key === "Backspace") {
      setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prevGuess) => prevGuess + key);
      }
    }
    if (key === "Enter") {
      if (currentGuess.length !== 5) {
        toast.error("The word must be 5 letters long", toastifyConfig);
        return;
      }
      if (turn > 5) {
        toast.error("You have used up all your guesses", toastifyConfig);
        return;
      }
      if (history.includes(currentGuess)) {
        toast.error("You have already guessed this word", toastifyConfig);
        return;
      }
      formatGuess();
    }
  };

  console.log(">>", currentGuess);

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyUp,
  };
};
