import { createSlice } from "@reduxjs/toolkit";
import { toursList } from "../Base/baseResponse";

type ToursList = {
    id: number;
    img: string;
    title: string;
    shortBody: string;
    fullBody: string;
    price: string;
}

type ToursState = {
    list: ToursList[];
    loading: boolean;
    error: string | null
}


const initialState: ToursState = {
  list: [],
  loading: false,
  error: null,
}; 

export const toursSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {
        getToursList: (state) => {
            state.list = toursList;
        },
        deleteToursItem: (state, action) => {
            state.list = state.list.filter(i => i.id !== action.payload)
        }
    }
})

export const { getToursList, deleteToursItem } = toursSlice.actions;

export default toursSlice.reducer