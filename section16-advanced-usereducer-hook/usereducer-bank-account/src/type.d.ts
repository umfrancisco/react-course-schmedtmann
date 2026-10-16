
declare type State = {
  balance: number;
  loan: number;
  isActive: boolean;
};

declare type PayloadAction = {
  type: "openAccount";
} | {
  type: "deposit", payload: number;
} | {
  type: "withdraw", payload: number;
} | {
  type: "withdrawAll";
} | {
  type: "requestLoan", payload: number;
} | {
  type: "payLoan";
} | {
  type: "closeAccount";
};