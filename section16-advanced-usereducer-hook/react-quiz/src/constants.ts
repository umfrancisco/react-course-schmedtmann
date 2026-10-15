export const Status = {
  LOADING: "loading",
  READY: "ready",
  ERROR: "error",
  ACTIVE: "active",
  FINISHED: "finished",
} as const;

export const Action = {
  RECEIVED: "received",
  FAILED: "failed",
  START: "start",
  ANSWER: "answer",
  NEXT_QUESTION: "question",
  FINISH: "finish",
  RESET: "reset",
  TIMER: "timer",
} as const;

export const initialState: State = {
  questions: [],
  status: Status.LOADING,
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 0,
};

export type PayloadAction = {
  type: typeof Action.RECEIVED, payload: Question[];
} | {
  type: typeof Action.FAILED;
} | {
  type: typeof Action.START;
} | {
  type: typeof Action.ANSWER, payload: number;
} | {
  type: typeof Action.NEXT_QUESTION;
} | {
  type: typeof Action.FINISH;
} | {
  type: typeof Action.RESET;
} | {
  type: typeof Action.TIMER;
};