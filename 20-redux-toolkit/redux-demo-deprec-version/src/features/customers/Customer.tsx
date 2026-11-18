import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { CustomerState } from "../../types";

function Customer() {
  const customer = useSelector<RootState, CustomerState>((store) => store.customer);
  const nameWithUpperCase = customer.fullName.charAt(0).toUpperCase() + customer.fullName.slice(1);

  if (customer.fullName === "") {
    return null;
  }

  return (
    <h2>👋 Welcome, {nameWithUpperCase}</h2>
  );
}

export default Customer;
