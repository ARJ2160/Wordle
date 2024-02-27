import { useEffect } from "react";
import { useWordle } from "../../hooks/useWordle";

const Wordle = ({ solution }: { solution: string }) => {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(
    () => console.log(">>", guesses, turn, isCorrect),
    [guesses, turn, isCorrect]
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return <div>{currentGuess}</div>;
};

export default Wordle;
