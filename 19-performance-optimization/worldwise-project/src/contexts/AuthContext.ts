import { createContext, useContext } from "react";
import type { AuthContextType } from "../types";

export const AuthContext = createContext<AuthContextType>(null!);

export function useAuthContext() {
  const context = useContext(AuthContext);
    if (context === null) {
      throw new Error("AuthContext was used outside the AuthContextProvider");
    }
    return context;
}