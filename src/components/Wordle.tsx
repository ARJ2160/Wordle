import { useEffect, useState } from "react";
import { useWordle } from "../../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keyboard";
import Modal from "./Modal";

const Wordle = ({ solution }: { solution: string }) => {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyUp);
    }
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <div>
      <div>{currentGuess}</div>
      <div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      </div>
      <Keypad />
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          turn={turn}
          solution={solution}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default Wordle;
