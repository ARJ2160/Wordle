export default function Modal({
  isCorrect,
  solution,
  turn,
  setShowModal,
}: {
  isCorrect: boolean;
  solution: string;
  turn: number;
  setShowModal: (showModal: boolean) => void;
}) {
  const CrossButton = () => (
    <p
      onClick={() => setShowModal(false)}
      className="text-red-600 font-medium absolute top-3 right-6 text-2xl cursor-pointer"
    >
      x
    </p>
  );
  return (
    <div className="modal">
      {isCorrect && (
        <div className="relative">
          <CrossButton />
          <h1>You Win!</h1>
          <p className="solution">The word was - {solution}</p>
          <p className="text-black">
            You found the solution in {turn} guesses :)
          </p>
        </div>
      )}
      {!isCorrect && (
        <div className="relative">
          <CrossButton />
          <h1>You Lose :(</h1>
          <p className="solution">The word was - {solution}</p>
          <p className="text-black">Better luck next time :)</p>
        </div>
      )}
    </div>
  );
}
