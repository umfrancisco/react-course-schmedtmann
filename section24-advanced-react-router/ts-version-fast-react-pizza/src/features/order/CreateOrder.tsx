import { useSelector } from "react-redux";
import { Form, redirect, useActionData, useNavigation, type ActionFunctionArgs } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import type { RootState } from "../../store";
import store from "../../store";
import type { CartItemType, OrderType } from "../../types";
import Button from "../../ui/Button";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState<1 | 0>(0);
  const username = useSelector<RootState, string>(state => state.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();

  const { cart } = useSelector(getCart);
  const cartStr = JSON.stringify(cart);
  
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority === 1 ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) {
    return (
      <EmptyCart />
    );
  }

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={username} required />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.error && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.error}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>
        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked ? 1 : 0)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>
        <div>
          <input type="hidden" name="cart" value={cartStr} />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? "Placing order...." : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const cart: CartItemType[] = JSON.parse(data.cart.toString());
  const order: OrderType = {
    customer: data.customer.toString(),
    phone: data.phone.toString(),
    address: data.address.toString(),
    priority: data.priority ? true : false,
    status: "",
    cart: cart,
    orderPrice: 0,
    priorityPrice: 0,
  };
  if (!isValidPhone(data.phone.toString())) {
    return { error: "Please give us your correct phone number." };
  }
  const newOrder = await createOrder(order);

  // do NOT over use 
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
