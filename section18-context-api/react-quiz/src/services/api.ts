import { initialState, type PayloadAction, type State } from "../types";

const SECONDS_PER_QUESTION = 30;

export function reducer(state: State, action: PayloadAction): State {
  if (action.type === "received") {
    return { ...state, questions: action.payload, status: "ready" };
  }
  if (action.type === "failed") {
    return { ...state, status: "error" };
  }
  if (action.type === "start") {
    const time = state.questions ? state.questions.length * SECONDS_PER_QUESTION : SECONDS_PER_QUESTION;
    return { ...state, status: "active", secondsRemaining: time };
  }
  if (action.type === "answer") {
    const question = state.questions?.at(state.index);
    const calculatePoints = action.payload === question?.correctOption ? state.points + question.points : state.points;
    return { ...state, answer: action.payload, points: calculatePoints };
  }
  if (action.type === "next_question") {
    return { ...state, answer: null, index: state.index + 1 };
  }
  if (action.type === "finish") {
    const highscore = state.points > state.highscore ? state.points : state.highscore;
    return { ...state, status: "finished", highscore: highscore };
  }
  if (action.type === "reset") {
    return { ...state, status: "ready", points: 0, index: 0, answer: null, secondsRemaining: initialState.secondsRemaining };
  }
  if (action.type === "timer") {
    const hasFinished = state.secondsRemaining === 0 ? "finished" : state.status;
    return { ...state, secondsRemaining: state.secondsRemaining - 1, status: hasFinished };
  }
  return state;
}