import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/index";

interface searchState {
  searchInput: string;
  filter: string;
  sort: string;
  books: object[];
  totalBooks: number;
}

const initialState: searchState = {
  searchInput: "",
  filter: "All",
  sort: "Relevance",
  books: [],
  totalBooks: 0,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
      console.log("filter changed");
    },
    changeSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    changeBooks: (state, action: PayloadAction<Array<object>>) => {
      state.books = action.payload;
    },
    changeTotalBooks: (state, action: PayloadAction<number>) => {
      state.totalBooks = action.payload;
    },
  },
});

export const {
  changeInput,
  changeFilter,
  changeSort,
  changeBooks,
  changeTotalBooks,
} = searchSlice.actions;

export const selectSearchInput = (state: RootState) => state.search.searchInput;
export const selectFilter = (state: RootState) => state.search.filter;
export const selectSort = (state: RootState) => state.search.sort;
export const selectBooks = (state: RootState) => state.search.books;
export const selectTotalBooks = (state: RootState) => state.search.totalBooks;

export const searchReducer = searchSlice.reducer;
