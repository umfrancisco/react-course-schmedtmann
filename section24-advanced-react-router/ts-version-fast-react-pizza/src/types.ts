
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

export interface CartItemType {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface CartType {
  cart: CartItemType[];
}

export interface OrderType {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  status: string;
  estimatedDelivery?: string;
  cart: CartType;
  position?: string;
  orderPrice: number;
  priorityPrice: number;
}

export interface UserType {
  username: string;
}

export interface CartState {
  cart: CartType;
}

export interface UserState {
  user: UserType;
}