import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { birthsdayList } from "../Base/baseResponse";


type BirthsdayList = {
  img: string;
  fullName: string;
  years: string;
};

type BirthsdayState = {
  list: BirthsdayList[];
  loading: boolean;
  error: string | null;
};

const initialState: BirthsdayState = {
  list: [],
  loading: false,
  error: null,
};

export const getAsBirthsday = createAsyncThunk<
  BirthsdayList[],
  undefined,
  { rejectValue: string }
>("birthsday/getAsBirthsday", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get<BirthsdayList[]>("");
    return res.data;
  } catch (error) {
    return rejectWithValue("Ошибка загрузки");
  }
});

// export const clearAsBirthsday = createAsyncThunk<>("birthsday/clearAsBirthsday");

export const birthsdaySlice = createSlice({
  name: "birthsday",
  initialState,
  reducers: {
    getBirthsday: (state) => {
        state.list = birthsdayList
    },
    clearBirthsday: (state) => {
      state.list = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsBirthsday.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAsBirthsday.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export const { getBirthsday, clearBirthsday } = birthsdaySlice.actions;

export default birthsdaySlice.reducer
