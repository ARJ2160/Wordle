import { FormattedGuess } from "./../types/types";
import { toastifyConfig } from "./../constants/constants";
import { useState } from "react";
import { toast } from "react-toastify";

export const useWordle = (solution: string) => {
  const [turn, setTurn] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [guesses, setGuessses] = useState<FormattedGuess[][]>([...Array(6)]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  // COLOR CODE THE LETTERS
  const formatGuess = (currentGuess: string): FormattedGuess[] => {
    let solutionArray = [...solution];
    let guesses = [];
    // CHECK IF THE LETTERS IN THE CURRENT GUESS ARE IN THE RIGHT PLACE
    for (let i of currentGuess) {
      if (
        solutionArray.includes(i) &&
        solutionArray.indexOf(i) === currentGuess.indexOf(i)
      ) {
        guesses.push({
          key: i,
          color: "green",
        });
      } else if (solutionArray.includes(i)) {
        guesses.push({
          key: i,
          color: "yellow",
        });
      } else {
        guesses.push({
          key: i,
          color: "grey",
        });
      }
    }
    return guesses;
  };

  const addNewGuess = (formattedGuess: FormattedGuess[]) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuessses((prevGuesses: any) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => [...prevHistory, currentGuess]);
    setTurn((prevTurn) => prevTurn + 1);
    setCurrentGuess("");
  };

  const handleKeyUp = ({ key }: { key: string }) => {
    console.log(">>", solution);
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
      const formattedGuess = formatGuess(currentGuess);
      addNewGuess(formattedGuess);
    }
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyUp,
  };
};
