import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import type { OrderType } from "../../types";
import { calcMinutesLeft, formatCurrency, formatDate } from "../../utils/helpers";

function Order() {
  const order = useLoaderData();
  const deliveryIn = calcMinutesLeft(order.estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {order.priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(order.estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(order.estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(order.orderPrice)}</p>
        {order.priority && <p>Price priority: {formatCurrency(order.priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(order.orderPrice + order.priorityPrice)}</p>
      </div>
    </div>
  );
}

export const orderLoader = async ({ params }: LoaderFunctionArgs) => {
  // test ids = IIDSAT, CQE92U
  const order: OrderType = await getOrder(params.orderId);
  return order;
}

export default Order;
