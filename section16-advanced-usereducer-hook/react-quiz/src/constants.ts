export const Status = {
  LOADING: "loading",
  READY: "ready",
  ERROR: "error",
  ACTIVE: "active",
  FINISHED: "finished"
} as const;

export const ActionType = {
  RECEIVED: "received",
  FAILED: "failed",
  START: "start",
  ANSWER: "answer",
  NEXT_QUESTION: "question",
  FINISH: "finish"
} as const;

export const initialState: QuestionState = {
  questions: [],
  status: Status.LOADING,
  index: 0,
  answer: null,
  points: 0,
  highscore: 0
};

export type QuestionPayloadAction = {
  type: typeof ActionType.RECEIVED, payload: Question[];
} | {
  type: typeof ActionType.FAILED;
} | {
  type: typeof ActionType.START;
} | {
  type: typeof ActionType.ANSWER, payload: number;
} | {
  type: typeof ActionType.NEXT_QUESTION;
} | {
  type: typeof ActionType.FINISH;
};