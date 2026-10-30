import { useEffect } from "react";
import { useQuizContext } from "../contexts/QuizContext";

function Timer() {
  const { state, dispatch } = useQuizContext();
  const { secondsRemaining } = state;
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formatted = (minutes < 10 ? "0"+minutes : minutes)+":"+(seconds < 10 ? "0"+seconds : seconds);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">{formatted}</div>
  );
}

export default Timer;