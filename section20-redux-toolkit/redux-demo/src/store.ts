import type { BankAccountState, CustomerState, PayloadAction } from "./types";
import { combineReducers, createStore } from "redux";

const initialStateAccount: BankAccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer: CustomerState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action: PayloadAction) {
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

function customerReducer(state = initialStateCustomer, action: PayloadAction) {
  switch (action.type) {
    case "customer/create":
      return { ...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createdAt: action.payload.createdAt };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

function deposit(amount: number) {
  const type: "account/deposit" = "account/deposit";
  return { type: type, payload: amount };
}

function withdraw(amount: number) {
  const type: "account/withdraw" = "account/withdraw";
  return { type: type, payload: amount };
}

function requestLoan(amount: number, purpose: string) {
  const type: "account/requestLoan" = "account/requestLoan";
  const payload: { amount: number, purpose: string } = { amount, purpose };
  return { type, payload };
}

function payLoan() {
  const type: "account/payLoan" = "account/payLoan";
  return { type };
}

function createCustomer(fullName: string, nationalID: string) {
  const type: "customer/create" = "customer/create";
  const payload = { fullName, nationalID, createdAt: new Date().toISOString() };
  return { type: type, payload: payload };
}

function updateName(fullName: string) {
  const type: "customer/updateName" = "customer/updateName";
  return { type: type, payload: fullName };
}

const rootReducer = combineReducers({ account: accountReducer, customer: customerReducer });
const store = createStore(rootReducer);

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(900, "Buy a car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer("John Doe", "US"));
console.log(store.getState());
