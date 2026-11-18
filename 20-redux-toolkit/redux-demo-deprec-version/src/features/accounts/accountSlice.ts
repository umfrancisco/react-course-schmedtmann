import type { BankAccountState, PayloadAction } from "../../types";

const initialStateAccount: BankAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function accountReducer(state = initialStateAccount, action: PayloadAction) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload, isLoading: false };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      const purpose = action.payload.purpose;
      const amount = action.payload.amount;
      const newBalance = state.balance + amount;
      return { ...state, balance: newBalance, loan: amount, loanPurpose: purpose };
    case "account/payLoan":
      return { ...state, loan: 0, loanPurpose: "", balance: state.balance - state.loan };
    case "account/convertingCurrency":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export function deposit(amount: number, currency: string) {
  const type: "account/deposit" = "account/deposit";
  if (currency === "USD") {
    return { type: type, payload: amount };
  }
  return (dispatch: any, getState: any) => {
    dispatch({ type: "account/convertingCurrency" });
    fetch(`https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=USD`)
      .then(res => res.json())
      .then(data => dispatch({ type: "account/deposit", payload: data.rates.USD }));
  };
}

export function withdraw(amount: number) {
  const type: "account/withdraw" = "account/withdraw";
  return { type: type, payload: amount };
}

export function requestLoan(amount: number, purpose: string) {
  const type: "account/requestLoan" = "account/requestLoan";
  const payload: { amount: number, purpose: string } = { amount, purpose };
  return { type, payload };
}

export function payLoan() {
  const type: "account/payLoan" = "account/payLoan";
  return { type };
}