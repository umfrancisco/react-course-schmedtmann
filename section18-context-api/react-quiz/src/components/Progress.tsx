
type Props = {
  index: number;
  numberQuestions: number;
  points: number;
  maxPoints: number;
  answer: number | null;
}

function Progress({ index, numberQuestions, points, maxPoints, answer }: Props) {

  return (
    <header className="progress">
      <progress max={numberQuestions} value={index + Number(answer !== null)} />
      <p>Question <strong>{index + 1}</strong> / {numberQuestions}</p>
      <p><strong>{points}</strong> / {maxPoints}</p>
    </header>
  );
}

export default Progress;