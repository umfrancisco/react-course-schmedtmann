declare type State = {
  count: number;
  step: number;
};

declare type Action = {
  type: string;
  payload?: number;
};

declare type QuestionState = {
  questions: Question[] | undefined;
  status: string;
};

declare type QuestionPayloadAction = {
  type: string;
  payload?: Question[] | undefined;
};

declare type Question = {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};