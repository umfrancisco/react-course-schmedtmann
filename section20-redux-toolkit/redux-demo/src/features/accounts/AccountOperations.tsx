import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";
import type { BankAccountState } from "../../types";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const dispatch = useDispatch<AppDispatch>();
  const account = useSelector<RootState, BankAccountState>(store => store.account);

  console.log(account);

  function handleDeposit() {
    if (!depositAmount) {
      return;
    }
    dispatch(deposit(depositAmount));
    setDepositAmount(0);
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) {
      return;
    }
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount(0);
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) {
      return;
    }
    dispatch(requestLoan(loanAmount, loanPurpose));
  }

  function handlePayLoan() {
    dispatch(payLoan());
    setLoanAmount(0);
    setLoanPurpose("");
  }

  function checkIfValid(value: string) {
    const num = parseFloat(value);
    if (isNaN(num)) {
      return 0;
    }
    return num;
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="text"
            value={depositAmount}
            onChange={(e) => setDepositAmount(checkIfValid(e.target.value))}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>Deposit</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="text"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(checkIfValid(e.target.value))}
          />
          <button onClick={handleWithdrawal}>Withdraw</button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="text"
            value={loanAmount}
            onChange={(e) => setLoanAmount(checkIfValid(e.target.value))}
            placeholder="Loan amount"
            disabled={account.loan > 0}
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
            disabled={account.loan > 0}
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {account.loan > 0 && (
          <div>
            <span>Pay back ${account.loan}</span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
