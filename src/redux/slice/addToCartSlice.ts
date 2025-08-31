import { createSlice } from '@reduxjs/toolkit';

type AddToCartType = {
  quantity: number;
};

const initialState: AddToCartType = {
  quantity: 0,
};

const addToCartSlice = createSlice({
  name: 'add to cart',
  initialState,
  reducers: {
    setCartIncrement: (state) => {
      state.quantity = state.quantity + 1;
    },
    setCartDecrement: (state) => {
      if (state.quantity >= 1) {
        state.quantity = state.quantity - 1;
      }
    },
  },
});

export const { setCartIncrement, setCartDecrement } = addToCartSlice.actions;

export default addToCartSlice.reducer;
