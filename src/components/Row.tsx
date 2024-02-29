import { FormattedGuess } from "../../types/types";

interface IRow {
  index: number;
  guess: FormattedGuess[];
}

const Row = ({ index, guess }: IRow): JSX.Element => {
  console.log(">> HERE", index, guess);
  return (
    <div className="row">
      {guess?.length > 0 && <div></div>}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
