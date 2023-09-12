import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchInput: "",
    filter: "",
    sort: "Relevance",
    books: [],
  },
  reducers: {
    setInput(state, action) {
      console.log(state);
      console.log(action);

      state.searchInput = action.payload.input;
    },
    setFilter(state, action) {},
    setSort(state, action) {},
    setBooks(state, action) {},
  },
});

export const { setInput, setFilter, setSort, setBooks } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
