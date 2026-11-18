import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { BankAccountState } from "../../types";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const account = useSelector<RootState, BankAccountState>(state => state.account);

  return (
    <div className="balance">{formatCurrency(account.balance)}</div>
  );
}

export default BalanceDisplay;
