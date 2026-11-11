import type { MenuType, OrderType } from "../types";

const API_URL = "https://react-fast-pizza-api.jonas.io/api";

export async function getMenu(): Promise<MenuType[]> {
  return fetch(`${API_URL}/menu`)
    .then(res => res.json())
    .then(data => data.data)
    .catch(() => {
      throw Error("Failed getting menu");
    });
}

export async function getOrder(id: number) {
  return fetch(`${API_URL}/order/${id}`)
    .then(res => res.json())
    .then(data => data.data)
    .catch(() => {
      throw Error(`Couldn't find order #${id}`)
    });
}

export async function createOrder(newOrder: OrderType) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id: number, updateObj: OrderType) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don"t need the data, so we don"t return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
