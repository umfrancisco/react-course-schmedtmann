import { useEffect, type ActionDispatch } from "react";
import { Action, type PayloadAction } from "../constants";

type Props = {
  dispatch: ActionDispatch<[action: PayloadAction]>;
  secondsRemaining: number;
}

function Timer({ dispatch, secondsRemaining }: Props) {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formatted = (minutes < 10 ? "0"+minutes : minutes)+":"+(seconds < 10 ? "0"+seconds : seconds);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: Action.TIMER });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">{formatted}</div>
  );
}

export default Timer;