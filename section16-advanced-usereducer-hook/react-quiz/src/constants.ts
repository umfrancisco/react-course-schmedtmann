export const Status = {
  LOADING: "loading",
  READY: "ready",
  ERROR: "error",
  ACTIVE: "active"
} as const;

export const ActionType = {
  RECEIVED: "received",
  FAILED: "failed",
  START: "start",
  ANSWER: "answer"
} as const;

export const initialState: QuestionState = {
  questions: [],
  status: Status.LOADING,
  index: 0,
  answer: null
};

export type QuestionPayloadAction = {
  type: typeof ActionType.RECEIVED, payload: Question[];
} | {
  type: typeof ActionType.FAILED;
} | {
  type: typeof ActionType.START;
} | {
  type: typeof ActionType.ANSWER, payload: number;
};