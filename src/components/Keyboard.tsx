import { keyboard } from "../../data/data";

export default function Keypad() {
  return (
    <div className="keypad">
      {keyboard &&
        keyboard.map((l) => {
          return <div key={l.key}>{l.key}</div>;
        })}
    </div>
  );
}
