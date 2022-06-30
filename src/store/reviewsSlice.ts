import { createSlice } from "@reduxjs/toolkit";
import { baseReviewsItem, reviewsList } from "../base/baseResponse";

type ReviewsList = {
  id: number;
  img: string;
  fullName: string;
  job: string;
  info: string;
};

type ReviewsState = {
  listItem: ReviewsList;
  loading: boolean;
  error: string | null;
};

const initialState: ReviewsState = {
  listItem: baseReviewsItem,
  loading: false,
  error: null,
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    // loadCard: (state) => {

    // }
    nextCard: (state, action) => {
      state.listItem =
        reviewsList[
          action.payload + 1 <= reviewsList.length - 1 ? action.payload + 1 : 0
        ];
    },
    backCard: (state, action) => {
      state.listItem =
        reviewsList[
          action.payload - 1 >= 0 ? action.payload - 1 : reviewsList.length - 1
        ];
    },
    randomCard: (state) => {
      state.listItem =
        reviewsList[Math.floor(Math.random() * reviewsList.length)];
    },
  },
});

export const { nextCard, backCard, randomCard } = reviewsSlice.actions;

export default reviewsSlice.reducer;
