
export interface BankAccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
  isLoading: boolean;
};

export interface CustomerState {
  fullName: string;
  nationalID: string;
  createdAt: string;
};
