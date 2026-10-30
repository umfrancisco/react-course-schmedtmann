import { Action, initialState, Status, type PayloadAction } from "../constants";

const SECONDS_PER_QUESTION = 30;

export function reducer(state: State, action: PayloadAction): State {
  if (action.type === Action.RECEIVED) {
    return { ...state, questions: action.payload, status: Status.READY };
  }
  if (action.type === Action.FAILED) {
    return { ...state, status: Status.ERROR };
  }
  if (action.type === Action.START) {
    const time = state.questions ? state.questions.length * SECONDS_PER_QUESTION : SECONDS_PER_QUESTION;
    return { ...state, status: Status.ACTIVE, secondsRemaining: time };
  }
  if (action.type === Action.ANSWER) {
    const question = state.questions?.at(state.index);
    return { ...state, answer: action.payload, points: action.payload === question?.correctOption ? state.points + question.points : state.points };
  }
  if (action.type === Action.NEXT_QUESTION) {
    return { ...state, answer: null, index: state.index + 1 };
  }
  if (action.type === Action.FINISH) {
    const highscore = state.points > state.highscore ? state.points : state.highscore;
    return { ...state, status: Status.FINISHED, highscore: highscore };
  }
  if (action.type === Action.RESET) {
    return { ...state, status: Status.READY, points: 0, index: 0, answer: null, secondsRemaining: initialState.secondsRemaining };
  }
  if (action.type === Action.TIMER) {
    const hasFinished = state.secondsRemaining === 0 ? Status.FINISHED : state.status;
    return { ...state, secondsRemaining: state.secondsRemaining - 1, status: hasFinished };
  }
  return state;
}