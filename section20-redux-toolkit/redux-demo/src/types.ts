
export type BankAccountState = {
  balance: number,
  loan: number,
  loanPurpose: string,
};

export type PayloadAction = {
  type: "account/deposit", payload: number;
};
