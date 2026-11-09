
export type BankAccountState = {
  balance: number,
  loan: number,
  loanPurpose: string,
};

export type CustomerState = {
  fullName: string,
  nationalID: string,
  createdAt: string,
};

export type PayloadAction = {
  type: "account/deposit", payload: number;
} | {
  type: "account/withdraw", payload: number;
} | {
  type: "account/requestLoan", payload: { amount: number, purpose: string };
} | {
  type: "account/payLoan";
} | {
  type: "customer/create", payload: { fullName: string, nationalID: string, createdAt: string };
} | {
  type: "customer/updateName", payload: string;
};
