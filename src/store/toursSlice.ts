import { createSlice } from "@reduxjs/toolkit";
import { toursList } from "../base/baseResponse";

type ToursList = {
    id: number;
    img: string;
    title: string;
    fullBody: string;
    price: string;
}

type ToursState = {
    list: ToursList[];
    loading: boolean;
    error: string | null
    activeFullBody : boolean;
}


const initialState: ToursState = {
  list: [],
  loading: false,
  error: null,
  activeFullBody: false,
}; 

export const toursSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {
        getToursList: (state) => {
            state.list = toursList;
        },
        deleteToursItem: (state, action) => {
            const requireToursItem = state.list.filter(
              (i) => i.id !== action.payload
            );
            state.list = requireToursItem;
        },
        setActiveFullBody: (state) => {
            state.activeFullBody = !state.activeFullBody
        }
    }
})

export const { getToursList, deleteToursItem, setActiveFullBody } = toursSlice.actions;

export default toursSlice.reducer