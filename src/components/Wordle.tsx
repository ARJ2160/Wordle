import { useEffect } from "react";
import { useWordle } from "../../hooks/useWordle";
import Grid from "./Grid";

const Wordle = ({ solution }: { solution: string }) => {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn } =
    useWordle(solution);

  // useEffect(
  //   () => console.log(">>", guesses, turn, isCorrect),
  //   [guesses, turn, isCorrect]
  // );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <div>
      <div>{currentGuess}</div>
      <div>
        <Grid
          currentGuess={currentGuess}
          guesses={guesses}
          isCorrect={isCorrect}
          turn={turn}
        />
      </div>
    </div>
  );
};

export default Wordle;
