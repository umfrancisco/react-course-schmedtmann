
export interface Position {
  latitude: number;
  longitude: number;
}

export interface MenuType {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  soldOut: boolean;
  unitPrice: number;
}

export interface CartType {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface OrderType {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery?: string;
  cart: CartType[];
  position?: string;
  orderPrice?: number;
  priorityPrice?: number;
}