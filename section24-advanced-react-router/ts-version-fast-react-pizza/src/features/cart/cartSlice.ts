import { createSlice } from "@reduxjs/toolkit";
import type { CartItemType, CartState, CartType } from "../../types";

const initialState: CartType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item: CartItemType | undefined = state.cart.find(item => item.pizzaId === action.payload);
      if (item !== undefined) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      const item: CartItemType | undefined = state.cart.find(item => item.pizzaId === action.payload);
      if (item !== undefined) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getCart = (state: CartState) => state.cart;
export const getTotalQuantity = (state: CartState) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state: CartState) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCurrentQuantityById = (id: number) => (state: CartState) => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0; 

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

