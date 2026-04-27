import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
};

export const shannySlice = createSlice({
  name: "shanny",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const quantity = Number(action.payload.quantity || 1);
      const item = state.products.find((i) => i._id === action.payload._id);
      if (item) {
        item.quantity += quantity;
      } else {
        state.products.push({ ...action.payload, quantity });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find((i) => i._id === action.payload._id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find((i) => i._id === action.payload._id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter((i) => i._id !== action.payload);
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem, resetCart } =
  shannySlice.actions;
export default shannySlice.reducer;
