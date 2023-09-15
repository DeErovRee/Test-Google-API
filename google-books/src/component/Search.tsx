import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, IconButton } from "@mui/material";

import {
  changeInput,
  // @ts-ignore
} from "../store/searchSlice.ts";
// @ts-ignore
import { useAppDispatch } from "../hooks.ts";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const keyPress = (e) => {
    if (e.code === "Enter") {
      navigate("/");
      dispatch(changeInput(input));
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
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => keyPress(e)}
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
          onClick={() => {
            navigate("/");
            dispatch(changeInput(input));
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Container>
  );
};
