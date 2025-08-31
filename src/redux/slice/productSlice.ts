import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products } from '@/constants/products';

type ProductState = {
  activeIndex: number;
  color: string;
};

const initialState: ProductState = {
  activeIndex: 0,
  color: products[0].colors?.[0] ?? '#ffffff',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
      state.color = products[action.payload].colors?.[0] ?? '#ffffff';
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { setActiveIndex, setColor } = productSlice.actions;
export default productSlice.reducer;
