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
      console.log(`In Redux: ${action.payload}`);
      state.searchInput = action.payload;
    },
    changeFilter: (state, action: PayloadAction<string>) => {
      console.log(`In Redux: ${action.payload}`);
      state.filter = action.payload;
    },
    changeSort: (state, action: PayloadAction<string>) => {
      console.log(`In Redux: ${action.payload}`);
      state.sort = action.payload;
    },
    changeBooks: (state, action: PayloadAction<Array<object>>) => {
      console.log(`In Redux: ${action.payload}`);
      state.books = action.payload;
    },
    changeTotalBooks: (state, action: PayloadAction<number>) => {
      console.log(`In Redux: ${action.payload}`);
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
