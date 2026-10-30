import { createContext, useContext } from "react";
import type { QuizContextType } from "../types";

export const QuizContext = createContext<QuizContextType>(null!);

export function useQuizContext() {
  return useContext(QuizContext);
}