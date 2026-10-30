import { useQuizContext } from "../contexts/QuizContext";

function Progress() {
  const { state, numberQuestions, maxPoints } = useQuizContext();
  const { index, answer, points } = state;

  return (
    <header className="progress">
      <progress max={numberQuestions} value={index + Number(answer !== null)} />
      <p>Question <strong>{index + 1}</strong> / {numberQuestions}</p>
      <p><strong>{points}</strong> / {maxPoints}</p>
    </header>
  );
}

export default Progress;