import type { AppDispatch } from "../../store";
import type { BankAccountState } from "../../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: BankAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan(state, action) {
      if (state.loan > 0) return;
      console.log(action);
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance += action.payload.amount;
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    covertingCurrency(state) {
      state.isLoading = true;
    }
  },
});

export function deposit(amount: number, currency: string) {
  const type: "account/deposit" = "account/deposit";
  if (currency === "USD") {
    return { type: type, payload: amount };
  }
  return (dispatch: AppDispatch) => {
    dispatch({ type: "account/convertingCurrency" });
    fetch(`https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=USD`)
      .then(res => res.json())
      .then(data => dispatch({ type: "account/deposit", payload: data.rates.USD }));
  };
}

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;