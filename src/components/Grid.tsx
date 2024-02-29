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
        if (turn === i) return <Row index={i} currentGuess={currentGuess} />;
        return <Row index={i} guess={g} />;
      })}
    </div>
  );
};

export default Grid;
