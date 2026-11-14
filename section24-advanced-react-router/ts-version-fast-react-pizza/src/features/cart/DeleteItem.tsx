import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

type Props = {
  pizzaId: number;
}

function DeleteItem({ pizzaId }: Props) {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>Delete</Button>
  );
}

export default DeleteItem;