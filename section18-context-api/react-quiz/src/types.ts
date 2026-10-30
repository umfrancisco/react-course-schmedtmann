
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

export type PayloadAction = 
| { type: "received", payload: QuestionType[]; } 
| { type: "failed"; } 
| { type: "start"; } 
| { type: "answer", payload: number; } 
| { type: "next_question"; } 
| { type: "finish"; } 
| { type: "reset"; } 
| { type: "timer"; };

export type QuizContextType = {
  state: State;
  dispatch: (action: PayloadAction) => void;
  numberQuestions: number;
  maxPoints: number;
}