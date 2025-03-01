import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface cartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image:string
}

interface cartState {
  items: cartItem[];
}

const initialState: cartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartItem>) => {
      const item = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const existingProduct = state.items.find((item) => item.id === action.payload);
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const existingProduct = state.items.find((item) => item.id === action.payload);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, updateQuantity, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state: { cart: cartState }) => state.cart.items;
export const selectCartCount = (state: { cart: cartState }) =>
  state.cart.items.reduce((total: number, item: cartItem) => total + item.quantity, 0);
