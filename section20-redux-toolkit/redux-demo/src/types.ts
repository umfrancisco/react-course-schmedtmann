
export type BankAccountState = {
  balance: number,
  loan: number,
  loanPurpose: string,
};

export type PayloadAction = {
  type: "account/deposit", payload: number;
} | {
  type: "account/withdraw", payload: number;
} | {
  type: "account/requestLoan", payload: number;
} | {
  type: "account/payLoan";
};
