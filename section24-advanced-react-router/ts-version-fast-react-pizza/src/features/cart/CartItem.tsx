import { useSelector } from "react-redux";
import type { CartItemType } from "../../types";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

type Props = {
  item: CartItemType;
}

function CartItem({ item }: Props) {
  const currentQuantity = useSelector(getCurrentQuantityById(item.pizzaId));
  
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {item.quantity}&times; {item.name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(item.totalPrice)}</p>
        <UpdateItemQuantity pizzaId={item.pizzaId} quantity={currentQuantity} />
        <DeleteItem pizzaId={item.pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
