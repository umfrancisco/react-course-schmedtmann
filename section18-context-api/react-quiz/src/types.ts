
export type Status = "loading" | "ready" | "error" | "active" | "finished";

export type State = {
  questions: QuestionType[] | undefined;
  status: Status;
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number;
};

export type QuestionType = {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export const initialState: State = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 0,
};

export type PayloadAction = 
| { type: "received", payload: QuestionType[]; } 
| { type: "failed"; } 
| { type: "start"; } 
| { type: "answer", payload: number; } 
| { type: "next_question"; } 
| { type: "finish"; } 
| { type: "reset"; } 
| { type: "timer"; };