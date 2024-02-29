import Row from "./Row";
import { FormattedGuess } from "../../types/types";

export interface IGrid {
  currentGuess: string;
  guesses: FormattedGuess[][];
  turn: number;
}

const Grid = ({ currentGuess, guesses, turn }: IGrid): JSX.Element => {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) return <Row currentGuess={currentGuess} />;
        return <Row guess={g} />;
      })}
    </div>
  );
};

export default Grid;
