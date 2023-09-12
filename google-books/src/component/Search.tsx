import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, IconButton } from "@mui/material";
// @ts-ignore
import { setInput } from "../store/searchSlice.ts";
import { useDispatch } from "react-redux";

export const Search = () => {
  const dispath = useDispatch();

  const [input, getInput] = useState("");
  const doSearch = () => {
    dispath(setInput(input));
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
        }}
      >
        <TextField
          id="outlined-basic"
          label="Поиск"
          variant="outlined"
          sx={{ mr: "5px", width: "60%" }}
          onKeyDown={(e) => keyPress(e)}
          onChange={(e) => getInput(e.target.value)}
        />
        <IconButton
          aria-label="delete"
          size="large"
          sx={{
            color: "white",
            backgroundColor: "#1976d2",
            ":hover": {
              backgroundColor: "#1976d2",
            },
          }}
          onClick={(e) => doSearch()}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Container>
  );
};
