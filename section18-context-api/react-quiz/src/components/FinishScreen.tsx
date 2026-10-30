import { useQuizContext } from "../contexts/QuizContext";

function FinishScreen() {
  const { state, dispatch, maxPoints } = useQuizContext();
  const { points, highscore } = state;
  const percentage = maxPoints && (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} ({percentage && Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className="btn btn-ui" onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default FinishScreen;