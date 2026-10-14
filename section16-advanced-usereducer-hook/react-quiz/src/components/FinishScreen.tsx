
type Props = {
  points: number;
  maxPoints: number;
  highscore: number;
}

function FinishScreen({ points, maxPoints, highscore }: Props) {
  const percentage = maxPoints && (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} {percentage && Math.ceil(percentage)}%
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  );
}

export default FinishScreen;