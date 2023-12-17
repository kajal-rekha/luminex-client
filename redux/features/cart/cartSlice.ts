import { createSlice } from "@reduxjs/toolkit";
import { productType } from "@/types/productType";
import toast from "react-hot-toast";

const initialState = {
  cartItems: [] as productType[],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // add to cart
    addToCart(state, action) {
      const existedItemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existedItemIndex >= 0) {
        state.cartItems[existedItemIndex].cartQuantity += 1;
      } else {
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);

        toast.success("Product added into cart!");
      }
    },


    // remove 
    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      state.cartItems = updatedCartItems;

      toast.error("product remove from cart!");
    },


    // clear cart
    clearCart(state) {
      state.cartItems = [];

      toast.error("Cart Cleared!");
    },


    // increase
    increaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success("Quentity increased");
      }
    },


    // decrease
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.error("Quentity decreased!")
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload
        );
        state.cartItems = updatedCartItems;
      }
    },

    getSubTotal(state) {
      const subTotal = state.cartItems.reduce((acc, item) => {
        if (item.price && typeof item.price === "number") {
          const itemTotal = item.price * item.cartQuantity;
          acc += itemTotal;
        }
        return acc;
      }, 0);
      state.cartTotalAmount = subTotal;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseCart,
  decreaseCart,
  getSubTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
