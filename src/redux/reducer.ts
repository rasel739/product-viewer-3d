import addToCartSlice from './slice/addToCartSlice';
import productSlice from './slice/productSlice';
import reviewSlice from './slice/reviewSlice';

const reducer = {
  cart: addToCartSlice,
  product: productSlice,
  review: reviewSlice,
};

export default reducer;
