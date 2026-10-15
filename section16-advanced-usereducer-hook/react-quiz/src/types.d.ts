declare type State = {
  questions: Question[] | undefined;
  status: string;
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
};

declare type Question = {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};