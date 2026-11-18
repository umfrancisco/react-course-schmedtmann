import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

type Props = {
  pizzaId: number;
  quantity: number;
}

function UpdateItemQuantity({ pizzaId, quantity }: Props) {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button type="round" onClick={handleDecrease}>-</Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button type="round" onClick={handleIncrease}>+</Button>
    </div>
  );
}

export default UpdateItemQuantity;