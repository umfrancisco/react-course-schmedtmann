import type { CartType } from "../../types";
import { formatCurrency } from "../../utils/helpers";

type Props = {
  item: CartType;
  isLoadingIngredients?: any;
  ingredients?: any;
}

function OrderItem({ item, isLoadingIngredients, ingredients }: Props) {
  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{item.quantity}&times;</span> {item.name}
        </p>
        <p className="font-bold">{formatCurrency(item.totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
