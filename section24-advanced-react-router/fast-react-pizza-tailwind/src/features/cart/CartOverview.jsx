import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  const quantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!quantity) {
    return null;
  }

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{quantity === 1 ? quantity + " pizza" : quantity + " pizzas"}</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
