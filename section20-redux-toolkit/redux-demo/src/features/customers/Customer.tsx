import { useSelector } from "react-redux";
import type { StoreType } from "../../types";

function Customer() {
  let customerName = "";
  useSelector<StoreType>((store) => customerName = store.customer.fullName);

  return (
    <h2>👋 Welcome, {customerName}</h2>
  );
}

export default Customer;
