import type { BankAccountState, PayloadAction } from "../../types";

const initialStateAccount: BankAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action: PayloadAction) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
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
    default:
      return state;
  }
}

export function deposit(amount: number) {
  const type: "account/deposit" = "account/deposit";
  return { type: type, payload: amount };
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