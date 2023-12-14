import { createSlice } from "@reduxjs/toolkit";
import { productType } from "@/types/productType";

const initialState = {
  cartItems: [] as productType[],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existedItemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (existedItemIndex >= 0) {
        state.cartItems[existedItemIndex].cartQuantity += 1;
      } else {
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);
      }
    },
  },
});

export default cartSlice.reducer;
