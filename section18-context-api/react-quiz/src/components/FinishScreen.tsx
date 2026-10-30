import type { ActionDispatch } from "react";
import type { PayloadAction } from "../types";

type Props = {
  points: number;
  maxPoints: number;
  highscore: number;
  dispatch: ActionDispatch<[action: PayloadAction]>;
}

function FinishScreen({ points, maxPoints, highscore, dispatch }: Props) {
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