import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Review = {
  id: number;
  productId: number;
  user: string;
  rating: number;
  comment: string;
};

type ReviewState = {
  review: Review[];
};

const initialState: ReviewState = {
  review: [
    {
      id: 1,
      productId: 1,
      user: 'Alice',
      rating: 5,
      comment: 'Amazing quality! The 3D model is very detailed.',
    },
    {
      id: 2,
      productId: 2,
      user: 'Bob',
      rating: 4,
      comment: 'Looks great, but shipping took a bit longer.',
    },
    {
      id: 3,
      productId: 3,
      user: 'Charlie',
      rating: 5,
      comment: 'Absolutely love this product. Highly recommend!',
    },
  ],
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<Review>) => {
      state.review.push(action.payload);
    },
    removeReview: (state, action: PayloadAction<number>) => {
      state.review = state.review.filter((r) => r.id !== action.payload);
    },
  },
});

export const { addReview, removeReview } = reviewSlice.actions;
export default reviewSlice.reducer;
