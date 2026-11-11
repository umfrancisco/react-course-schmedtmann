
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

export interface OrderType {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}