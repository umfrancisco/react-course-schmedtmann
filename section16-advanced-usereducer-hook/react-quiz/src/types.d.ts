declare type QuestionState = {
  questions: Question[] | undefined;
  status: string;
  index: number;
  answer: number | null;
  points: number;
};

declare type Question = {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};