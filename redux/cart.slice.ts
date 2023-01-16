import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state: any, action) => {
      const itemExists: any = state.find(
        (item: any) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state: any, action) => {
      const index = state.findIndex((item: any) => item.id === action.payload);
      state.splice(index, 1);
    },
    clearCart: (state: any, action) => {
      state.splice(0, state.length);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
