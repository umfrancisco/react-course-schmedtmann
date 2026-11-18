import type { MenuType } from "../../types";
import { formatCurrency } from "../../utils/helpers";

type Props = {
  pizza: MenuType;
}

function MenuItem({ pizza }: Props) {
  return (
    <li>
      <img src={pizza.imageUrl} alt={pizza.name} />
      <div>
        <p>{pizza.name}</p>
        <p>{pizza.ingredients.join(', ')}</p>
        <div>
          {!pizza.soldOut ? <p>{formatCurrency(pizza.unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
