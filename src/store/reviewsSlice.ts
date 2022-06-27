import { createSlice } from "@reduxjs/toolkit";
import { reviewsList } from "../base/baseResponse";


type ReviewsList = {
    id: number;
    img: string;
    fullName: string;
    job: string;
    info: string;
}

type ReviewsState = {
  list: ReviewsList;
  loading: boolean;
  error: string | null;
};

const initialState: ReviewsState = {
  list: reviewsList[0],
  loading: false,
  error: null,
}; 

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {

    }
})

export default reviewsSlice.reducer