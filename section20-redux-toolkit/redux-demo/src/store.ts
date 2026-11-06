import type { BankAccountState, PayloadAction } from "./types";

const initialState: BankAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action: PayloadAction) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
  }
}