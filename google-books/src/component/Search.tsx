import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, IconButton } from "@mui/material";

import {
  changeBooks,
  changeInput,
  changeTotalBooks,
  // @ts-ignore
} from "../store/searchSlice.ts";
// @ts-ignore
import { useAppDispatch, useAppSelector } from "../hooks.ts";
import axios from "axios";
import { keyAPI } from "../API.js";

export const Search = () => {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState("");

  const searchInput = useAppSelector((state) => state.search.searchInput);
  const filter = useAppSelector((state) => state.search.filter);
  const sort = useAppSelector((state) => state.search.sort);

  const doSearch = () => {
    console.log(searchInput + " " + filter + " " + sort);
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: searchInput,
          key: keyAPI,
          orderBy: sort,
          maxResults: 40,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(changeTotalBooks(response.data.totalItems));
        dispatch(changeBooks(response.data.items));
      })
      .catch((error) => console.log(error.message + error));
  };

  const keyPress = (e: any) => {
    if (e.code === "Enter") {
      doSearch();
    }
  };

  return (
    <Container
      sx={{
        mt: "5px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "#1976d2" }}>Find your favorite book!</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "700px",
          width: "100%",
          alignSelf: "center",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Поиск"
          variant="outlined"
          sx={{ mr: "5px" }}
          onKeyDown={(e) => keyPress(e)}
          onChange={(e) => {
            setInput(e.target.value);
            dispatch(changeInput(e.target.value));
          }}
        />
        <IconButton
          aria-label="find"
          size="large"
          sx={{
            color: "white",
            backgroundColor: "#1976d2",
            ":hover": {
              backgroundColor: "#1976d2",
            },
          }}
          onClick={(e) => {
            dispatch(changeInput(input));
            doSearch();
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Container>
  );
};
