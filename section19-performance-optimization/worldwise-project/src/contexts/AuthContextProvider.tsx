import { useReducer, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { FAKE_USER } from "../components/User";
import type { AuthPayloadAction, AuthState } from "../types";

const initialState: AuthState = {
  user: null,
  isAuthenticated: false
}

function reducer(state: AuthState, action: AuthPayloadAction) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

type Props = {
  children: ReactNode;
}

function AuthContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, isAuthenticated } = state;

  const login = (email: string, password: string) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  const logout = () => {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;