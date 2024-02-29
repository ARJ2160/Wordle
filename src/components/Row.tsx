import { FormattedGuess } from "../../types/types";

interface IRow {
  guess?: FormattedGuess[];
  currentGuess?: string;
}

const Row = ({ guess, currentGuess }: IRow): JSX.Element => {
  console.log(">>", currentGuess);
  if (guess) {
    return (
      <div className="row past">
        {guess.map((g, i) => (
          <div key={i} className={g.color}>
            {g.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    console.log(">>", letters);
    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div className="row" key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Row;
