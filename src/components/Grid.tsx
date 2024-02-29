import Row from "./Row";
import { FormattedGuess } from "../../types/types";

export interface IGrid {
  currentGuess: string;
  guesses: FormattedGuess[][];
  isCorrect: boolean;
  turn: number;
}

const Grid = ({
  currentGuess,
  guesses,
  isCorrect,
  turn,
}: IGrid): JSX.Element => {
  return (
    <div>
      {guesses.map((g, i) => {
        return <Row index={i} guess={g} />;
      })}
    </div>
  );
};

export default Grid;
