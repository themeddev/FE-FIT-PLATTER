// cartSlice:
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'Cart',
  initialState: {
    cartList: [],
    totalPrice: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const existingCartIndex = state.cartList.findIndex(cart => cart.id === action.payload.id);
      if (existingCartIndex !== -1) {
        state.cartList[existingCartIndex].quantity += 1;
        state.totalPrice += action.payload.price;
      } else {
        state.cartList.push({ ...action.payload, quantity: 1 });
        state.totalPrice += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      const existingCartIndex = state.cartList.findIndex(cart => cart.id === action.payload.id);
      if (existingCartIndex !== -1) {
        if (state.cartList[existingCartIndex].quantity > 1) {
          state.cartList[existingCartIndex].quantity -= 1;
          state.totalPrice -= action.payload.price;
        } else {
          state.cartList.splice(existingCartIndex, 1);
          state.totalPrice -= action.payload.price;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
